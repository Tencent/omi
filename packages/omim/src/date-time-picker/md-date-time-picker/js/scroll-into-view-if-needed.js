if (!Element.prototype.scrollIntoViewIfNeeded) {
  Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
    centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded

    let parent = this.parentNode
    let parentComputedStyle = window.getComputedStyle(parent, null)
    let parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width'))
    let parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width'))
    let overTop = this.offsetTop - parent.offsetTop < parent.scrollTop
    let overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight)
    let overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft
    let overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth)
    let alignWithTop = overTop && !overBottom

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2
    }

    if ((overLeft || overRight) && centerIfNeeded) {
      parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2
    }

    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
      this.scrollIntoView(alignWithTop)
    }
  }
}
