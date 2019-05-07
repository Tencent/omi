import '../../src/select/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-select label="Choose One Item" onChange={(e) => { console.log(e.detail) }}>
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
    <br />

    <m-select menu={} label="Choose One Item" onChange={(e) => { console.log(e.detail) }}>
    </m-select>

  </div>
  , 'body')

