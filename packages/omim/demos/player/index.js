import '../../src/player/index.tsx'
import { render, h } from 'omi'
const SRC =
  'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_2fc490269fcdf87707804278a309891a.mp4'
render(
  <div style={{
    margin:'20px auto',
    width:'800px',
    height:'450px'
  }}>
    <m-player src={SRC} />
  </div>,
  'body'
)
