import '../../src/row/index.tsx'
import '../../src/button/index.tsx'
import { render, h } from 'omi'

const css = `::slotted(div){
  background: #c2d5f5;
  width: 100%;
  display: block;
  text-align: center;
  color: #0052d9;
  height:40px;
  line-height:40px;
}
::slotted(div:nth-child(2n + 1)) {
  width: 100%;
  display: block;
  text-align: center;
background: #d9dde4;
}`
render(
  <div>
    <m-row css={css} cols={[8, 8, 8]}>
      <div>col-8-0</div>
      <div>col-8-1</div>
      <div>col-8-2</div>
    </m-row>

    <m-row css={css} cols={[8, 8, 8]}>
      <div slot="2">col-8-0</div>
      <div slot="1">col-8-1</div>
      <div slot="0">col-8-2</div>
    </m-row>

    <m-row css={css} cols={[8, {
      span: 8,
      offset: 8
    }]}>
      <div>col-8</div>
      <div>col-8-offset-8</div>
    </m-row>

    <m-row gutter={16} cols={[6, 6, 6, 6]} css={css}>
      <div>col-6</div>
      <div>col-6</div>
      <div>col-6</div>
      <div>col-6</div>
    </m-row>


    <m-row css={css} cols={[{
      span: 18,
      push: 6
    }, {
      span: 6,
      pull: 18
    }]}>
      <div>col-18-push-6</div>
      <div>col-6-pull-18</div>
    </m-row>

    <m-row type="flex" justify="start" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
    </m-row>

    <m-row type="flex" justify="center" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
    </m-row>

    <m-row type="flex" justify="end" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
    </m-row>

    <m-row type="flex" justify="space-between" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
    </m-row>


    <m-row type="flex" justify="space-around" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
    </m-row>


    <m-row type="flex" justify="space-around" align="top" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div style='height:70px;'>col-4-h-70</div>
      <div>col-4</div>
      <div style='height:100px;'>col-4-h-100</div>
    </m-row>



    <m-row type="flex" justify="space-around" align="middle" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div style='height:70px;'>col-4-h-70</div>
      <div>col-4</div>
      <div style='height:100px;'>col-4-h-100</div>
    </m-row>


    <m-row type="flex" justify="space-around" align="bottom" cols={[4, 4, 4, 4]} css={css}>
      <div>col-4</div>
      <div style='height:70px;'>col-4-h-70</div>
      <div>col-4</div>
      <div style='height:100px;'>col-4-h-100</div>
    </m-row>

    <m-row type="flex" justify="space-around" align="bottom" cols={[{
      xs: 8,
      sm: 4,
      md: 6,
      lg: 8,
      xl: 10
    }, {
      xs: 20,
      sm: 16,
      md: 12,
      lg: 8,
      xl: 4
    }, {
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      xl: 10
    }]} css={css}>
      <div>col-a</div>
      <div >col-b</div>
      <div>col-c</div>
    </m-row>


    <m-row type="flex" justify="space-around" align="bottom" cols={[{
      xs: { span: 5, offset: 1 },
      lg: { span: 6, offset: 2 }
    }, {
      xs: { span: 11, offset: 1 },
      lg: { span: 6, offset: 2 }
    }, {
      xs: { span: 5, offset: 1 },
      lg: { span: 6, offset: 2 }
    }]} css={css}>
      <div>col-a</div>
      <div >col-b</div>
      <div>col-c</div>
    </m-row>

  </div>
  , 'body')

  //https://getbootstrap.com/docs/3.4/css/
  //https://ant.design/components/grid-cn/
  //xs sm md lg xl  xxl
  // xs={2} sm={4} md={6} lg={8} xl={10}
  //xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}






