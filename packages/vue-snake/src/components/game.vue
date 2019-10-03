<script>
import { $ } from 'omiv'

export default $({
  use: ['map'],
  render(h) {
    const { map } = this.$store.data
    return (
      <div class="game">
        {map.map(row => {
          return (
            <p>
              {row.map(col => {
                if (col) {
                  return <b class="s"></b>
                }
                return <b></b>
              })}
            </p>
          )
        })}
      </div>
    )
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  border: 2px solid #000;
  padding: 10px 0 5px 0;
  width: 725px;
  margin: 10px auto;
  background-color: #9ead86;
  text-align: center;
}

.game p {
  width: 725px;
  height: 44px;
  white-space: nowrap;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.game b {
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 4px;
  border: 4px solid #879372;
  margin: 0 4px 4px 0;
}

.game b.s:after {
  background: #000;
}

.game b:after {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: #879372;
  overflow: hidden;
}
</style>
