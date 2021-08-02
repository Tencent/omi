import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/chart-card'
import '@omiu/icon/people'
import '@omiu/table'
import '@omiu/pagination'

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
  'rgb(55, 199, 132)',
  'rgb(155, 59, 64)',
]

const chartBgColors = [
  'rgba(55, 199, 132,.1)',
  'rgba(155, 59, 64,.1)',
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
        //onclick 会绑定多次,需要使用_onclick
        <o-tooltip content={'删除' + item.name}>
          <o-icon-delete
            data-item-id={item.id}
            _onclick={this.onClick}
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
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 5, 3],
      //yAxisID: 'y-axis-1',
      backgroundColor: chartBgColors[0],
      borderColor: chartColors[0],
      borderWidth: 1,
      fill: true
    }, {
      label: '# of Votes',
      data: [7, 17, 13, 5, 12, 13],
      //yAxisID: 'y-axis-2',
      backgroundColor: chartBgColors[1],
      borderColor: chartColors[1],
      borderWidth: 1,
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
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: (ctx) => {
          //const { intersect, mode } = ctx.chart.options.interaction;
          return 'Annual income statistics'.toUpperCase()
        }
      },
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


  render() {
    return (
      <div style={{ background: '#ebedef' }}>
        <div class={tw`flex flex-col sm:flex-row md:flex-row flex-wrap gap-x-4 mx-4 py-2`} >
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


        <div class={tw`border-1 mx-4 my-4 bg-white shadow-sm px-2 rounded`}>
          <o-line height="350" data={this.chartData} options={this.chartOptions} />
        </div>

        <div class={tw`px-4 my-4`}>
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
