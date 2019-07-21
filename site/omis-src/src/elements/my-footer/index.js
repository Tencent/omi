import { define, WeElement } from 'omi'

define('my-footer', class extends WeElement {
  static css = require('./_index.css')

  static use = [
    'position',
    'menu'
  ]

  render() {
    const [
      position,
      menus
    ] = this.use
    const pre = this.store.getPre()
    const next = this.store.getNext()

    return (
      <div class='ft'>
        {pre &&<a href={'#/' + pre.md + `?index=${pre.index}&subIndex=${pre.subIndex}`} class='pre'>← {pre.name}</a>}
        {next &&<a href={'#/' + next.md + `?index=${next.index}&subIndex=${next.subIndex}`} class='next'>{next.name} →</a>}
      </div>
    )
  }

})
