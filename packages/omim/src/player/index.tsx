import { tag, WeElement, h } from 'omi'
import { domReady } from '../util/dom-ready'
import * as css from './index.scss'
import '../theme.ts'

interface Props {
  src: string
  type?: string
}

@tag('m-player')
export default class Player extends WeElement<Props> {
  video: any

  disX: any

  timer: any

  Hls: any

  static css = css

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

  totalTime: string = '00:00'

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

    this.totalTime = getTimeStr(this.video.duration)
    this.$('.total').innerHTML = this.totalTime
  }

  isPlaying: boolean

  play() {
    if (this.video.paused) {
      this.video.play()
      this.isPlaying = true
      this.$('.ep-video').style.display = 'none'
    } else {
      this.video.pause()
      this.isPlaying = false
      this.$('.ep-video').style.display = 'block'
    }

    this.update()
  }

  muted: boolean = false

  volume() {
    if (this.video.muted) {
      this.video.muted = false

      this.muted = false
      setVolume(this.video.volume * 10, this.$('.line'))


    } else {
      this.muted = true
      this.video.muted = true
      setVolume(0, this.$('.line'))
    }

    this.update()
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
    this.isPlaying = false
    this.update()
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
              <svg xmlns="http://www.w3.org/2000/svg" class='is-play icon' width="24" height="24" viewBox="0 0 24 24">
                <path d={this.isPlaying ? "M6 19h4V5H6v14zm8-14v14h4V5h-4z" : "M8 5v14l11-7z"} fill="currentColor" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
      
              <span class="time">
                <b class="now">00:00</b> / <b class="total">{this.totalTime}</b>
              </span>
            </div>
            <div class="right">
              <svg class="is-volume icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d={!this.muted ? "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" : "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"} /><path d="M0 0h24v24H0z" fill="none" /></svg>
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
              <svg class="ep-full icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="ep-video icon" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
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
