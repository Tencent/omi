import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/chart-card'
import '@omiu/icon/people'
import '@omiu/table'
import '@omiu/pagination'
import '@omiu/icon-card'
import './simple-card'
import '@omiu/icon/trending-up'
import '@omiu/icon/trending-down'
import '@omiu/icon/payment'
import '@omiu/icon/perm-phone-msg'

interface Props { }

const tagName = 'admin-dashboard'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}


const chartColors = [
  'rgba(7, 193, 96,.8)',
  'rgba(245, 108, 108,.8)',
]

const chartBgColors = [
  'rgba(7, 193, 96,0)',
  'rgba(245, 108, 108,0)',
]


@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]


  // onClick = () => {
  //   this.chartData.datasets.forEach((dataset, index) => {
  //     dataset.data.forEach((item, subIndex) => {
  //       dataset.data[subIndex] = Math.random() * 100 - index * Math.random() * 200
  //     })
  //   })
  //   this.update()
  // }


  dataSource = [
    {
      id: 1,
      name: 'xwang',
      age: 18,
      address: 'Tencent'
    },
    {
      id: 2,
      name: 'dntzhang',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(247 176 176 / 32%)'
      }
    },
    {
      id: 3,
      name: 'lucy',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 4,
      name: 'john',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(230 162 60 / 34%)'
      }
    },
    {
      id: 5,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 6,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 7,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 8,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 9,
      name: 'xwang',
      age: 18,
      address: 'Tencent'
    },
    {
      id: 10,
      name: 'dntzhang',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(247 176 176 / 32%)'
      }
    },
    {
      id: 11,
      name: 'lucy',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 12,
      name: 'john',
      age: 12,
      address: 'Tencent',
      $config: {
        bgColor: 'rgb(230 162 60 / 34%)'
      }
    },
    {
      id: 13,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 14,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 15,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    },
    {
      id: 16,
      name: 'tim',
      age: 12,
      address: 'Tencent'
    }
  ]

  columns = [
    {
      title: 'ID',
      render: (item: { id: number }) => <strong>{item.id}</strong>
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: '操作',
      align: 'right',
      render: (item: { name: string; id: number }) => (
        <o-tooltip content={'删除' + item.name}>
          <o-icon-delete
            data-item-id={item.id}
            onClick={this.onClick}
            style="cursor:pointer;font-size:20px;"
          ></o-icon-delete>
        </o-tooltip>
      )
    }
  ]

  paging = true
  pageSize = 5
  pageIndex = 0

  filterData = []




  renderTable() {
    this.filterData = this.dataSource.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize)

    this.update()
  }

  installed() {
    this.renderTable()
  }

  change = (evt) => {
    this.pageIndex = evt.detail
    this.renderTable()
  }

  table

  onClick = (evt: { currentTarget: { dataset: { itemId: number } } }) => {
    this.table.deleteRowById(evt.currentTarget.dataset.itemId)
  }

  deleteItemById(id: number) {
    const index = this.dataSource.indexOf(
      this.dataSource.find((item) => item.id === id)
    )
    if (index !== -1) {
      this.dataSource.splice(index, 1)
    }
    this.update()
  }



  chartData = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [{
      label: '# 2021半年收入流水',
      data: [12, 19, 3, 5, 5, 3],
      //yAxisID: 'y-axis-1',
      backgroundColor: chartBgColors[0],
      borderColor: chartColors[0],
      borderWidth: 2,
      fill: true
    }, {
      label: '# 2022半年收入流水',
      data: [7, 17, 13, 5, 12, 13],
      //yAxisID: 'y-axis-2',
      backgroundColor: chartBgColors[1],
      borderColor: chartColors[1],
      borderWidth: 2,
      fill: true
    }
    ]
  }

  chartOptions = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4
      }
    },
    layout: {
      padding: 15
    },

    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: () => {
          //const { intersect, mode } = ctx.chart.options.interaction;
          return '收入统计(单位: 万)'
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.parsed.y + '万'
          }
        }
      }
    }
    // title: {
    //   display: true,
    //   text: 'Omi-chart Bar Chart - Multi Axis'
    // },
    // tooltips: {
    //   mode: 'index',
    //   intersect: true
    // },
    // scales: {
    //   yAxes: [{
    //     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
    //     display: true,
    //     position: 'left',
    //     id: 'y-axis-1',
    //   }, {
    //     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
    //     display: true,
    //     position: 'right',
    //     id: 'y-axis-2',
    //     gridLines: {
    //       drawOnChartArea: false
    //     }
    //   }],
    // }
  }



  doughnutChartData = {
    labels: ["WeChart", "Facebook", "Weibo", "Twitter"],
    datasets: [{
      label: '# 用户来源统计',
      data: [12222, 3119, 3223, 5223],
      //yAxisID: 'y-axis-1',
      backgroundColor: [
        'rgba(7, 193, 96,.7)',
        'rgba(59, 89, 152,.7)',
        'rgba(245, 108, 108,.7)',
        'rgba(51, 153, 255,.7)'
      ],
      borderColor: 'white',
      borderWidth: 1,
      fill: true
    }]
  }

  doughnutChartOptions = {
    cutout: 90,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4
      }
    },
    layout: {
      padding: 15
    },

    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: (ctx) => {
          //const { intersect, mode } = ctx.chart.options.interaction;
          return '收入统计(单位: 万)'
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.parsed + '万'
          }
        }
      }
    }
  }


  render() {
    return (
      <div style={{ background: '#ebedef' }} class={tw`pb-44`}>
        <div class={tw`flex flex-col sm:flex-row md:flex-row flex-wrap gap-y-4 gap-x-4 mx-4 py-4`} >

          <simple-card class={tw`flex-1`} number={4000} unit="万" describe="今日新增人数">
            <o-icon-people slot="right-top" class={tw`w-6`} fill="white"></o-icon-people>

            <div slot="right-bottom" class={tw`text-sm text-gray-700 h-10 leading-10 whitespace-nowrap`}>
              同比<span class={tw`text-green-700`} > <o-icon-trending-up></o-icon-trending-up> 15.5%</span>
            </div>
          </simple-card >

          <simple-card class={tw`flex-1`} number={83293} unit="次" describe="故障反馈总数">
            <o-icon-perm-phone-msg slot="right-top" class={tw`w-6`} fill="white"></o-icon-perm-phone-msg>

            <div slot="right-bottom" class={tw`text-sm text-gray-700 h-10 leading-10 whitespace-nowrap`}>
              同比<span class={tw`text-red-700`} > <o-icon-trending-up></o-icon-trending-up> 15.5%</span>
            </div>
          </simple-card >

          <simple-card class={tw`flex-1`} number={98990} unit="元" describe="在线支付总额">
            <o-icon-payment slot="right-top" class={tw`w-6`} fill="white"></o-icon-payment>

            <div slot="right-bottom" class={tw`text-sm text-gray-700 h-10 leading-10 whitespace-nowrap`}>
              同比<span class={tw`text-green-700`} > <o-icon-trending-up></o-icon-trending-up> 15.5%</span>
            </div>
          </simple-card >


          <simple-card class={tw`flex-1`} number={23802} unit="万" describe="最高同时在线人数">
            <o-icon-people slot="right-top" class={tw`w-6`} fill="white"></o-icon-people>

            <div slot="right-bottom" class={tw`text-sm text-gray-700 h-10 leading-10 whitespace-nowrap`}>
              同比<span class={tw`text-red-700`} > <o-icon-trending-down></o-icon-trending-down> 15.5%</span>
            </div>
          </simple-card >
        </div>


        <div class={tw`mx-4 flex flex-col gap-x-4 gap-y-4 lg:flex-row`}>
          <div class={tw`flex-grow lg:w-96  bg-white  shadow rounded`}>
            <o-line height="350" data={this.chartData} options={this.chartOptions} />
          </div>
          <div class={tw`flex-shrink lg:w-96 bg-white  shadow rounded`}>
            <o-doughnut height="350" data={this.doughnutChartData} options={this.doughnutChartOptions} />
          </div>
        </div>

        <div class={tw`flex flex-col sm:flex-row md:flex-row flex-wrap gap-y-4 gap-x-4 mx-4 py-4`} >
          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="PV" color="#07c160" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" fill="white"></o-icon-people>
          </o-chart-card>

          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="Error" color="#f56c6c" data={[12, 9, 4, 5, 2, 113]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-error width="2em" height="2em" fill="white"></o-icon-error>
          </o-chart-card>

          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="Warning" color="#e6a23c" data={[12, 19, 131, 5, 2, 9]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-warning width="2em" height="2em" fill="white"></o-icon-warning>
          </o-chart-card>

          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="Members online" color="#39f" chartType="bar" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" fill="white"></o-icon-people>
          </o-chart-card>
        </div>

        <div class={tw`px-5 py-4 flex flex-col gap-x-4 gap-y-2  md:flex-row`}>
          <o-icon-card
            class={tw`flex-1`}
            color='#07c160'
            info='2098'
            caption='好看'
            path='M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z'
          >
          </o-icon-card>

          <o-icon-card
            class={tw`flex-1`}
            color='#f56c6c'
            info='100+'
            caption='关注'
            path='M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z'
          >
          </o-icon-card>


          <o-icon-card
            class={tw`flex-1`}
            color='#3b5998'
            info='98'
            caption='转发'
            viewBox="0 0 32 32"
            path='M23.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.93c0 0-2.292-0.391-4.484-0.391-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.26v-14z'
          >
          </o-icon-card>

          <o-icon-card
            class={tw`flex-1`}
            color='#4875b4'
            info='1198'
            caption='FEEDS'
            viewBox="0 0 32 32"
            path='M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z'
          >
          </o-icon-card>

          <o-icon-card
            class={tw`flex-1`}
            color='#39f'
            info='98'
            caption='转发'
            path='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z'
          >
          </o-icon-card>
        </div>

        <div class={tw`pb-1 border-2 bg-white mx-4 shadow-sm overflow-hidden rounded`}>
          {/* <h4 class={tw`py-2 text-sm`}>基础表格</h4> */}
          <o-table
            ref={e => this.table = e}
            checkbox={false}
            stripe={false}
            border={false}
            compact={false}
            columns={this.columns}
            dataSource={this.filterData}
          ></o-table>

          <div class={tw`mt-1 text-right`}>

            <o-pagination
              total={this.dataSource.length}
              current-page={this.pageIndex}
              page-size={this.pageSize}
              onchange={this.change}
            ></o-pagination>
          </div>
        </div>
      </div>
    )
  }



}
