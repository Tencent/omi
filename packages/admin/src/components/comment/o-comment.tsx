import { WeElement, h, tag, classNames } from 'omi'
import { tw, sheet } from 'omi-twind'
import * as css from './o-comment.scss'
import '@omiu/input'
import '@omiu/transition'
import '@omiu/icon/comment'
import '@omiu/icon/delete-outline'
import '@omiu/icon/edit'

import '@omiu/icon/info'
import '@omiu/popconfirm'

interface Props {
  comments: ({
    creator?: string
    createTime?: string
    replies?: {
      creator?: string
      replyTo?: string
      content?: string
    }[]
  })[],
  userName?: string
}

const tagName = 'o-comment'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target, css.default]

  static defaultProps = {
    comments: [],
    userName: ''
  }
  /**
    * 点赞
    */
  likeClick(item) {
    const index = item.likeStaffList.indexOf(this.props.userName)
    if (index !== -1) {
      item.likeStaffList.splice(index, 1)
      this.fire('unlike', item)
    } else {
      item.likeStaffList.push(this.props.userName)
      this.fire('like', item)
    }
  }

  selectComponent(item) {
    this.fire('select', item.subSystemId)
  }

  deleteComment(comment, list) {
    list.splice(list.indexOf(comment), 1)
    this.fire('remove', comment)
  }

  deleteReply(reply, list) {
    list.splice(list.indexOf(reply), 1)
    this.fire('remove', reply)
  }
  /**
   * 点击取消按钮
   */
  cancel = () => {
    this.showItemId = ''
    this.update()
  }

  showItemId

  currentInputComment

  inputComment
  /**
   * 回复评论
   */
  replyComment(id, subSystemId) {
    //this.fire('reply', id, this.inputComment.trim(), subSystemId)
    this.showItemId = ''
  }

  /**
   * 提交评论
   */
  commitComment() {
    //this.fire('reply', undefined, this.currentInputComment)
    this.currentInputComment = ''
  }

  replyTextarea
  /**
   * 点击评论按钮显示输入框
   * item: 当前大评论
   * reply: 当前回复的评论
   */
  showCommentInput(item, reply) {
    if (reply) {
      this.inputComment = '@' + reply.creator + ' '
    } else {
      this.inputComment = ''
    }
    this.showItemId = item.id
    this.update()

    this.replyTextarea.focus()

  }

  render(props) {
    const { comments, userName } = props
    return (
      <div class="container">
        {comments.map((item, index) => (
          <div class="comment">
            <div class="info">
              <img src={item.avatar} class="avatar" height="36" width="36" />
              <div class="right">
                <div class="name">{item.creator}</div>
                <div class="date">{item.createTime}</div>
              </div>
            </div>
            <div class="content">{item.content}</div>
            <div class="control">
              <span
                class={classNames("like", { active: item.likes.indexOf(userName) !== -1 })}
                onclick={e => this.likeClick(item)}>
                <svg
                  class="svg-icon"
                  style="width: 1.0009765625em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                  version="1.1"
                  viewBox="0 0 1025 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1024.549 498.788c0.379 4.717 0.025 9.567-1.254 14.401l-92.244 407.161c-1.295 4.876-3.43 9.305-6.137 13.242-9.879 19.727-24.902 37.173-44.875 49.875-21.041 13.375-44.541 19.618-67.752 19.576l0-0.256-592.522-0.247c-2.071 0.307-4.168 0.515-6.327 0.515-2.165 0-4.271-0.208-6.356-0.524l-157.605-0.065c-2.215 0.355-4.47 0.59-6.788 0.59C19.109 1003.056 0 983.944 0 960.37l0.387-512.489c0-23.58 19.118-42.688 42.698-42.688 1.761 0 3.488 0.136 5.198 0.352l141.671-0.331 0-0.805c130.35-9.331 233.638-116.19 237.323-248.024-0.328-3.71-0.563-7.438-0.563-11.233 0-68.586 55.596-124.191 124.192-124.191 58.941 0 108.18 41.102 120.9 96.173l0.627-0.082c6.992 31.441 10.803 64.079 10.803 97.619 0 51.715-8.83 101.353-24.984 147.544l238.277 0.257c2.191 0 4.334 0.219 6.443 0.542 40.684 1.598 79.869 22.548 102.949 59.75C1020.604 446.423 1026.461 473.007 1024.549 498.788M85.417 917.107l85.37 0.036 0.322-426.51-85.29 0.19L85.417 917.107 85.417 917.107zM933.867 467.369c-8.207-13.231-22.701-20.186-37.229-19.402l0-0.127c-0.035 0-0.072 0-0.107 0l-301.186-0.314c-23.572 0-42.688-19.118-42.688-42.695 0-6.787 1.631-13.186 4.451-18.883l-0.453-0.374c17.053-31.748 29.459-66.356 36.492-102.865l0.535 0.014c0 0 5.676-23.051 5.604-67.264-0.061-35.024-6.443-66.999-6.443-66.999l-0.322 0c0.029-0.621 0.096-1.228 0.096-1.857 0-22.042-17.875-39.916-39.916-39.916-22.053 0-39.928 17.874-39.928 39.916 0 0.921 0.082 1.83 0.139 2.736l-0.556 0.008c0 0 0.679 33.328-5.974 67.893-2.825 14.663-6.795 28.337-10.41 39.168-0.073-0.035-0.137-0.064-0.21-0.1-35.93 109.848-126.277 194.998-239.189 223.682l-0.41 437.186 556.325 0.227c1.881 0 3.717 0.16 5.529 0.407 5.551-0.74 11.037-2.657 16.076-5.861 7.152-4.544 12.344-10.99 15.387-18.263l0.109 0.061 88.814-392.011-0.344-0.103C941.611 490.546 940.484 478.038 933.867 467.369"
                  />
                </svg>
                {item.likeStaffList && item.likeStaffList.length > 0 && <o-tooltip
                  content={`${item.likeStaffList.join(',')}赞了`}
                  effect="light"
                  placement="bottom">
                  <span class="like-num">{item.likeStaffList.length + '人赞'}</span>
                </o-tooltip>}

                <span class="like-num" v-else>赞</span>
              </span>
              <span onclick={e => this.showCommentInput(item, '')} class="comment-reply">
                <o-icon-comment></o-icon-comment>
                <span>回复</span>
              </span>

              <o-popconfirm
                onconfirm={e => this.deleteComment(item, comments)}
                cancel-button-text="取消"
                confirm-button-text="确认"
                content="确认要删除这条评论吗？"
              >
                <o-icon-info color="#F56C6C" slot="icon"></o-icon-info>
                <span class="comment-reply"
                  style="margin-left:17px;">
                  <o-icon-delete-outline></o-icon-delete-outline>
                  <span>删除</span>
                </span>
              </o-popconfirm>
            </div>
            <div class="reply">

              {item.replies && item.replies.map(reply => (
                <div class="item" >
                  <div class="reply-content">
                    <div>
                      <span class="from-name">{reply.creator}</span>
                      <span class={tw`pr-1`}>:</span>
                      {reply.replyTo && <span class="to-name">@{reply.replyTo}</span>}
                      {reply.content}
                    </div>
                  </div>
                  <div class="reply-bottom">
                    <span>{reply.createTime}</span>
                    <span onclick={e => this.showCommentInput(item, reply)} class="reply-text">
                      <o-icon-comment></o-icon-comment>
                      <span>回复</span>
                    </span>

                    {userName === reply.creator && <o-popconfirm
                      onconfirm={e => this.deleteReply(reply, item.reply)}
                      cancel-button-text="取消"
                      confirm-button-text="确认"
                      content="确认要删除这条评论吗？"
                    >
                      <o-icon-info color="#F56C6C" slot="icon"></o-icon-info>
                      <span class="reply-text">
                        <o-icon-delete-outline></o-icon-delete-outline>
                        <span>删除</span>
                      </span>
                    </o-popconfirm>}
                  </div>
                </div>
              ))}

              {item.replies && item.replies.length > 0 && <div
                onclick={e => this.showCommentInput(item, '')}
                class="write-reply"
              >
                <o-icon-edit></o-icon-edit>
                <span class="add-comment">添加新评论</span>
              </div>}

              {this.showItemId && this.showItemId === item.id && <o-transition appear name="fade">
                <div class="input-wrapper">
                  <o-input
                    block
                    rows={3}
                    autofocus
                    class="gray-bg-input"
                    placeholder="写下你的评论"
                    ref={e => this.replyTextarea = e}
                    type="textarea"
                    v-model="inputComment"
                  ></o-input>
                  <div class="btn-control">
                    <span onclick={this.cancel} class="cancel" style="font-size:12px;">取消</span>
                    <o-button
                      onclick={e => this.replyComment(item.id, item.subSystemId)}
                      class="btn"
                      round
                      size="mini"
                      type="success"
                    >发表</o-button>
                  </div>
                </div>

              </o-transition>}
            </div>
          </div>
        ))}

        <div class="input-wrapper">
          <o-input
            block
            rows={3}
            autofocus
            class="gray-bg-input"
            placeholder="写下你的评论"
            type="textarea"
            v-model="currentInputComment"
          ></o-input>
          <div class="btn-control">
            <o-button onclick={this.commitComment} class="btn" round size="mini" type="success">发表</o-button>
          </div>
        </div>
      </div >
    )
  }
}
