import '../../src/top-app-bar/index.tsx'
import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {
  static css = `
    .mdc-typography--subtitle1 {
      font-size: 1rem;
      line-height: 1.75rem;
      font-weight: 400;
      letter-spacing: .009375em;
    }
    .demos-content-one {
      height: 130px;
      // background: #EEE;
    }
    .demos-content-two {
      height: 80px;
      // background: #EEE;
    }
    .demos-display {
      display: flex;
      flex-wrap: wrap;
      min-height: 200px;
    }
    .demo {
      display: inline-block;
      flex: 1 1 45%;
      justify-content: space-around;
      min-height: 200px;
      // min-width: 400px;
      padding: 15px;
    }
    .iframe {
      width: 100%;
      height: 200px;
    }
  `

  showDemoStart = false

  onDemoStart = e => {
    this.showDemoStart = !this.showDemoStart
    this.update()
  }
  
  titleOmi = ' (Omi)'
  
  onMenu = e => {
    this.titleOmi = this.titleOmi == '' ? ' (Omi)' : ''
    this.update()
  }

  render() {
    return(
      <div>
        {!this.showDemoStart &&
        <div id='demo-show-button'>
          <m-top-app-bar
            title='Click to show menus'
            onNavigation={this.onDemoStart}
            navigation-icon={{
              view: 24,
              path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
            }}
            onAction0={this.onDemoStart}
            action-items={[
              {
                view: 24,
                path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
              }
            ]}
          />
          <br/><br/>
        </div>}
        {/* style='display:none;' */}
        {this.showDemoStart &&
        <div id='demo-start'>
          <m-top-app-bar
            title={'Standard' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              text: 'menu',
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z',
              // onClick: this.onMenu
            }}
            onAction0={this.onMenu}
            onAction1={this.onMenu}
            onAction2={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M34.02 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-12.99-13-12.99S9.03 12 9.02 19H4l7.68 8L20 19h-6.98c.01-5 4.03-8.99 9-8.99s9 4.03 9 9-4.03 9-9 9c-1.29 0-2.52-.28-3.63-.77l-2.96 2.96c1.93 1.14 4.18 1.81 6.59 1.81 3.23 0 6.17-1.18 8.44-3.13l.54.54V31l10.01 9.98L43.99 38l-9.97-10z',
                // onClick: this.onMenu
              }, {
                text: 'Omi',
                // onClick: this.onMenu
              }, {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z',
                // onClick: this.onMenu
              }
            ]}
          />
          <div style='height:80px;'></div>
          <m-top-app-bar
            fixed
            title={'Fixed' + this.titleOmi}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z',
              onClick: this.onMenu
            }}
            action-items={[
              {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                onClick: this.onMenu
              }, {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                onClick: this.onMenu
              }, {
                view: 48,
                path: 'M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z',
                onClick: this.onMenu
              }
            ]}
          />
          <div style='height:80px;'></div>
          <m-top-app-bar
            dense
            fixed
            title={'Dense + Fixed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
              }
            ]}
          />
          <div style='height:65px;'></div>
          <m-top-app-bar
            prominent
            fixed
            title={'Prominent + Fixed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
              }
            ]}
          />
          <div style='height:145px;'></div>
          <m-top-app-bar
            prominent
            dense
            fixed
            title={'Prominent + Dense + Fixed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
              }
            ]}
          />
          <div style='height:114px;'></div>
          <m-top-app-bar
            fixed
            title='Click to hide menus'
            onNavigation={this.onDemoStart}
            navigation-icon={{
              view: 24,
              path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
            }}
            onAction0={this.onDemoStart}
            onAction1={this.onDemoStart}
            onAction2={this.onDemoStart}
            onAction3={this.onDemoStart}
            onAction4={this.onDemoStart}
            onAction5={this.onDemoStart}
            onAction6={this.onDemoStart}
            onAction7={this.onDemoStart}
            action-items={[
              {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }, {
                view: 24,
                path: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
              }
            ]}
          />
          <div style='height:80px;'></div>
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
                // margin: 100px;
              }
            `}
            shortCollapsed
            title={'Short - Always Collapsed' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
              }
            ]}
          />
          <div style='height:20px;'></div>
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
              }
            `}
            short
            title={'Short' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
              }
            ]}
          />
          <div style='height:20px;'></div>
          <m-top-app-bar
            css={`
              .mdc-top-app-bar { 
                position: static;
              }
            `}
            short
            dense
            title={'Short + Dense' + this.titleOmi}
            onNavigation={this.onMenu}
            navigation-icon={{
              view: 48,
              path: 'M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'
            }}
            onAction0={this.onMenu}
            action-items={[
              {
                view: 48,
                path: 'M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z'
              }
            ]}
          />
        </div>}
        <div id='demo-build' class='demos-display'>
          <div class='demo'>
            <div>
              <a href='./index-standard.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Standard</h3>
              </a>
            </div>
            <div>
              <div>
                <iframe class='iframe' src='./index-standard.script.html'></iframe>
              </div>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-fixed.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Fixed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-fixed.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-dense.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Dense</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-dense.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-dense-fixed.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Dense + Fixed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-dense-fixed.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-prominent.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Prominent</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-prominent.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-prominent-dense.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Prominent + Dense</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-prominent-dense.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-short.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Short</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-short.script.html'></iframe>
            </div>
          </div>
          <div class='demo'>
            <div>
              <a href='./index-short-collapsed.script.html' target='_blank'>
                <h3 class='mdc-typography--subtitle1'>Short - Always Collapsed</h3>
              </a>
            </div>
            <div>
              <iframe class='iframe' src='./index-short-collapsed.script.html'></iframe>
            </div>
          </div>
          <div style='width:100%;height:500px;background:#EEE;'></div>
        </div>
      </div>
    )
  }
})
  
render(<my-app />, 'body')