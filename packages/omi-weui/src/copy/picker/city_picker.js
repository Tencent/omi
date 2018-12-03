import React from 'react'
import PropTypes from 'prop-types'
import Picker from './picker'

/**
 *  An city pick component build on top of picker
 *
 */
class CityPicker extends React.Component {
  static propTypes = {
    /**
     * Array of item trees, consists property for label and subitems
     *
     */
    data: PropTypes.array.isRequired,
      /**
     * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
     *
     */
    dataMap: PropTypes.object,
    /**
     * currently selected item
     *
     */
    selected: PropTypes.array,
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
      data: [],
    dataMap: { id: 'name', items: 'sub' },
    selected: [],
    show: false,
    lang: { leftBtn: '取消', rightBtn: '确定' }
  }

  constructor(props) {
      super(props)
        const { data, selected, dataMap } = this.props
        const { groups, newselected } = this.parseData(data, dataMap.items, selected)
        this.state = {
        groups,
        selected: newselected,
        picker_show: false,
      text: ''
      };
    //console.log(this.state.groups)
      this.updateGroup = this.updateGroup.bind(this)
        this.parseData = this.parseData.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

  //@return array of group with options
  parseData(data, subKey, selected = [], group = [], newselected = []) {
    let _selected = 0

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0)
      _selected = _selectedClone.shift()
      selected = _selectedClone
    }

    if (typeof data[_selected] === 'undefined') {
        _selected = 0
      }

    newselected.push(_selected)

    let item = data[_selected]

    var _group = JSON.parse(JSON.stringify(data))
    _group.forEach(g => delete g[subKey])
    group.push({ items: _group, mapKeys: { label: this.props.dataMap.id } })

    if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
      return this.parseData(item[subKey], subKey, selected, group, newselected)
    } else {
      return { groups: group, newselected }
    }
  }

  updateDataBySelected(selected, cb) {
      const { data, dataMap } = this.props
        //validate if item exists

        const { groups, newselected } = this.parseData(data, dataMap.items, selected)

        let text = ''
        try {
        groups.forEach( (group, _i) => {
          text += `${group['items'][selected[_i]][this.props.dataMap.id]} `
            });
      } catch (err){
      //wait
        text = this.state.text
        }

      this.setState({
        groups,
        text,
        selected: newselected
      }, ()=>cb())
    }


  }

  updateGroup(item, i, groupIndex, selected, picker) {
      this.updateDataBySelected(selected, ()=>{
      //update picker
        picker.setState({
        selected: this.state.selected
        })
        });
  }

  handleChange(selected) {
    //handle unchange
      if (selected === this.state.selected){
        this.updateDataBySelected(selected, ()=>{
          if (this.props.onChange) this.props.onChange(this.state.text)
            });
    }

      if (this.props.onChange) this.props.onChange(this.state.text)
    }

  render() {
      return (
        <Picker
        show={this.props.show}
        onGroupChange={this.updateGroup}
          onChange={this.handleChange}
          defaultSelect={this.state.selected}
        groups={this.state.groups}
          onCancel={this.props.onCancel}
        lang={this.props.lang}
        />
      );
  }
}

export default CityPicker
