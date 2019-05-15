import '../../src/fab/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <h3>m-fab</h3>
    <m-fab ripple icon="favorite_border"></m-fab>
    <br />
    <br />
    <m-fab ripple mini icon="favorite"></m-fab>
    <br />
    <br />
    <m-fab ripple icon="add">Create</m-fab>

     <br />
    <br />
    <m-fab ripple iconRight icon="add">Create</m-fab>
    <br />
    <br />
    <m-fab ripple>Create</m-fab>
    <br />
    <br />
     <m-fab css=".mdc-fab{
      border-radius: 50% 0!important;
     }" ripple icon="favorite_border"></m-fab>
  
    <m-fab style="margin:20px;" ripple mini css=".mdc-fab{
      border-radius: 8px!important;
     }" icon="favorite"></m-fab>
   
    <m-fab css=".mdc-fab{
      border-radius: 12px!important;
     }"  ripple icon="add">Create</m-fab>
  </div>
  , 'body')

