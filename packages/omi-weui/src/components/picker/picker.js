import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PickerGroup from './picker_group'
import classNames from '../../utils/classnames'
import Mask from '../mask'
/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
class Picker extends Component {
  static propTypes = {
      /**
     * consists of array of object(max 2) with property `label` and others pass into element
     *
     */
    actions: PropTypes.array,
      /**
     * array objects consists of groups for each scroll group
     *
     */
    groups: PropTypes.array,
      /**
     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
     *
     */
    defaultSelect: PropTypes.array,
      /**
     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
     *
     */
    onGroupChange: PropTypes.func,
      /**
     * on selected change, pass property `selected` for array of slected index to `groups`
     *
     */
    onChange: PropTypes.func,
      /**
     * excute when the popup about to close
     *
     */
    onCancel: PropTypes.func,
    /**
     * display the component
     *
     */
      show: PropTypes.bool,
      /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
      lang: PropTypes.object
  }

  static defaultProps = {
    actions: [],
      groups: [],
    show: false,
      lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
  }

  constructor(props) {
      super(props)

        this.state = {
        selected: this.props.defaultSelect ? this.props.defaultSelect : Array(this.props.groups.length).fill(-1),
        actions: this.props.actions.length > 0 ? this.props.actions : [{
          label: this.props.lang.leftBtn,
          onClick: e =>
                  this.handleClose(() => {
                    if (this.props.onCancel) this.props.onCancel(e)
                  })
              },
              {
          label: this.props.lang.rightBtn,
          onClick: e => this.handleChanges()
        }],
        closing: false
      };

      this.handleChanges = this.handleChanges.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

  handleChanges() {
      this.handleClose( ()=> { if (this.props.onChange) this.props.onChange(this.state.selected, this) } )
    }

  }

  handleChange(item, i, groupIndex) {
      let selected = this.state.selected

        selected[groupIndex] = i
        this.setState({ selected }, ()=>{
        if (this.props.onGroupChange) this.props.onGroupChange(item, i, groupIndex, this.state.selected, this)
        });
  }

  handleClose(cb) {
      this.setState({
        closing: true
      }, ()=> setTimeout( ()=> {
        this.setState({ closing: false })
            cb()
        }, 300)
    )
  }

  renderActions() {
      let elActions = this.state.actions.map( (action, i)=> {
        const { label, ...others } = action
            return <a {...others} key={i} className="weui-picker__action"> { label }</a>
        });

      return (
        <div className="weui-picker__hd">
          { elActions }
        </div>
      );
    }

  renderGroups() {
      return this.props.groups.map( (group, i) => {
        return <PickerGroup key={i} {...group} onChange={this.handleChange} groupIndex={i} defaultIndex={this.state.selected[i]} />
        });
    })
  }

  render() {
      const { className, show, actions, groups, defaultSelect, onGroupChange, onChange, onCancel, ...others } = this.props
        const cls = classNames('weui-picker', {
        'weui-animate-slide-up': show && !this.state.closing,
        'weui-animate-slide-down': this.state.closing
      }, className)

        const maskCls = classNames({
        'weui-animate-fade-in': show && !this.state.closing,
      'weui-animate-fade-out': this.state.closing
      })

        return this.props.show ? (
        <div>
          <Mask className={maskCls} onClick={e=>this.handleClose( ()=> {if (this.props.onCancel) this.props.onCancel(e)} )} />
          <div className={cls} {...others}>
            { this.renderActions() }
            <div className="weui-picker__bd">
              { this.renderGroups() }
            </div>
          </div>
        </div>
      ) : false
    }
}

export default Picker
