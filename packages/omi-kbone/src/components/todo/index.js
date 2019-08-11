import { h } from 'omis'
import css from './_index.css'
import TodoFooter from '../todo-footer'

const Todo = (props, { clear, filter, textInput, inputText, todo, left, type, newTodo, done, toggle, deleteItem }) => {
  return (
    <div class="container">
      <div class="title">todos</div>
      {/* 需要使用cdn图片 */}
      {/* <img class="github" onClick={gotoAbout} src='./github-logo.png'></img> */}
      <div class="form">
        <input class="new-todo" onInput={textInput} value={inputText} placeholder="下一步行动计划是？" autofocus=""></input>
        <button class="add-btn" onClick={newTodo}>确定</button>
      </div>

      <div class="todo-list">
        {todo.map(item => (
          (type === 'all' || (type === 'active' && !item.done) || (type === 'done' && item.done)) && <div class={`todo-item${item.done ? ' done' : ''}`}>
            <div class="toggle" data-id={item.id} onClick={toggle}></div>
            <text >{item.text} </text>
            <div class="delete" data-id={item.id} onClick={deleteItem}></div>
          </div>
        ))}
      </div>

      <TodoFooter onFilter={filter} onClear={clear} left={left} done={done} type={type} ></TodoFooter>
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
