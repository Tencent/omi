import '../../src/row/index.tsx'
import '../../src/button/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <m-row cols={[8, 8, 8]}>
      <m-button >col-8-0</m-button>
      <m-button >col-8-1</m-button>
      <m-button>col-8-2</m-button>
    </m-row>

    <m-row cols={[8, 8, 8]}>
      <m-button slot="2">col-8-0</m-button>
      <m-button slot="1">col-8-1</m-button>
      <m-button slot="0">col-8-2</m-button>
    </m-row>




  </div>
  , 'body')

  //https://getbootstrap.com/docs/3.4/css/
  //https://ant.design/components/grid-cn/
  //xs sm md lg xl  xxl
  // xs={2} sm={4} md={6} lg={8} xl={10}
  //xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}



  // <m-row gutter={16} cols={[8, {
  //   span: 8,
  //   offset: 8
  // }]}>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  // </m-row>

  // <m-row cols={[{
  //   span: 18,
  //   push: 6
  // }, {
  //   span: 6,
  //   pull: 18
  // }]}>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  // </m-row>


  // <m-row type="flex" justify="start" cols={[4,4,4,4]}>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  // </m-row>


  // <m-row type="flex" justify="center" align="top" cols={[4,4,4,4]}>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  //   <m-button>col-8</m-button>
  // </m-row>


