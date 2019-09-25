/** 
 * Using x-data-spreadsheet
 * By yuliang.liang(myliang)
 * MIT LICENSE
 * https://github.com/myliang/x-spreadsheet/blob/master/LICENSE
 *  
 * **/

import { tag, WeElement, h } from 'omi'
import XSpreadsheet from "x-data-spreadsheet";

//@ts-ignore
import '../theme.ts'

interface Props {
  data?: object
  width?: number
  height?: number
}

@tag('m-spreadsheet')
export default class Spreadsheet extends WeElement<Props>{

  static defaultProps = {

  }

  static propTypes = {
  }

  spreadsheet: XSpreadsheet

  installed() {
    const ele = this.shadowRoot.querySelector('.m-spreadsheet')
    document.body.appendChild(ele)
    const s = new XSpreadsheet(document.querySelector('.m-spreadsheet'), {
      view: {
        height: () => {
          if (this.props.height) return this.props.height
          return document.documentElement.clientHeight
        },
        width: () => {
          if (this.props.width) return this.props.width
          return document.documentElement.clientWidth
        }
      },

    })
      .loadData(this.props.data || {}) // load data
      .change(data => {
        this.fire('change', data)
      });

    const placeholder = this.shadowRoot.querySelector('.placeholder')
    const rect = placeholder.getBoundingClientRect()

    //@ts-ignore
    ele.style.left = rect.left + 'px'
    //@ts-ignore
    ele.style.top = rect.top + 'px'
    // data validation
    s.validate()

    this.spreadsheet = s

  }


  render(props) {
    return (
      <div class="placeholder">
        <div style='position: absolute;' class="m-spreadsheet"></div>
      </div>
    )
  }
}

