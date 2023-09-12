import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../input'
import '../../icon/discount'
import '../../icon/add'

@tag('tag-add')
export default class TagAdd extends WeElement {

  inputVisible = false
  isEnter = false
  tagList = [
    {
      name: '可删除标签',
      showClose: true,
    },
    {
      name: '可删除标签',
      icon: <t-icon-discount />,
      showClose: true,
    },
    {
      name: '可删除标签',
      showClose: true,
      disabled: true,
    },
  ]

  install(): void {}

  deleteTag = (i: number) => {
    this.tagList.splice(i, 1)
    this.update()
  }

  handleClickAdd = () => {
    this.inputVisible = true
    this.update()
  }

  handleInputEnter = (value,evt) => {
    if(evt.e.key == 'Enter'){
      this.isEnter = true
      this.tagList.push({ name: value, showClose: true })
    }
    if(value && !this.isEnter){
      this.tagList.push({ name: value, showClose: true })
    }
    this.inputVisible = false
    if(evt.e.type == 'blur' && this.isEnter){
      return
    }
    console.log(this.tagList)
    this.update()
    this.isEnter = false
  }

  render() {
    return (
      <t-space direction="vertical">
          <t-space o-model="tagList">
            {this.tagList.map((tag, i) => (
              <t-tag
                key={i}
                closable
                onClose={() => {
                  this.deleteTag(i)
                }}
                icon={tag.icon}
                disabled={tag.disabled}
                style={{ marginRight: 30 }}
              >
                {tag.name}
                {i}
              </t-tag>
            ))}
          </t-space>
          <div style={{ display: 'flex', cursor: 'pointer' }}>
            {this.inputVisible ? (
              <t-input onBlur={this.handleInputEnter} onEnter={this.handleInputEnter} style={{ width: '94px' }} />
            ) : (
              <t-tag onClick={this.handleClickAdd} icon={<t-icon-add />}>
                可添加标签
              </t-tag>
            )}
          </div>
        </t-space>
    )
  }
}
