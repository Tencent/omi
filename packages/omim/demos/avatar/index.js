
import '../../src/avatar/index.tsx'
import '../../src/badge/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-avatar src='https://material-ui.com/static/images/avatar/1.jpg'></m-avatar>

    <m-avatar size={50} src='https://material-ui.com/static/images/avatar/1.jpg'></m-avatar>

    <m-avatar size={60} src='https://material-ui.com/static/images/avatar/1.jpg'></m-avatar>

    <m-avatar size={70} src='https://material-ui.com/static/images/avatar/1.jpg'></m-avatar>


    <m-avatar square size={70} src='https://material-ui.com/static/images/avatar/1.jpg'></m-avatar>

    <br /> <br /> <br /> <br />


    <m-avatar icon="person" />


    <m-avatar icon="person" backgroundColor='#87d068' />


    <m-avatar icon="person" backgroundColor='#fde3cf' color='#f56a00' />

    <br /> <br /> <br /> <br />


    <m-avatar>DNT</m-avatar>


    <m-avatar backgroundColor='#87d068'>OMI</m-avatar>


    <m-avatar backgroundColor='#fde3cf' color='#f56a00' >User</m-avatar>

    <br /> <br /> <br /> <br />


    <m-avatar square>DNT</m-avatar>


    <m-avatar square backgroundColor='#87d068'>OMI</m-avatar>


    <m-avatar square backgroundColor='#fde3cf' color='#f56a00' >User</m-avatar>


    <br /> <br /> <br /> <br />

    <m-badge content={99} >

      <m-avatar>DNT</m-avatar>
    </m-badge>

    <m-badge dot >

      <m-avatar backgroundColor='#87d068'>OMI</m-avatar>
    </m-badge>

    <m-badge content='new'>

      <m-avatar backgroundColor='#fde3cf' color='#f56a00'>U</m-avatar>
    </m-badge>
  </div>
  , 'body')

