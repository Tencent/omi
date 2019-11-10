import * as THREE from 'three'

const caxProps = ['rotation']

export default class ObjectPool {
  constructor() {
    this.textList = []
    this.usingMesh = []
    this.testListUsing = []
    this.bitmapListUsing = []

    this.groupList = []
    this.groupListUsing = []
  }

  reset() {
    this.testListUsing.forEach(item => {
      this.textList.push(item)
    })
    this.bitmapListUsing.forEach(item => {
      this.bitmapList.push(item)
    })
    this.groupListUsing.forEach(item => {
      this.groupList.push(item)
    })
  }

  getObj(type, vnode, scene) {
    const attr = vnode.attributes
    switch (type) {
      case 'text':
        if (this.textList.length > 0) {
          const obj = this.textList[0]
          reset(obj)
          mix(attr, obj)
          return obj
        } else {
          //https://github.com/dntzhang/cax/blob/master/packages/cax/src/render/display/text.js
          const text = new cax.Text(attr.text, {
            font: attr.font,
            color: attr.color,
            baseline: attr.baseline
          })
          mix(attr, text)
          this.testListUsing.push(text)
          return text
        }
      case 'group':
        if (this.groupList.length > 0) {
          const obj = this.groupList[0]
          reset(obj)
          mix(attr, obj)
          return obj
        } else {
          const group = new THREE.Group()
          mix(attr, group)
          this.groupListUsing.push(group)
          vnode.children.forEach(child => {
            group.add(this.getObj(child.nodeName, child, scene))
          })
          return group
        }

      case 'mesh':

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material)
        console.log(attr.rotation)
        Object.assign(mesh.rotation, attr.rotation)
        this.usingMesh.push(mesh)

        return mesh
      case 'perspective-camera':
        scene.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene.camera.position.z = 5;
        return null
    }
  }


  add(type) {
    switch (type) {
      case 'text':
        break
      case 'bitmap':
        break
    }

  }
}

function reset(obj) {
  // obj.x = 0
  // obj.y = 0
  // obj.scale = 1
  obj.rotation.x = 0
  obj.rotation.y = 0
  obj.rotation.z = 0
  // obj.skewX = 0
  // obj.skewY = 0
  // obj.originX = 0
  // obj.originY = 0
  // obj.alpha = 1
  // obj.compositeOperation = null
  // obj.cursor = 'default'
  // obj.fixed = false
  // obj.shadow = null
}



function mix(attr, obj) {
  if (!attr) return
  console.log(attr,obj)
  caxProps.forEach(prop => {
    if (attr.hasOwnProperty(prop)) {
      obj[prop] = attr[prop]
    }
  })

  //bindEvent
  // Object.keys(attr).forEach(key => {
  //   if (key[0] == 'o' && key[1] == 'n') {
  //     const type = key.toLowerCase().substring(2)
  //     obj.on(type, attr[key])
  //   }
  // })
}




// getImageInfo(attr.src, (w, h, img) => {
//   obj.rect[0] = 0
//   obj.rect[1] = 0
//   obj.rect[2] = w
//   obj.rect[3] = h
//   obj.width = w
//   obj.height = h
//   obj.img = img


// })
// const img = new Image()
// function getImageInfo(src, callback) {

//   img.onload = () => {
//     callback(img.width, img.height, img)
//   }
//   img.src = src
// }
