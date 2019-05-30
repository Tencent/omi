import '../../src/card/index.tsx'
import '../../src/icon/index.tsx'
import { render, h } from 'omi'

function onButtonAction(evt){
console.log(evt)
}
function onIconAction(evt){
  console.log(evt)
  }
render(
  <div>

    <m-card
      width='350px'
      title='Our Changing Planet'
      subTitle='by Kurt Wagner'
      content='Visit ten places on our planet that are undergoing the biggest changes today.' img='https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg'>
    </m-card>


    <m-card
      width='350px'
      title='Our Changing Planet'
      subTitle='by Kurt Wagner'
      content='Visit ten places on our planet that are undergoing the biggest changes today.'>
    </m-card>


    <m-card
      width='350px'
      title='Our Changing Planet'
      content='Visit ten places on our planet that are undergoing the biggest changes today.'>
    </m-card>


    <m-card
      width='350px'
      title='Our Changing Planet'
      subTitle='by Kurt Wagner'
      content='Visit ten places on our planet that are undergoing the biggest changes today.' img='https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg'
      buttons={['READ', 'BOOKMARK']}
      icons={['wifi', ['favorite', 'favorite_border'], 'share']}
      onButtonAction={onButtonAction}
      onIconAction={onIconAction}

    >
    </m-card>
  </div>
  , 'body')

