/*!
 * https://github.com/Palindrom/JSONPatcherProxy
 * (c) 2017 Starcounter
 * MIT license
 */

/** Class representing a JS Object observer  */
const JSONPatcherProxy = (function() {
  /**
	 * Deep clones your object and returns a new object.
	 */
  function deepClone(obj) {
    switch (typeof obj) {
    case "object":
      return JSON.parse(JSON.stringify(obj)) //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
    case "undefined":
      return null //this is how JSON.stringify behaves for array items
    default:
      return obj //no need to clone primitives
    }
  }
  JSONPatcherProxy.deepClone = deepClone

  function escapePathComponent(str) {
    if (str.indexOf("/") == -1 && str.indexOf("~") == -1) return str
    return str.replace(/~/g, "~0").replace(/\//g, "~1")
  }
  JSONPatcherProxy.escapePathComponent = escapePathComponent

  /**
	 * Walk up the parenthood tree to get the path
	 * @param {JSONPatcherProxy} instance
	 * @param {Object} obj the object you need to find its path
	 */
  function findObjectPath(instance, obj) {
    const pathComponents = []
    let parentAndPath = instance.parenthoodMap.get(obj)
    while (parentAndPath && parentAndPath.path) {
      // because we're walking up-tree, we need to use the array as a stack
      pathComponents.unshift(parentAndPath.path)
      parentAndPath = instance.parenthoodMap.get(parentAndPath.parent)
    }
    if (pathComponents.length) {
      const path = pathComponents.join("/")
      return "/" + path
    }
    return ""
  }
  /**
	 * A callback to be used as th proxy set trap callback.
	 * It updates parenthood map if needed, proxifies nested newly-added objects, calls default callbacks with the changes occurred.
	 * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
	 * @param {Object} target the affected object
	 * @param {String} key the effect property's name
	 * @param {Any} newValue the value being set
	 */
  function setTrap(instance, target, key, newValue) {
    const parentPath = findObjectPath(instance, target)

    const destinationPropKey = parentPath + "/" + escapePathComponent(key)

    if (instance.proxifiedObjectsMap.has(newValue)) {
      const newValueOriginalObject = instance.proxifiedObjectsMap.get(newValue)

      instance.parenthoodMap.set(newValueOriginalObject.originalObject, {
        parent: target,
        path: key
      })
    }
    /*
        mark already proxified values as inherited.
        rationale: proxy.arr.shift()
        will emit
        {op: replace, path: '/arr/1', value: arr_2}
        {op: remove, path: '/arr/2'}

        by default, the second operation would revoke the proxy, and this renders arr revoked.
        That's why we need to remember the proxies that are inherited.
      */
    const revokableInstance = instance.proxifiedObjectsMap.get(newValue)
    /*
    Why do we need to check instance.isProxifyingTreeNow?

    We need to make sure we mark revokables as inherited ONLY when we're observing,
    because throughout the first proxification, a sub-object is proxified and then assigned to
    its parent object. This assignment of a pre-proxified object can fool us into thinking
    that it's a proxified object moved around, while in fact it's the first assignment ever.

    Checking isProxifyingTreeNow ensures this is not happening in the first proxification,
    but in fact is is a proxified object moved around the tree
    */
    if (revokableInstance && !instance.isProxifyingTreeNow) {
      revokableInstance.inherited = true
    }

    // if the new value is an object, make sure to watch it
    if (
      newValue &&
			typeof newValue == "object" &&
			!instance.proxifiedObjectsMap.has(newValue)
    ) {
      instance.parenthoodMap.set(newValue, {
        parent: target,
        path: key
      })
      newValue = instance._proxifyObjectTreeRecursively(target, newValue, key)
    }
    // let's start with this operation, and may or may not update it later
    const operation = {
      op: "remove",
      path: destinationPropKey
    }
    if (typeof newValue == "undefined") {
      // applying De Morgan's laws would be a tad faster, but less readable
      if (!Array.isArray(target) && !target.hasOwnProperty(key)) {
        // `undefined` is being set to an already undefined value, keep silent
        return Reflect.set(target, key, newValue)
      }
      // when array element is set to `undefined`, should generate replace to `null`
      if (Array.isArray(target)) {
        // undefined array elements are JSON.stringified to `null`
        (operation.op = "replace"), (operation.value = null)
      }
      const oldValue = instance.proxifiedObjectsMap.get(target[key])
      // was the deleted a proxified object?
      if (oldValue) {
        instance.parenthoodMap.delete(target[key])
        instance.disableTrapsForProxy(oldValue)
        instance.proxifiedObjectsMap.delete(oldValue)
      }
    } else {
      if (Array.isArray(target) && !Number.isInteger(+key.toString())) {
        /* array props (as opposed to indices) don't emit any patches, to avoid needless `length` patches */
        if (key != "length") {
          console.warn(
            "JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch"
          )
        }
        return Reflect.set(target, key, newValue)
      }
      operation.op = "add"
      if (target.hasOwnProperty(key)) {
        if (typeof target[key] !== "undefined" || Array.isArray(target)) {
          operation.op = "replace" // setting `undefined` array elements is a `replace` op
        }
      }
      operation.value = newValue
    }
    const reflectionResult = Reflect.set(target, key, newValue)
    instance.defaultCallback(operation)
    return reflectionResult
  }
  /**
	 * A callback to be used as th proxy delete trap callback.
	 * It updates parenthood map if needed, calls default callbacks with the changes occurred.
	 * @param {JSONPatcherProxy} instance JSONPatcherProxy instance
	 * @param {Object} target the effected object
	 * @param {String} key the effected property's name
	 */
  function deleteTrap(instance, target, key) {
    if (typeof target[key] !== "undefined") {
      const parentPath = findObjectPath(instance, target)
      const destinationPropKey = parentPath + "/" + escapePathComponent(key)

      const revokableProxyInstance = instance.proxifiedObjectsMap.get(
        target[key]
      )

      if (revokableProxyInstance) {
        if (revokableProxyInstance.inherited) {
          /*
            this is an inherited proxy (an already proxified object that was moved around),
            we shouldn't revoke it, because even though it was removed from path1, it is still used in path2.
            And we know that because we mark moved proxies with `inherited` flag when we move them

            it is a good idea to remove this flag if we come across it here, in deleteProperty trap.
            We DO want to revoke the proxy if it was removed again.
          */
          revokableProxyInstance.inherited = false
        } else {
          instance.parenthoodMap.delete(revokableProxyInstance.originalObject)
          instance.disableTrapsForProxy(revokableProxyInstance)
          instance.proxifiedObjectsMap.delete(target[key])
        }
      }
      const reflectionResult = Reflect.deleteProperty(target, key)

      instance.defaultCallback({
        op: "remove",
        path: destinationPropKey
      })

      return reflectionResult
    }
  }
  /* pre-define resume and pause functions to enhance constructors performance */
  function resume() {
    this.defaultCallback = operation => {
      this.isRecording && this.patches.push(operation)
      this.userCallback && this.userCallback(operation)
    }
    this.isObserving = true
  }
  function pause() {
    this.defaultCallback = () => {}
    this.isObserving = false
  }
  /**
	 * Creates an instance of JSONPatcherProxy around your object of interest `root`.
	 * @param {Object|Array} root - the object you want to wrap
	 * @param {Boolean} [showDetachedWarning = true] - whether to log a warning when a detached sub-object is modified @see {@link https://github.com/Palindrom/JSONPatcherProxy#detached-objects}
	 * @returns {JSONPatcherProxy}
	 * @constructor
	 */
  function JSONPatcherProxy(root, showDetachedWarning) {
    this.isProxifyingTreeNow = false
    this.isObserving = false
    this.proxifiedObjectsMap = new Map()
    this.parenthoodMap = new Map()
    // default to true
    if (typeof showDetachedWarning !== "boolean") {
      showDetachedWarning = true
    }

    this.showDetachedWarning = showDetachedWarning
    this.originalObject = root
    this.cachedProxy = null
    this.isRecording = false
    this.userCallback
    /**
		 * @memberof JSONPatcherProxy
		 * Restores callback back to the original one provided to `observe`.
		 */
    this.resume = resume.bind(this)
    /**
		 * @memberof JSONPatcherProxy
		 * Replaces your callback with a noop function.
		 */
    this.pause = pause.bind(this)
  }

  JSONPatcherProxy.prototype.generateProxyAtPath = function(parent, obj, path) {
    if (!obj) {
      return obj
    }
    const traps = {
      set: (target, key, value, receiver) =>
        setTrap(this, target, key, value, receiver),
      deleteProperty: (target, key) => deleteTrap(this, target, key)
    }
    const revocableInstance = Proxy.revocable(obj, traps)
    // cache traps object to disable them later.
    revocableInstance.trapsInstance = traps
    revocableInstance.originalObject = obj

    /* keeping track of object's parent and path */

    this.parenthoodMap.set(obj, { parent, path })

    /* keeping track of all the proxies to be able to revoke them later */
    this.proxifiedObjectsMap.set(revocableInstance.proxy, revocableInstance)
    return revocableInstance.proxy
  }
  // grab tree's leaves one by one, encapsulate them into a proxy and return
  JSONPatcherProxy.prototype._proxifyObjectTreeRecursively = function(
    parent,
    root,
    path
  ) {
    for (let key in root) {
      if (root.hasOwnProperty(key)) {
        if (root[key] instanceof Object) {
          root[key] = this._proxifyObjectTreeRecursively(
            root,
            root[key],
            escapePathComponent(key)
          )
        }
      }
    }
    return this.generateProxyAtPath(parent, root, path)
  }
  // this function is for aesthetic purposes
  JSONPatcherProxy.prototype.proxifyObjectTree = function(root) {
    /*
    while proxyifying object tree,
    the proxyifying operation itself is being
    recorded, which in an unwanted behavior,
    that's why we disable recording through this
    initial process;
    */
    this.pause()
    this.isProxifyingTreeNow = true
    const proxifiedObject = this._proxifyObjectTreeRecursively(
      undefined,
      root,
      ""
    )
    /* OK you can record now */
    this.isProxifyingTreeNow = false
    this.resume()
    return proxifiedObject
  }
  /**
	 * Turns a proxified object into a forward-proxy object; doesn't emit any patches anymore, like a normal object
	 * @param {Proxy} proxy - The target proxy object
	 */
  JSONPatcherProxy.prototype.disableTrapsForProxy = function(
    revokableProxyInstance
  ) {
    if (this.showDetachedWarning) {
      const message =
				"You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects"

      revokableProxyInstance.trapsInstance.set = (
        targetObject,
        propKey,
        newValue
      ) => {
        console.warn(message)
        return Reflect.set(targetObject, propKey, newValue)
      }
      revokableProxyInstance.trapsInstance.set = (
        targetObject,
        propKey,
        newValue
      ) => {
        console.warn(message)
        return Reflect.set(targetObject, propKey, newValue)
      }
      revokableProxyInstance.trapsInstance.deleteProperty = (
        targetObject,
        propKey
      ) => {
        return Reflect.deleteProperty(targetObject, propKey)
      }
    } else {
      delete revokableProxyInstance.trapsInstance.set
      delete revokableProxyInstance.trapsInstance.get
      delete revokableProxyInstance.trapsInstance.deleteProperty
    }
  }
  /**
	 * Proxifies the object that was passed in the constructor and returns a proxified mirror of it. Even though both parameters are options. You need to pass at least one of them.
	 * @param {Boolean} [record] - whether to record object changes to a later-retrievable patches array.
	 * @param {Function} [callback] - this will be synchronously called with every object change with a single `patch` as the only parameter.
	 */
  JSONPatcherProxy.prototype.observe = function(record, callback) {
    if (!record && !callback) {
      throw new Error("You need to either record changes or pass a callback")
    }
    this.isRecording = record
    this.userCallback = callback
    /*
    I moved it here to remove it from `unobserve`,
    this will also make the constructor faster, why initiate
    the array before they decide to actually observe with recording?
    They might need to use only a callback.
    */
    if (record) this.patches = []
    this.cachedProxy = this.proxifyObjectTree(this.originalObject)
    return this.cachedProxy
  }
  /**
	 * If the observed is set to record, it will synchronously return all the patches and empties patches array.
	 */
  JSONPatcherProxy.prototype.generate = function() {
    if (!this.isRecording) {
      throw new Error("You should set record to true to get patches later")
    }
    return this.patches.splice(0, this.patches.length)
  }
  /**
	 * Revokes all proxies rendering the observed object useless and good for garbage collection @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable}
	 */
  JSONPatcherProxy.prototype.revoke = function() {
    this.proxifiedObjectsMap.forEach(el => {
      el.revoke()
    })
  }
  /**
	 * Disables all proxies' traps, turning the observed object into a forward-proxy object, like a normal object that you can modify silently.
	 */
  JSONPatcherProxy.prototype.disableTraps = function() {
    this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this)
  }
  return JSONPatcherProxy
})()

export default JSONPatcherProxy
