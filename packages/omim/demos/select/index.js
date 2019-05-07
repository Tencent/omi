import '../../src/select/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-select onChange={(e) => { console.log(e.detail) }}>
      <option value="" disabled selected></option>
      <option value="grains">
        Bread, Cereal, Rice, and Pasta
      </option>
      <option value="vegetables">
        Vegetables
      </option>
      <option value="fruit">
        Fruit
      </option>
    </m-select>

  </div>
  , 'body')

