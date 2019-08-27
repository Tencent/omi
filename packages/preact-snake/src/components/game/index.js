import { h } from 'preact'
import './_index.css'

const Game = ({map})=>(
  <div class="game">
    { map.map(row=>{
      return  <p>
          {row.map(col=>{
            if(col){
              return <b class='s'></b>
            }
            return <b></b>
          })}
      </p>
    })}
  </div>
)
  
export default Game