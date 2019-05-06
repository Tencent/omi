import '../../src/elevation/index.tsx'
import { render, h } from 'omi'


const css = `
  .mdc-elevation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}`


render(
  <div class='elevation-demo-container'>
    <m-elevation css={css} class='elevation-demo-surface' z="0">0dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="1">1dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="2">2dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="3">3dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="4">4dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="5">5dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="6">6dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="7">7dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="8">8dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="9">9dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="10">10dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="11">11dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="12">12dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="13">13dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="14">14dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="15">15dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="16">16dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="17">17dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="18">18dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="19">19dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="20">20dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="21">21dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="22">22dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="23">23dp</m-elevation>
    <m-elevation css={css} class='elevation-demo-surface' z="24">24dp</m-elevation>
  </div>
  , 'body')

