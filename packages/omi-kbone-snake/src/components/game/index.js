import { h } from 'omis'
import './index.css'

const arr = []

for(let i = 0;i<16;i++){
  const row = []
  for(let j = 0;j<16;j++){
    row.push(0)
  }
  arr.push(row)
}

const Game = ({ left, type, done }, { showAll, showActive, showDone, clearDone }) => {
  return <div class="game">
    {arr.map(row=>{
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
