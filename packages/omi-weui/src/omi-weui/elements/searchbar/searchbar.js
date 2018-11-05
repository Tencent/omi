import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames'
import Icon from '../icon'

/**
 *  weui search component
 *
 */
class SearchBar extends React.Component {
  static propTypes = {
    /**
     * default value for the searchbar if any
     *
     */
    defaultValue: PropTypes.string,
    /**
     * default place holder text
     *
     */
    placeholder: PropTypes.string,
    /**
     * name of the input component
     *
     */
    searchName: PropTypes.string,
    /**
     * trigger when text change on input pass `text` property
     *
     */
    onChange: PropTypes.func,
    /**
     * trigger when user click clear icon
     *
     */
    onClear: PropTypes.func,
    /**
     * trigger when user click cancel button
     *
     */
    onCancel: PropTypes.func,
    /**
     * trigger when user submit (enter action)
     *
     */
    onSubmit: PropTypes.func,
    /**
     * language object consists of `cancel` property
     *
     */
    lang: PropTypes.object
  }

  static defaultProps = {
    placeholder: '搜索',
    searchName: 'q',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    onSubmit: undefined,
    lang: { cancel: '取消' },
    autocomplete: 'off'
  }

  constructor(props) {
    super(props)

    this.state = {
      focus: this.props.defaultValue ? true : false,
      clearing: false,
      text: this.props.defaultValue ? this.props.defaultValue : ''
    };

    if (this.props.defaultValue !== ''){
      if (this.props.onChange) this.props.onChange(this.state.text)
    }
  }

  changeHandle(e) {
    let text = e.target.value
    if (this.props.onChange) this.props.onChange(text, e)
    this.setState({text})
  }

  cancelHandle(e) {
    this.setState({
      focus: false,
      text: ''
    })
    if (this.props.onCancel) this.props.onCancel(e)
    if (this.props.onChange) this.props.onChange('', e)
  }

  clearHandle(e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({text: '', clearing: true})
    if (this.props.onClear) this.props.onClear(e)
    // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
    // When render returns null or false, findDOMNode returns null.
    // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断
    this.refs.searchInput.focus()
    // ReactDOM.findDOMNode(this.refs.searchInput).focus()
    if (this.props.onChange) this.props.onChange('', e)
  }

  blurHandle(e) {
    if (this.state.text === ''){
      this.setState({ focus: false})
    }
  }

  submitHandle(e) {
    if (this.props.onSubmit) {
      e.preventDefault()
      e.stopPropagation()
      this.props.onSubmit(this.state.text, e)
    }
  }

  render() {
    const {children, defaultValue, autocomplete, placeholder, className, searchName} = this.props
    const clz = classNames({
      'weui-search-bar': true,
      'weui-search-bar_focusing': this.state.focus
    },
      className
    return (
      <div className={clz}>
        <form className='weui-search-bar__form' onSubmit={this.submitHandle.bind(this)}>
          <div className='weui-search-bar__box'>
            <Icon value='search'/>
            <input
              ref='searchInput'
              type='search'
              name={searchName}
              className='weui-search-bar__input'
              placeholder={placeholder}
              onFocus={e=>this.setState({focus: true})}
              onBlur={this.blurHandle.bind(this)}
              onChange={this.changeHandle.bind(this)}
              value={this.state.text}
              autoComplete={autocomplete}
            />
            {/*React will not trigger onMouseDown when not onClick presented*/}
            <a
              className='weui-icon-clear'
              onClick={this.clearHandle.bind(this)}
            />
          </div>
          <label
            className='weui-search-bar__label'
            onClick={()=>{
              let searchInput = this.refs.searchInput
              if (searchInput) {
                searchInput.focus()
              }
            }}
            style={{display: this.state.text ? 'none' : null}}
          >
            <Icon value='search'/>
            <span>{placeholder}</span>
          </label>
        </form>
        <a className='weui-search-bar__cancel-btn' onClick={this.cancelHandle.bind(this)}>{this.props.lang.cancel}</a>
      </div>
    );
  }
}

export default SearchBar
