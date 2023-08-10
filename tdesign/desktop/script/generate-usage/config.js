/* eslint-disable */
module.exports = {
  button: {
    panelStr: `const panelList = [{label: 'button', value: 'button'}];`,
    render: {
      button: `<t-button v-bind="configProps">确定</t-button>`,
    },
  },
  divider: {
    panelStr: `const panelList = [{label: 'divider', value: 'divider'}];`,
    render: {
      divider: `
        <div :style="{ width: '200px' }">
          <span>正直</span>
          <t-divider v-bind="configProps">TDesign</t-divider>
          <span>进取</span>
          <t-divider v-bind="configProps">TDesign</t-divider>
          <span>合作</span>
          <t-divider v-bind="configProps">TDesign</t-divider>
          <span>创新</span>
        </div>
      `,
    },
  },
  alert: {
    panelStr: `const panelList = [{label: 'alert', value: 'alert'}];`,
    render: {
      alert: `<t-alert message="这是一条信息" v-bind="configProps" />`,
    },
  },
  anchor: {
    panelStr: `const panelList = [{label: 'anchor', value: 'anchor'}];`,
    render: {
      anchor: `
        <t-anchor v-bind="configProps">
          <t-anchor-item href="#锚点一" title="基础锚点" />
          <t-anchor-item href="#锚点二" title="多级锚点" />
          <t-anchor-item href="#锚点三" title="指定容器锚点" />
        </t-anchor>
      `,
    },
  },
  'color-picker': {
    panelStr: `const panelList = [{label: 'colorPicker', value: 'colorPicker'}];`,
    render: {
      colorPicker: `<t-color-picker-panel v-bind="configProps"/>`,
    },
  },
  calendar: {
    panelStr: `const panelList = [{label: 'calendar', value: 'calendar'}];`,
    render: {
      calendar: `<t-calendar v-bind="configProps" />`,
    },
  },
  'date-picker': {
    importStr: `
      import datePickerConfigJson from './date-picker-props.json';\n
      import dateRangePickerConfigJson from './date-range-picker-props.json';\n
    `,
    configStr: `const configList = ref(datePickerConfigJson);`,
    panelStr: `
      const panelList = [
        {label: 'datePicker', value: 'datePicker', config: datePickerConfigJson},
        {label: 'dateRangePicker', value: 'dateRangePicker', config: dateRangePickerConfigJson}
      ];
    `,
    panelChangeStr: `
      function onPanelChange(panel) {
        configList.value = panelList.find(item => item.value === panel).config;
        usageCode.value = \`<template>\${usageCodeMap[panel].trim()}</template>\`;
      }
    `,
    render: {
      datePicker: `<t-date-picker v-bind="configProps" />`,
      dateRangePicker: `<t-date-range-picker v-bind="configProps" />`,
    },
  },
  dropdown: {
    panelStr: `const panelList = [{label: 'dropdown', value: 'dropdown'}];`,
    render: {
      dropdown: `
        <t-dropdown :options="[{ content: '操作一', value: 1 }, { content: '操作二', value: 2 }]" v-bind="configProps">
          <t-button>更多...</t-button>
        </t-dropdown>
      `,
    },
  },
  menu: {
    panelStr: `const panelList = [{label: 'menu', value: 'menu'}, {label: 'headMenu', value: 'headMenu'}];`,
    render: {
      menu: `
        <div :style="{ padding: '24px', background: 'var(--bg-color-page)', borderRadius: '3px' }">
          <t-menu v-bind="configProps">
            <t-menu-item value="0">
              <template #icon>
                <t-icon name="app" />
              </template>
              仪表盘
            </t-menu-item>
      
            <t-submenu value="1" title="资源列表">
              <template #icon>
                <t-icon name="code" />
              </template>
              <t-menu-item value="1-1" disabled>
                <span>菜单二</span>
              </t-menu-item>
            </t-submenu>
            <t-submenu value="2" title="调度平台">
              <template #icon>
                <t-icon name="file" />
              </template>
              <t-submenu value="2-1" title="二级菜单-1">
                <t-menu-item value="3-1">三级菜单-1</t-menu-item>
                <t-menu-item value="3-2">三级菜单-2</t-menu-item>
                <t-menu-item value="3-3">三级菜单-3</t-menu-item>
              </t-submenu>
              <t-menu-item value="2-2">
                <span>二级菜单-2</span>
              </t-menu-item>
            </t-submenu>
          </t-menu>
        </div>
      `,
      headMenu: `
        <div :style="{ padding: '24px', background: 'var(--bg-color-page)', borderRadius: '3px' }">
          <t-head-menu style="marginBottom: 20px" v-bind="configProps">
            <template #logo>
              <img src="https://www.tencent.com/img/index/menu_logo_hover.png" width="136" />
            </template>
            <t-menu-item value="0">
              <span>菜单1</span>
            </t-menu-item>
            <t-menu-item value="1">
              <span>菜单2</span>
            </t-menu-item>
          </t-head-menu>
        </div>
      `,
    },
  },
  pagination: {
    panelStr: `const panelList = [{label: 'pagination', value: 'pagination'}];`,
    render: {
      pagination: `<t-pagination :total="30" v-bind="configProps" />`,
    },
  },
  steps: {
    panelStr: `const panelList = [{label: 'steps', value: 'steps'}];`,
    render: {
      steps: `
      <t-steps :default-current="1" v-bind="configProps">
        <t-step-item title="步骤1" content="提示文字" />
          <t-step-item title="步骤2" content="提示文字" />
          <t-step-item title="步骤3" content="提示文字" />
        </t-steps>
      `,
    },
  },
  table: {
    importStr: `
      import baseConfigJson from './base-table-props.json';\n
    `,
    configStr: `const configList = ref(baseConfigJson);`,
    panelStr: `
      const panelList = [
        {label: 'Table', value: 'baseTable', config: baseConfigJson},
      ];
    `,
    script: `
      import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-omi';

      const statusNameListMap = {
        0: { label: '审批通过', theme: 'success', icon: <CheckCircleFilledIcon /> },
        1: { label: '审批失败', theme: 'danger', icon: <CloseCircleFilledIcon /> },
        2: { label: '审批过期', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
      };
      
      const data = ref(
        Array(4)
          .fill(0)
          .map((_, i) => ({
            index: i,
            applicant: ['贾明', '张三', '王芳'][i % 3],
            status: i % 3,
            channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
            detail: {
              email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
            },
          })),
      );
      
      const columns = ref([
        { colKey: 'applicant', title: '申请人', width: '120' },
        {
          colKey: 'status',
          title: '审批状态',
          width: '120',
          cell: (h, { row }) => {
            return (
              <t-tag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
                {statusNameListMap[row.status].icon}
                {statusNameListMap[row.status].label}
              </t-tag>
            );
          },
        },
        { colKey: 'channel', title: '签署方式' },
        { colKey: 'detail.email', title: '电子邮件' },
      ]);
    `,
    panelChangeStr: `
      function onPanelChange(panel) {
        configList.value = panelList.find(item => item.value === panel).config;
        usageCode.value = \`<template>\${usageCodeMap[panel].trim()}</template>\`;
      }
    `,
    render: {
      baseTable: `<t-base-table
        v-bind="configProps"
        row-key="index"
        :data="data"
        :columns="columns"
      ></t-base-table>`,
    },
  },
  tabs: {
    panelStr: `const panelList = [{label: 'tabs', value: 'tabs'}];`,
    render: {
      tabs: `
        <t-tabs v-bind="configProps" :default-value="1">
          <t-tab-panel :value="1" label="选项卡1">
            <p style="margin: 20px">选项卡1内容区</p>
          </t-tab-panel>
          <t-tab-panel :value="2" label="选项卡2">
            <p style="margin: 20px">选项卡2内容区</p>
          </t-tab-panel>
          <t-tab-panel :value="3" label="选项卡3">
            <p style="margin: 20px">选项卡3内容区</p>
          </t-tab-panel>
        </t-tabs>
      `,
    },
  },
  cascader: {
    panelStr: `const panelList = [{label: 'cascader', value: 'cascader'}];`,
    render: {
      cascader: `
        <t-cascader :options="[
          {
            label: '选项一',
            value: '1',
            children: [
              { label: '子选项一', value: '1.1' },
              { label: '子选项二', value: '1.2' },
            ],
          },
          {
            label: '选项二',
            value: '2',
            children: [
              { label: '子选项三', value: '2.1' },
              { label: '子选项四', value: '2.2' },
            ],
          },
        ]" v-bind="configProps" />
      `,
    },
  },
  checkbox: {
    panelStr: `const panelList = [{label: 'checkbox', value: 'checkbox'}];`,
    render: {
      checkbox: `<t-checkbox v-bind="configProps">基础多选框</t-checkbox>`,
    },
  },
  form: {
    panelStr: `const panelList = [{label: 'form', value: 'form'}];`,
    render: {
      form: `
        <t-form v-bind="configProps">
          <t-form-item label="姓名" name="name" initial-data="TDesign">
            <t-input placeholder="请输入内容" />
          </t-form-item>
          <t-form-item label="手机号码" name="tel" initial-data="123456">
            <t-input placeholder="请输入内容" />
          </t-form-item>
          <t-form-item label="课程" name="course" initial-data="['1']">
            <t-checkbox-group>
              <t-checkbox value="1">语文</t-checkbox>
              <t-checkbox value="2">数学</t-checkbox>
              <t-checkbox value="3">英语</t-checkbox>
              <t-checkbox value="4">体育</t-checkbox>
            </t-checkbox-group>
          </t-form-item>
        </t-form>
      `,
    },
  },
  input: {
    panelStr: `const panelList = [{label: 'input', value: 'input'}];`,
    render: {
      input: `<t-input v-bind="configProps" />`,
    },
  },
  'input-number': {
    panelStr: `const panelList = [{label: 'inputNumber', value: 'inputNumber'}];`,
    render: {
      inputNumber: `<t-input-number v-bind="configProps"/>`,
    },
  },
  radio: {
    panelStr: `const panelList = [{label: 'radio', value: 'radio'}];`,
    render: {
      radio: `<t-radio v-bind="configProps">单选框</t-radio>`,
    },
  },
  select: {
    panelStr: `const panelList = [{label: 'select', value: 'select'}];`,
    render: {
      select: `
        <t-select v-bind="configProps">
          <t-option key="apple" label="Apple" value="apple" />
          <t-option key="orange" label="Orange" value="orange">OrangeContentSlot</t-option>
          <t-option key="banana" label="Banana" value="banana" />
        </t-select>
      `,
    },
  },
  'select-input': {
    panelStr: `const panelList = [{label: 'selectInput', value: 'selectInput'}];`,
    render: {
      selectInput: `<t-select-input panel="暂无数据" value="" placeholder="请输入" tips="这是 tips 文本信息" v-bind="configProps" />`,
    },
  },
  slider: {
    panelStr: `const panelList = [{label: 'slider', value: 'slider'}];`,
    render: {
      slider: `<t-slider v-bind="configProps" />`,
    },
  },
  switch: {
    panelStr: `const panelList = [{label: 'switch', value: 'switch'}];`,
    render: {
      switch: `<t-switch v-bind="configProps" />`,
    },
  },
  'tag-input': {
    panelStr: `const panelList = [{label: 'tagInput', value: 'tagInput'}];`,
    render: {
      tagInput: `<t-tagInput v-bind="configProps" />`,
    },
  },
  textarea: {
    panelStr: `const panelList = [{label: 'textarea', value: 'textarea'}];`,
    render: {
      textarea: `<t-textarea placeholder="请输入内容" v-bind="configProps" />`,
    },
  },
  'tree-select': {
    panelStr: `const panelList = [{label: 'treeSelect', value: 'treeSelect'}];`,
    render: {
      treeSelect: `
        <t-tree-select v-bind="configProps"
          :data="[{
              label: '广东省',
              value: 'guangdong',
              children: [{
                label: '广州市',
                value: 'guangzhou',
              }, {
                label: '深圳市',
                value: 'shenzhen',
              }],
            }, {
              label: '江苏省',
              value: 'jiangsu',
              children: [{
                label: '南京市',
                value: 'nanjing',
              }, {
                label: '苏州市',
                value: 'suzhou',
              }],
            }]"
        placeholder="请选择"
        />
      `,
    },
  },
  transfer: {
    panelStr: `const panelList = [{label: 'transfer', value: 'transfer'}];`,
    render: {
      transfer: `
        <t-transfer :data="[{
          value: 1,
          label: '内容1',
          disabled: false
        },{
          value: 2,
          label: '内容2',
          disabled: true
        },{
          value: 3,
          label: '内容3',
          disabled: false
        },]" v-bind="configProps" />
      `,
    },
  },
  'time-picker': {
    panelStr: `const panelList = [{label: 'timePicker', value: 'timePicker'}];`,
    render: {
      timePicker: `<t-timePicker v-bind="configProps" />`,
    },
  },
  timeline: {
    panelStr: `const panelList = [{label: 'timeline', value: 'timeline'}];`,
    render: {
      timeline: `<t-timeline v-bind="configProps">
              <t-timeline-item label="2022-01-01">事件一</t-timeline-item>
              <t-timeline-item label="2022-02-01">事件二</t-timeline-item>
              <t-timeline-item label="2022-03-01">事件三</t-timeline-item>
      </t-timeline>`,
    },
  },
  upload: {
    panelStr: `const panelList = [{label: 'upload', value: 'upload'}];`,
    render: {
      upload: `<t-upload action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" v-bind="configProps" />`,
    },
  },
  avatar: {
    panelStr: `const panelList = [{label: 'avatar', value: 'avatar'}];`,
    render: {
      avatar: `<t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" v-bind="configProps" />`,
    },
  },
  badge: {
    panelStr: `const panelList = [{label: 'badge', value: 'badge'}];`,
    render: {
      badge: `
        <t-badge count="100" v-bind="configProps">
          <t-button>按钮</t-button>
        </t-badge>
      `,
    },
  },
  list: {
    panelStr: `const panelList = [{label: 'list', value: 'list'}];`,
    render: {
      list: `
        <t-list v-bind="configProps">
          <t-list-item>
            <t-list-item-meta title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
          <t-list-item>
            <t-list-item-meta title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
          <t-list-item>
            <t-list-item-meta title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
        </t-list>
      `,
    },
  },
  loading: {
    panelStr: `const panelList = [{label: 'loading', value: 'loading'}];`,
    render: {
      loading: `<t-loading v-bind="configProps" />`,
    },
  },
  progress: {
    panelStr: `const panelList = [{label: 'progress', value: 'progress'}];`,
    render: {
      progress: `
        <div style="width:200px">
          <t-progress :percentage="50"  v-bind="configProps" />
        </div>
      `,
    },
  },
  swiper: {
    panelStr: `const panelList = [{label: 'swiper', value: 'swiper'}];`,
    render: {
      swiper: `
        <div :style="{ width: '500px' }">
          <t-swiper :duration="300" :interval="2000" v-bind="configProps" :navigation="{ type: configProps.navigationType }">
            <t-swiper-item>
              <div :style="{ height: '200px', background: 'var(--td-success-color-7)' }" />
            </t-swiper-item>
            <t-swiper-item>
              <div :style="{ height: '200px', background: 'var(--td-warning-color-7)' }" />
            </t-swiper-item>
            <t-swiper-item>
              <div :style="{ height: '200px', background: 'var(--td-error-color-7)' }" />
            </t-swiper-item>
          </t-swiper>
        </div>
      `,
    },
  },
  skeleton: {
    panelStr: `const panelList = [{label: 'skeleton', value: 'skeleton'}];`,
    render: {
      skeleton: `
        <t-skeleton v-bind="configProps">
          <div class="t-skeleton-demo-paragraph">
            <p>
              骨架屏组件，是指当网络较慢时，在页面真实数据加载之前，给用户展示出页面的大致结构。
              一方面让用户对页面有一定的心理预期，另一方面可以改善长期停留在空白屏给用户带来的枯燥和不适感。它可以为用户提供更好视觉效果和使用体验。
            </p>
          </div>
        </t-skeleton>
      `,
    },
  },
  tag: {
    panelStr: `const panelList = [{label: 'tag', value: 'tag'}];`,
    render: {
      tag: `<t-tag v-bind="configProps">标签</t-tag>`,
    },
  },
  tooltip: {
    panelStr: `const panelList = [{label: 'tooltip', value: 'tooltip'}];`,
    render: {
      tooltip: `
        <t-tooltip content="这是Tooltip内容" v-bind="configProps">
          <t-button>hover me</t-button>
        </t-tooltip>
      `,
    },
  },
  tree: {
    panelStr: `const panelList = [{label: 'tree', value: 'tree'}];`,
    script: `
      const data = ref([
        {
          label: '第一段',
          children: [
            {
              label: '第一段',
            },
            {
              label: '第二段',
            },
          ],
        },
        {
          label: '第二段',
          children: [
            {
              label: '第一段',
            },
            {
              label: '第二段',
            },
          ],
        },
        {
          label: '第三段',
          children: [
            {
              label: '第一段',
            },
            {
              label: '第二段',
            },
          ],
        },
        {
          label: '第四段',
          children: [
            {
              label: '第一段',
            },
            {
              label: '第二段',
            },
          ],
        },
      ]);
    `,
    render: {
      tree: `
        <t-tree :data="data" v-bind="configProps" />
      `,
    },
  },
  watermark: {
    panelStr: `const panelList = [{label: 'watermark', value: 'watermark'}];`,
    render: {
      watermark: `
        <t-watermark v-bind="configProps" :watermark-content="{ text: '文字水印' }" :y="120" :x="80" :width="120"
        :height="60">
          <div style="width: 100%; height: 300px" />
        </t-watermark>
      `,
    },
  },
  rate: {
    panelStr: `const panelList = [{label: 'rate', value: 'rate'}];`,
    render: {
      rate: `
        <t-rate
          v-bind="configProps"
        ></t-rate>
      `,
    },
  },
  dialog: {
    panelStr: `const panelList = [{label: 'dialog', value: 'dialog'}];`,
    script: `
      const visible = ref(false);
      const handleClick = () => {
        visible.value = !visible.value;
      };
    `,
    render: {
      dialog: `
        <div>
          <t-button @click="visible = true">Open Modal</t-button>
          <t-dialog v-bind="configProps" v-model:visible="visible">
            <p>This is a dialog</p>
          </t-dialog>
        </div>
      `,
    },
  },
  drawer: {
    panelStr: `const panelList = [{label: 'drawer', value: 'drawer'}];`,
    script: `
      const visible = ref(false);
      const handleClick = () => {
        visible.value = true;
      };
    `,
    render: {
      drawer: `
        <div>
          <t-button @click="handleClick">Open Drawer</t-button>
          <t-drawer v-bind="configProps" v-model:visible="visible" header="header">
            <p>This is a Drawer</p>
          </t-drawer>
        </div>
      `,
    },
  },
  message: {
    panelStr: `const panelList = [{label: 'message', value: 'message'}];`,
    render: {
      message: `<t-message v-bind="configProps" content="这里是 Message 信息" />`,
    },
  },
  notification: {
    panelStr: `const panelList = [{label: 'notification', value: 'notification'}];`,
    render: {
      notification: `<t-notification v-bind="configProps" title="标题名称" content="这是一条消息通知" />`,
    },
  },
  popconfirm: {
    panelStr: `const panelList = [{label: 'popconfirm', value: 'popconfirm'}];`,
    render: {
      popconfirm: `
        <t-popconfirm v-bind="configProps" content="确认删除吗">
          <t-button>删除</t-button>
        </t-popconfirm>
      `,
    },
  },
  popup: {
    panelStr: `const panelList = [{label: 'popup', value: 'popup'}];`,
    render: {
      popup: `
        <t-popup content="这是一个弹出框" v-bind="configProps">
          <t-button variant="outline">触发元素</t-button>
        </t-popup>
      `,
    },
  },
  card: {
    panelStr: `const panelList = [{label: 'card', value: 'card'}];`,
    render: {
      card: `
        <t-card v-bind="configProps">
          仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
        </t-card>
      `,
    },
  },
  space: {
    panelStr: `const panelList = [{label: 'space', value: 'space'}];`,
    render: {
      space: `
        <t-space v-bind="configProps">
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
          <t-button>Button</t-button>
        </t-space>
      `,
    },
  },
  'back-top': {
    panelStr: `const panelList = [{label: 'backTop', value: 'backTop'}];`,
    render: {
      backTop: `
        <div style="position: relative; height: 100%; width: 100%">
          <t-list class="container" style="position: relative; height: 100%; overflow-y: scroll">
            <t-list-item v-for="index in 15" :key="index">列表内容{{ index }}</t-list-item>
          </t-list>
          <t-back-top
            container=".container"
            v-bind="configProps"
            :visible-height="0"
            :offset="[20, 0]"
            style="position: absolute; right: 20px; bottom: 0"
          ></t-back-top>
        </div>
    `,
    },
  },
  'sticky-tool': {
    panelStr: `const panelList = [{label: 'stickyTool', value: 'stickyTool'}];`,
    script: `
      import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-omi';
      const renderQrIcon = () => {
        return <QrcodeIcon />;
      };
      const renderPopup = () => {
        return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
      };
    `,
    render: {
      stickyTool: `
        <t-space>
          <t-sticky-tool
            :style="{ position: 'relative', overflow: 'hidden' }"
            :offset="[-300, -80]"
            v-bind="configProps"
          >
            <t-sticky-item label="chat">
              <template #icon><chat-icon /></template>
            </t-sticky-item>
            <t-sticky-item label="add">
              <template #icon><add-icon /></template>
            </t-sticky-item>
            <t-sticky-item
              label="aqcode"
              :icon="renderQrIcon"
              :popup="renderPopup"
              :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
            >
            </t-sticky-item>
          </t-sticky-tool>
        </t-space>
      `,
    },
  },
  image: {
    panelStr: `const panelList = [{label: 'image', value: 'image'}];`,
    render: {
      image: `
        <t-image
          v-bind="configProps"
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          :style="{ width: '120px', height: '120px' }"
        />
      `,
    },
  },
};
