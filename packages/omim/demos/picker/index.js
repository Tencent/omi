import '../../src/picker/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-picker type="date" label="date"></m-picker>

    <m-picker type="time" label="time"></m-picker>
    <m-picker type="color" label="color"></m-picker>
    <m-picker type="datetime-local" label="datetime-local"></m-picker>
  </div>
  , 'body')

