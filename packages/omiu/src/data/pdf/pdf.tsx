import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import '../../components/button/index'
import pdfjs from '@bundled-es-modules/pdfjs-dist/build/pdf'
import viewer from '@bundled-es-modules/pdfjs-dist/web/pdf_viewer'

pdfjs.GlobalWorkerOptions.workerSrc = 'https://omi.cdn-go.cn/omiu/latest/pdf.worker.js'

@tag('o-pdf')
export class Button extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
  }
  `,
  ]

  state = {
    pageNum: '-',
    pageCount: '-',
  }

  static defaultProps = {
    pagination: true,
  }

  installed() {
    // header on that server.
    const url = this.props.url

    this.pdfDoc = null
    this.pageNum = 1
    this.pageRendering = false
    this.pageNumPending = null
    this.scale = this.props.scale

    /**
     * Asynchronously downloads PDF.
     */
    pdfjs.getDocument(url).promise.then((pdfDoc_) => {
      this.pdfDoc = pdfDoc_

      this.state.pageCount = this.pdfDoc.numPages
      this.update()

      if (this.props.pagination) {
        this.ctx = this.canvas.getContext('2d')
        this.renderPage(this.pageNum)
      } else {
        this.renderPages()
      }

      window.addEventListener(
        'resize',
        throttle(() => {
          if (this.props.pagination) {
            this.renderPage(this.pageNum)
          } else {
            this.renderPages()
          }
        }, 300),
      )
    })
  }

  /**
   * Get page info from document, resize canvas accordingly, and render page.
   * @param num Page number.
   */
  renderPage(num) {
    this.pageRendering = true
    // Using promise to fetch the page
    this.pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport({ scale: 1 })
      const width = this.clientWidth || parseInt(this.style.width)
      const scale = width / viewport.width

      const scaledViewport = page.getViewport({ scale })

      this.canvas.height = scaledViewport.height
      this.canvas.width = scaledViewport.width

      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: this.ctx,
        viewport: scaledViewport,
      }
      const renderTask = page.render(renderContext)

      // Wait for rendering to finish
      renderTask.promise.then(() => {
        this.pageRendering = false
        if (this.pageNumPending !== null) {
          // New page rendering is pending
          this.renderPage(this.pageNumPending)
          this.pageNumPending = null
        }
      })
    })

    this.state.pageNum = num
    this.update()
  }

  renderPages() {
    this.container.innerHTML = ''
    for (let pageNumber = 1; pageNumber <= this.pdfDoc.numPages; pageNumber++) {
      this.pdfDoc.getPage(pageNumber).then((page) => {
        const viewport = page.getViewport({ scale: 1 })
        const width = this.clientWidth || parseInt(this.style.width)
        const scale = width / viewport.width

        const scaledViewport = page.getViewport({ scale })

        const pdfCanvas = document.createElement('canvas')

        pdfCanvas.width = scaledViewport.width
        pdfCanvas.height = scaledViewport.height
        this.container.appendChild(pdfCanvas)

        const pdfContext = pdfCanvas.getContext('2d')

        const renderContext = {
          canvasContext: pdfContext,
          viewport: scaledViewport,
        }

        page.render(renderContext)
      })
    }
  }

  queueRenderPage(num) {
    if (this.pageRendering) {
      this.pageNumPending = num
    } else {
      this.renderPage(num)
    }
  }

  @bind
  onPrevClick() {
    if (this.pageNum <= 1) {
      return
    }
    this.pageNum--
    this.queueRenderPage(this.pageNum)
  }

  @bind
  onNextClick() {
    if (this.pageNum >= this.pdfDoc.numPages) {
      return
    }
    this.pageNum++
    this.queueRenderPage(this.pageNum)
  }

  render(props) {
    return (
      <>
        {props.pagination && (
          <div>
            <div class="flex justify-between items-center">
              <o-button variant="outlined" onClick={this.onPrevClick} class>
                Prev
              </o-button>
              <span>
                <span id="page_num">{this.state.pageNum}</span> / <span id="page_count">{this.state.pageCount}</span>
              </span>
              <o-button variant="outlined" onClick={this.onNextClick}>
                Next
              </o-button>
            </div>
            <canvas ref={(e) => (this.canvas = e)}></canvas>
          </div>
        )}
        {!props.pagination && <div ref={(e) => (this.container = e)}></div>}
      </>
    )
  }
}

function throttle(func, delay) {
  let timeoutId
  return function () {
    const context = this
    const args = arguments
    if (!timeoutId) {
      timeoutId = setTimeout(function () {
        func.apply(context, args)
        timeoutId = null
      }, delay)
    }
  }
}
