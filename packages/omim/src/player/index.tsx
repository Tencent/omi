import { tag, WeElement, h } from 'omi'
import { domReady } from '../util/dom-ready'
import * as css from './index.scss'
import * as fontCss from './font.scss'
import '../theme.ts'

interface Props {
  ripple: boolean
  mini: boolean
  iconRight: boolean
  icon: string
}

interface Data {}

@tag('m-player')
export default class Player extends WeElement<Props, Data> {
  video: any
  disX: any
  timer: any
  Hls: any
  static css = fontCss + css
  static propTypes = {
    src: String,
    type: String
  }
  $(node) {
    let dom = this.shadowRoot.querySelectorAll(node)
    return dom.length > 1 ? dom : dom[0]
  }
  dom() {
    this.video = this.$('video')
    this.video.volume = 0.5
    setVolume(this.video.volume * 10, this.$('.line'))
    this.$('.is-volume').onclick = () => this.volume()
    this.$('.line').forEach((item, index) => {
      item.onclick = () => {
        this.video.volume = (index + 1) / 10
        setVolume(index + 1, this.$('.line'))
      }
    })
    this.$('.progress').onmousedown = e => this.progress(e)
    this.video.onwaiting = () => this.waiting()
    this.video.oncanplay = () => this.canplay()
    this.video.ontimeupdate = () => this.updating()
    this.$('.cycle').onmousedown = e => this.down(e)

    this.$('.eplayer').onmousemove = () => this.alow()
    document.onkeydown = e => this.keydown(e)
    this.$('.ep-full').onclick = () => this.full()
    this.$('.ep-video').onclick = this.$('.is-play').onclick = () => this.play()
    this.video.onended = () => this.ended()
    this.$('.mark').ondblclick = () => {
      clearTimeout(this.timer)
      this.full()
    }
  }

  waiting() {
    this.$('.mark').classList.remove('playing')
    this.$('.mark').classList.add('loading')
  }

  canplay() {
    this.$('.mark').classList.remove('loading')
    this.$('.mark').classList.add('playing')
    this.$('.playing').onclick = () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.play()
      }, 200)
    }
    this.$('.total').innerHTML = getTimeStr(this.video.duration)
  }

  play() {
    if (this.video.paused) {
      this.video.play()
      this.$('.ep-video').style.display = 'none'
      this.$('.is-play').classList.replace('ep-play', 'ep-pause')
    } else {
      this.video.pause()
      this.$('.ep-video').style.display = 'block'
      this.$('.is-play').classList.replace('ep-pause', 'ep-play')
    }
  }

  volume() {
    if (this.video.muted) {
      this.video.muted = false
      setVolume(this.video.volume * 10, this.$('.line'))
      this.$('.is-volume').classList.replace('ep-volume-off', 'ep-volume')
    } else {
      this.video.muted = true
      setVolume(0, this.$('.line'))
      this.$('.is-volume').classList.replace('ep-volume', 'ep-volume-off')
    }
  }

  updating() {
    let cTime = getTimeStr(this.video.currentTime)
    if (this.video.buffered.length) {
      let bufferEnd = this.video.buffered.end(this.video.buffered.length - 1)
      this.$('.buffer').style.width =
        (bufferEnd / this.video.duration) * this.$('.progress').clientWidth +
        'px'
    }
    let offset =
      (this.video.currentTime / this.video.duration) * this.$('.bg').clientWidth
    this.$('.now').innerHTML = cTime
    this.$('.current').style.width = offset + 'px'
  }

  progress(e) {
    let offset = e.offsetX / this.$('.progress').offsetWidth
    this.video.currentTime = this.video.duration * offset
  }

  down(e) {
    e.stopPropagation()
    this.disX = e.clientX - this.$('.cycle').offsetLeft
    document.onmousemove = e => this.move(e)
    document.onmouseup = () => {
      e.stopPropagation()
      document.onmousemove = null
      document.onmouseup = null
    }
  }

  move(e) {
    e.stopPropagation()
    let offset = e.clientX - this.disX + 7
    if (offset < 0) offset = 0
    if (offset > this.$('.progress').clientWidth) {
      offset = this.$('.progress').clientWidth
    }
    this.$('.current').style.width = offset + 'px'
    this.video.currentTime =
      (offset / this.$('.progress').clientWidth) * this.video.duration
    document.onmousemove = null
    setTimeout(
      (document.onmousemove = e => {
        if (e) this.move(e)
      }),
      30
    )
  }

  alow() {
    clearTimeout(this.timer)
    this.$('.controls').style.bottom = 0
    this.$('.ep-video').style.bottom = 70 + 'px'
    this.timer = setTimeout(() => {
      this.$('.controls').style.bottom = -50 + 'px'
      this.$('.ep-video').style.bottom = 25 + 'px'
    }, 5000)
  }

  keydown(e) {
    switch (e.keyCode) {
      case 37:
        this.video.currentTime -= 10
        break
      case 39:
        this.video.currentTime += 10
        break
      case 38:
        setVolume(this.video.volume.toFixed(1) * 10, this.$('.line'))
        break
      case 40:
        setVolume(this.video.volume.toFixed(1) * 10, this.$('.line'))
        break
      case 32:
        this.play()
        break
      default:
    }
  }

  ended() {
    this.$('.is-play').classList.replace('ep-pause', 'ep-play')
  }

  full() {
    if (isFullScreen()) {
      document.exitFullscreen()
    } else {
      let el = this.$('.eplayer')
      let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen
      return rfs.call(el)
    }
  }

  installed() {
    domReady(() => {
      this.update()
      this.dom()
    })
  }

  render(props) {
    // this.stream(props.src, props.type)
    return (
      <div class="eplayer">
        <video id="video" class="video" src={props.src} />
        <div class="mark loading" />
        <div class="controls" style="bottom:-50px">
          <div class="progress">
            <b class="bg" />
            <b class="buffer" />
            <div class="current" style="width:0">
              <div class="dot" />
              <div class="cycle" />
            </div>
          </div>
          <div class="options">
            <div class="left">
              <i class="epicon ep-play is-play" />
              <span class="time">
                <b class="now">00:00</b> / <b class="total">00:00</b>
              </span>
            </div>
            <div class="right">
              <i class="epicon ep-volume is-volume" />
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <span class="line">
                <i />
              </span>
              <i class="epicon ep-full" />
            </div>
          </div>
        </div>
        <div class="epicon ep-video" />
      </div>
    )
  }
}

function getTimeStr(time) {
  let h: any = Math.floor(time / 3600)
  let m: any = Math.floor((time % 3600) / 60)
  let s: any = Math.floor(time % 60)
  h = h >= 10 ? h : '0' + h
  m = m >= 10 ? m : '0' + m
  s = s >= 10 ? s : '0' + s
  return h === '00' ? m + ':' + s : h + ':' + m + ':' + s
}

function setVolume(index, node) {
  for (let j = index; j < node.length; j++) {
    node[j].classList.remove('active')
  }
  for (let i = 0; i < index; i++) {
    node[i].classList.add('active')
  }
}

function isFullScreen() {
  return document.fullscreen
}
