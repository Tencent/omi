import '../../src/loading/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-loading size={15}></m-loading>
    <m-loading size={25}></m-loading>
    <m-loading size={35}></m-loading>
    <m-loading size={45}></m-loading>
    <m-loading size={55}></m-loading>

    <br/>
    <m-loading size={15} color='#ee4035'></m-loading>
    <m-loading size={25} color='#fdf498'></m-loading>
    <m-loading size={35} color='#f37736'></m-loading>
    <m-loading size={45} color='#7bc043'></m-loading>
    <m-loading size={55} color='#2170b8'></m-loading>
  </div>
  , 'body')

