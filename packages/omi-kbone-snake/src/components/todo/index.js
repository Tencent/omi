import { h } from 'omis'
import css from './_index.css'
import TodoFooter from '../todo-footer'

const Todo = (props, store) => {
  return (
    <div class="container">
      <TodoFooter  ></TodoFooter>

      <div class="ctrl" style="margin-top: 20rpx;">
        <div class="btn cm-btn cm-btn-dir" style="top: 0rpx; left: 374rpx;"><i class=""></i><em style="transform: translate(0rpx, 63rpx) scale(1, 2);"></em><span class="_1zCL">Rotation</span></div>
        <div class="btn cm-btn cm-btn-dir" style="top: 180rpx; left: 374rpx;"><i class=""></i><em style="transform: translate(0rpx, -71rpx) rotate(180deg) scale(1, 2);"></em><span class="">Down</span></div>
        <div class="btn cm-btn cm-btn-dir" style="top: 90rpx; left: 284rpx;"><i class=""></i><em style="transform: translate(60rpx, -12rpx) rotate(270deg) scale(1, 2);"></em><span class="">Left</span></div>
        <div class="btn cm-btn cm-btn-dir" style="top: 90rpx; left: 464rpx;"><i class=""></i><em style="transform: translate(-60rpx, -12rpx) rotate(90deg) scale(1, 2);"></em><span class="">Right</span></div>
        <div class="btn cm-btn space" style="top: 100rpx; left: 52rpx;"><i class=""></i><span class="">Drop (SPACE)</span></div>
        <div class="btn dg small" style="top: 0rpx; left: 196rpx;"><i class=""></i><span class="">Reset(R)</span></div>
        <div class="btn RBZg small" style="top: 0rpx; left: 106rpx;"><i class=""></i><span class="">Sound(S)</span></div>
        <div class="btn RBZg small" style="top: 0rpx; left: 16rpx;"><i class=""></i><span class="">Pause(P)</span></div>
      </div>
    </div>
  )
}

Todo.store = _ => {
  return {

    todo: [{ text: '学习 Kbone', id: 0 }, { text: '学习 Omi', id: 1 }],
    id: 1,
    inputText: '',
    left: 2,
    type: 'all',
    done: 0,


    textInput(evt) {
      this.inputText = evt.target.value
    },

    gotoAbout() {
      wx.navigateTo({
        url: '../about/index'
      })
    },

    toggle(evt) {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i]
        if (item.id === Number(evt.target.dataset.id)) {
          item.done = !item.done
          this.computeCount()
          _.update()
          break
        }
      }
    },

    computeCount() {
      this.left = 0
      this.done = 0
      for (let i = 0, len = this.todo.length; i < len; i++) {
        this.todo[i].done ? this.done++ : this.left++
      }
    },

    deleteItem(evt) {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i]
        if (item.id === Number(evt.target.dataset.id)) {
          this.todo.splice(i, 1)
          this.computeCount()
          _.update()
          break
        }
      }
    },

    newTodo() {
      if (this.inputText.trim() === '') {
        wx.showToast({
          title: '内容不能为空',
          icon: 'none',
          duration: 2000
        })

        return
      }

      this.todo.unshift({
        text: this.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      })
      this.computeCount()
      this.inputText = ''
      _.update()

    },

    installed() {

    },

    filter(type) {
      //因为是自定义事件
      //注意这里的 this 指向，不能直接 this.type = type
      _.store.type = type
      _.update()
    },

    clear(evt) {
      //因为是自定义事件
      //注意这里的 this 指向
      const self = _.store
      wx.showModal({
        title: '提示',
        content: '确定清空已完成任务？',
        success: (res) => {
          if (res.confirm) {
            for (let i = 0, len = self.todo.length; i < len; i++) {
              const item = self.todo[i]
              if (item.done) {
                self.todo.splice(i, 1)
                len--
                i--
              }
            }
            self.done = 0
            _.update()

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    },

    gotoAbout() {
      wx.navigateTo({
        url: '../about/index'
      })
    },

    clickHandle() {
      if ("undefined" != typeof wx && wx.getSystemInfoSync) {
        wx.navigateTo({
          url: '../log/index?id=1'
        })
      } else {
        location.href = 'log.html'
      }
    }
  }
}

Todo.css = css

export default Todo
