import { h } from 'omis'
import './_index.css'

const Game = ({ }, { }, _, { data }) => {
  return <div class="game">
    {data.map.map(row=>{
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
}

Game.use = ['map']

export default Game
