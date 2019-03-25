# Omi Cloud 源码

### 小程序码

![](../../assets/omi-cloud.jpg)

### 郑重说明

由于evt.currentTarget写成了evt.target，导致你点击主页列表Item的文字的时候进入详情页会无限 loading，因为 evt.target.dataset.id 为 undefined，请不要点击到文字进入详情，请点击Item的空白区域进入详情！这个 bug 会在下一版本中修复~。广大程序员也要引以为戒，不要犯这么低级的错误，忘记current，用户两行泪！修复提交的详情：https://github.com/Tencent/omi/commit/44bf1c70c1ab02aa061ebd0bd14893c483e6946c
