import { draw, h } from '../../src/index'

const size = getSize();

//全局 store或者局部 store，data全放这里，组件没有私有 data，只可以有 props
const store = {

}

//UI is UI，没有 data
const App = (props, store) => {
  return <surface top={0} left={0} width={size.width} height={size.height} enableCSSLayout={true}>
    <group style={getPageStyle()}>
      <text style={getTitleStyle()}>
        Professor PuddinPop
   </text>
      <group style={getImageGroupStyle()}>
        <image src='https://placekitten.com/720/840' style={getImageStyle()} fadeIn={true} />
      </group>
      <text style={getExcerptStyle()}>
        With these words the Witch fell down in a brown, melted, shapeless mass and began to spread over the clean boards of the kitchen floor.  Seeing that she had really melted away to nothing, Dorothy drew another bucket of water and threw it over the mess.  She then swept it all out the door.  After picking out the silver shoe, which was all that was left of the old woman, she cleaned and dried it with a cloth, and put it on her foot again.  Then, being at last free to do as she chose, she ran out to the courtyard to tell the Lion that the Wicked Witch of the West had come to an end, and that they were no longer prisoners in a strange land.
   </text>
    </group>
  </surface>
}

//渲染并注入 store
console.log(draw(App, store))

function getSize() {
  return {
    left: 0,
    top: 0,
    width: 420,
    height: 740
  }
}

function getPageStyle() {

  return {
    position: 'relative',
    padding: 14,
    width: size.width,
    height: size.height,
    backgroundColor: '#f7f7f7',
    flexDirection: 'column'
  };
}

function getImageGroupStyle() {
  return {
    position: 'relative',
    flex: 1,
    backgroundColor: '#eee'
  };
}

function getImageStyle() {
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}

function getTitleStyle() {
  return {
    fontFace: FontFace('Georgia'),
    fontSize: 22,
    lineHeight: 28,
    height: 28,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center'
  };
}

function getExcerptStyle() {
  return {
    fontFace: FontFace('Georgia'),
    fontSize: 17,
    lineHeight: 25,
    marginTop: 15,
    flex: 1,
    color: '#333'
  };
}

function FontFace() {

}
