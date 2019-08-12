import { h } from 'omis'
import './index.css'

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

Game.store = ({props})=> {
  return {
    showAll() {
      props.onFilter('all')
    },

    showActive() {
      props.onFilter('active')
    },

    showDone() {
      props.onFilter('done')
    },

    clearDone() {
      props.onClear()
    }
  }
}

export default Game
