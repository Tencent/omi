import * as THREE from 'three'

const caxProps = ['rotation']

export default class ObjectPool {
  constructor() {
    this.textList = []
    this.testListUsing = []


    this.meshList = []
    this.meshListUsing = []

    this.groupList = []
    this.groupListUsing = []

    this.boxGeometryList = []
    this.boxGeometryListUsing = []

    this.meshBasicMaterialList = []
    this.meshBasicMaterialListUsing = []

    this.phoneMaterialList = []
    this.phoneMaterialListUsing = []
  }

  reset() {
    this.testListUsing.forEach(item => {
      this.textList.push(item)
    })

    this.groupListUsing.forEach(item => {
      this.groupList.push(item)
    })

    this.boxGeometryListUsing.forEach(item => {
      this.boxGeometryList.push(item)
    })

    this.meshBasicMaterialListUsing.forEach(item => {
      this.meshBasicMaterialList.push(item)
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

          obj.children.forEach(child => {
            obj.remove(child)
          })

          vnode.children.forEach(child => {
            obj.add(this.getObj(child.nodeName, child, scene))
          })

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
      case 'box-geometry':


        let obj = this.boxGeometryList.find(item => item.width === attr.width &&
          item.height === attr.height
          && item.depth === attr.depth
        )
        if (!obj) {
          obj = new THREE.BoxGeometry(attr.width, attr.height, attr.depth);
          this.boxGeometryList.push(obj)
        }
        return obj


      case 'base-material':
        let bm
        if (this.meshBasicMaterialList.length > 0) {
          bm = this.meshBasicMaterialList[0]
          bm.color = new THREE.Color(attr.color)
        } else {
          bm = new THREE.MeshBasicMaterial({ color: attr.color });
          this.meshBasicMaterialList.push(bm)
        }

        return bm

      case 'phong-material':
        let pm
        if (this.phoneMaterialList.length > 0) {
          pm = this.phoneMaterialList[0]
          pm.color = new THREE.Color(attr.color)
        } else {
          const opts = { color: attr.color }
          if (attr.map) {
            opts.map = THREE.ImageUtils.loadTexture(attr.map)
          }
          pm = new THREE.MeshPhongMaterial(opts);
          this.phoneMaterialList.push(pm)
        }

        return pm

      case 'mesh':

        let g, m
        vnode.children.forEach(child => {
          switch (child.nodeName) {

            case 'box-geometry':
              g = this.getObj(child.nodeName, child, scene)
              break
            case 'base-material':

              m = this.getObj(child.nodeName, child, scene)
              break
            case 'phong-material':

              m = this.getObj(child.nodeName, child, scene)
              break
          }

        })
        const mesh = new THREE.Mesh(g, m)
        Object.assign(mesh.rotation, attr.rotation)
        this.meshList.push(mesh)

        return mesh
      case 'perspective-camera':
        scene.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene.camera.position.z = 5;
        return null
      case 'point-light':
        //todo，相同color、intensity和distance的复用
        const pl = new THREE.PointLight(attr.color, attr.intensity, attr.distance);
        pl.position.set(attr.position.x, attr.position.y, attr.position.z);
        pl.castShadow = attr.castShadow; // default false

        return pl

      case 'ambient-light':
        //todo，复用并改变color
        const al = new THREE.AmbientLight(attr.color);


        return al

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
