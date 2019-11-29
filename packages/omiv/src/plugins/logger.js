function repeat(str, times) {
  return new Array(times + 1).join(str)
}

function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

function find(list, f) {
  return list.filter(f)[0]
}

function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    // filter internal attrs
    if (key.startsWith('__')) return
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

export default function createLogger({
  collapsed = true,
  logger = console
} = {}) {
  return store => {
    let prevState = deepCopy(store.data)

    if (!store._subscribers) {
      store._subscribers = []
    }

    store._subscribers.push((mutation, state) => {
      if (typeof logger === 'undefined') {
        return
      }
      const nextState = deepCopy(state)

      const time = new Date()
      const formattedTime = ` @ ${pad(time.getHours(), 2)}:${pad(
        time.getMinutes(),
        2
      )}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}`
      const message = `mutation ${mutation.type}${formattedTime}`
      const startMessage = collapsed ? logger.groupCollapsed : logger.group

      // render
      try {
        startMessage.call(logger, message)
      } catch (e) {
        // eslint-disable-next-line
        console.log(message)
      }

      logger.log(
        '%c prev state',
        'color: #9E9E9E; font-weight: bold',
        prevState
      )
      logger.log(
        '%c mutation',
        'color: #03A9F4; font-weight: bold',
        mutation.type,
        mutation.value
      )
      logger.log(
        '%c next state',
        'color: #4CAF50; font-weight: bold',
        nextState
      )

      try {
        logger.groupEnd()
      } catch (e) {
        logger.log('—— log end ——')
      }

      prevState = nextState
    })
  }
}
