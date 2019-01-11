# Omi Snap - Prerender를 위한 Snap 템플릿

Omi 와 같은 프레임워크를 사용하면 자바스크립트 파일이 로드되기 전 화면에는 아무것도 나타나지 않게 됩니다. 그래서 사용자는 잠시동안 아무것도 없는 하얀 화면을 보게 되고 나쁜 User Experience를 경험하게 됩니다. Omi Snap은 이런 부분을 해소하기위해 렌더할 HTML과 CSS를 빌드 단계에서 미리 HTML 파일에 삽입을 해줍니다. 해당 템플릿은 빌드시 흰 화면 대신 볼수 있는 UI를 삽입하기 때문에 보다 낫은 User Experience를 제공할수 있게 됩니다.

---

## Usage

```bash
$ npm i -g omi-cli # omi-cli 설치
& omi init-snap myapp # omi-cli로 omi-snap 템플릿 생성
& cd myapp
& npm run build # 프로젝트 빌드 - 자동으로 snap기능 추가 되서 빌드됨
```

##  Snap(Prerender) 이란?
omi-cli로 템플릿을 생성하면 아래의 소스코드처럼 blank HTML을 생성합니다. 모든 화면은 자바스크립트 파일로 렌더되기 때문입니다.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="./manifest.json">
    <link rel="shortcut icon" href="./favicon.ico">
    <title>Omi</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="./static/js/index.bb813127.js"></script>
  </body>
</html>
```

그래서 페이지를 처음 열게 되면 자바스크립트 파일이 다운로드되기 전에 아래의 빈 화면을 잠시 보게 됩니다.

![blank](../assets/omi-snap/blank.png)

그러나 omi-snap은 snap기능을 사용하여 HTML에 기본 마크업(HTML/CSS) 를 추가하여 자바스크립트 파일다운로드 되는 동안 컨텐츠를 볼수 있게 해줍니다.

![initial](../assets/omi-snap/initial.png)

아래의 이미지를 보면 위의 기존 템플릿과 다르게 아래의 snap기능을 사용하여 빌드한 마크업 에는 기본 CSS/HTML이 추가 되어있는 것을 확인할 수 있습니다.

![html](../assets/omi-snap/comapre-snap-before-after.png)

## omi 템플릿과 omi-snap 템플릿 비교

omi 템플릿

![omi-template](../assets/omi-snap/omi.gif)

omi-snap 템플릿

![omi-snap-template](../assets/omi-snap/omi-snap.gif)

## 사용합시다

[→ omi-snap Github](https://github.com/Tencent/omi/tree/master/packages/omi-snap)

[→ omi-snap template Github](https://github.com/omijs/template-snap)