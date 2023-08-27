import { define, OmiProps, h, render, WeElement } from 'omi'
import * as css from './overview.less'

define(
  'page-overview',
  class extends WeElement {
    static css = [
      css.default,
      `
.light .__dark__ {
  display: none;
}

.dark .__light__ {
  display: none;
}

p {
  padding: 0;
  margin: 0;
}
`,
    ]

    installed() {
      this.store.ui.overview = this
    }

    render(props, store) {
      return (
        <div name="DOC" class={this.store.themeMode}>
          <h3>
            基础<em class="tag">3</em>
          </h3>
          <section class="image-group">
            <div class="image-wrapper">
              <a class="item" href="#/button">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-button.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-button-dark.png" />
                <p class="name">Button 按钮</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/icon">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-icon.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-icon-dark.png" />
                <p class="name">Icon 图标</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/link">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-link.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-link-dark.png" />
                <p class="name">Link 链接</p>
              </a>
            </div>
          </section>

          <h3>
            布局<em class="tag">4</em>
          </h3>
          <section class="image-group">
            <div class="image-wrapper">
              <a class="item" href="#/grid">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-grid.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-grid-dark.png" />
                <p class="name">Grid 栅格</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/layout">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-layout.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-layout-dark.png" />
                <p class="name">Layout 布局</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/divider">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-divider.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-divider-dark.png" />
                <p class="name">Divider 分割线</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/space">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-space.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-space-dark.png" />
                <p class="name">Space 间距</p>
              </a>
            </div>
          </section>

          <h3>
            导航<em class="tag">8</em>
          </h3>
          <section class="image-group">
            <div class="image-wrapper">
              <a class="item" href="#/affix">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-affix.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-affix-dark.png" />
                <p class="name">Affix 固钉</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/anchor">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-anchor.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-anchor-dark.png" />
                <p class="name">Anchor 锚点</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/breadcrumb">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-breadcrumb.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-breadcrumb-dark.png" />
                <p class="name">Breadcrumb 面包屑</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/dropdown">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-dropdown.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-dropdown-dark.png" />
                <p class="name">Dropdown 下拉菜单</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/menu">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-menu.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-menu-dark.png" />
                <p class="name">Menu 导航</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/pagination">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-pagination.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-pagination-dark.png" />
                <p class="name">Pagination 分页</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/steps">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-steps.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-steps-dark.png" />
                <p class="name">Steps 步骤条</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/tabs">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-tabs.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-tabs-dark.png" />
                <p class="name">Tabs 选项卡</p>
              </a>
            </div>
          </section>
          <h3>
            输入<em class="tag">20</em>
          </h3>
          <section class="image-group">
            <div class="image-wrapper">
              <a class="item" href="#/cascader">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-cascader.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-cascader-dark.png" />
                <p class="name">Cascader 级联选择器</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/checkbox">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-checkbox.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-checkbox-dark.png" />
                <p class="name">Checkbox 多选框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/color-picker">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-color-picker.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-color-picker-dark.png" />
                <p class="name">ColorPicker 颜色选择器</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/date-picker">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-datepicker.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-datepicker-dark.png" />
                <p class="name">DatePicker 日期选择器</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/form">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-form.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-form-dark.png" />
                <p class="name">Form 表单</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/input">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-input.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-input-dark.png" />
                <p class="name">Input 输入框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/input-adornment">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-adornment.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-adornment-dark.png" />
                <p class="name">InputAdornment 输入装饰器</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/input-number">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-inputnumber.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-inputnumber-dark.png" />
                <p class="name">InputNumber 数字输入框</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/radio">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-radio.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-radio-dark.png" />
                <p class="name">Radio 单选框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/range-input">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-rangeinput.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-rangeinput-dark.png" />
                <p class="name">RangeInput 范围输入框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/select">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-select.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-select-dark.png" />
                <p class="name">Select 选择器</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/select-input">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-select-input.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-select-input-dark.png" />
                <p class="name">SelectInput 筛选器输入框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/slider">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-slider.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-slider-dark.png" />
                <p class="name">Slider 滑块</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/switch">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-switch.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-switch-dark.png" />
                <p class="name">Switch 开关</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/tag-input">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-tag-input.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-tag-input-dark.png" />
                <p class="name">TagInput 标签输入框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/textarea">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-textarea.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-textarea-dark.png" />
                <p class="name">Textarea 多行文本框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/transfer">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-transfer.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-transfer-dark.png" />
                <p class="name">Transfer 穿梭框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/time-picker">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-timepicker.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-timepicker-dark.png" />
                <p class="name">TimePicker 时间选择器</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/tree-select">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-treeselect.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-treeselect-dark.png" />
                <p class="name">TreeSelect 树选择</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/upload">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-upload.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-upload-dark.png" />
                <p class="name">Upload 上传</p>
              </a>
            </div>
          </section>

          <h3>
            数据展示<em class="tag">20</em>
          </h3>
          <section class="image-group">
            <div class="image-wrapper">
              <a class="item" href="#/avatar">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-avatar.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-avatar-dark.png" />
                <p class="name">Avatar 头像</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/badge">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-badge.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-badge-dark.png" />
                <p class="name">Badge 徽标</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/card">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-card.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-card-dark.png" />
                <p class="name">Card 卡片</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/calendar">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-calendar.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-calendar-dark.png" />
                <p class="name">Calendar 日历</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/collapse">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-collapse.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-collapse-dark.png" />
                <p class="name">Collapse 折叠面板</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/comment">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-comment.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-comment-dark.png" />
                <p class="name">Comment 评论</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/image">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-image.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-image-dark.png" />
                <p class="name">Image 图片</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/image-viewer">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-imageviewer.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-imageviewer-dark.png" />
                <p class="name">ImageViewer 图片预览</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/list">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-list.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-list-dark.png" />
                <p class="name">List 列表</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/loading">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-loading.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-loading-dark.png" />
                <p class="name">Loading 加载</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/progress">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-progress.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-progress-dark.png" />
                <p class="name">Progress 进度条</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/rate">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-rate.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-rate-dark.png" />
                <p class="name">Rate 评分</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/skeleton">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-skeleton.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-skeleton-dark.png" />
                <p class="name">Skeleton 骨架屏</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/swiper">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-swiper.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-swiper-dark.png" />
                <p class="name">Swiper 轮播框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/table">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-table.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-table-dark.png" />
                <p class="name">Table 表格</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/tag">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-tag.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-tag-dark.png" />
                <p class="name">Tag 标签</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/timeline">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-timeline.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-timeline-dark.png" />
                <p class="name">Timeline 时间轴</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/tooltip">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-tooltip.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-tooltip-dark.png" />
                <p class="name">Tooltip 文字提示</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/tree">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-tree.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-tree-dark.png" />
                <p class="name">Tree 树</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/watermark">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-watermark.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-watermark-dark.png" />
                <p class="name">Watermark 水印</p>
              </a>
            </div>
          </section>

          <h3>
            消息提醒<em class="tag">8</em>
          </h3>
          <section class="image-group">
            <div class="image-wrapper">
              <a class="item" href="#/alert">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-alert.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-alert-dark.png" />
                <p class="name">Alert 警告提醒</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/dialog">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-dialog.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-dialog-dark.png" />
                <p class="name">Dialog 对话框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/drawer">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-drawer.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-drawer-dark.png" />
                <p class="name">Drawer 抽屉</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/guide">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-button.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-button-dark.png" />
                <p class="name">Guide 引导</p>
              </a>
            </div>

            <div class="image-wrapper">
              <a class="item" href="#/message">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-message.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-message-dark.png" />
                <p class="name">Message 全局提示</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/notification">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-notification.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-notification-dark.png" />
                <p class="name">Notification 消息通知</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/popconfirm">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-popconfirm.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-popconfirm-dark.png" />
                <p class="name">Popconfirm 气泡提示框</p>
              </a>
            </div>
            <div class="image-wrapper">
              <a class="item" href="#/popup">
                <img class="__light__" src="https://tdesign.gtimg.com/site/doc/doc-popup.png" />
                <img class="__dark__" src="https://tdesign.gtimg.com/site/doc/doc-popup-dark.png" />
                <p class="name">Popup 弹出层</p>
              </a>
            </div>
          </section>
        </div>
      )
    }
  },
)
