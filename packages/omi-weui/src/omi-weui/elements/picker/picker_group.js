import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

class PickerGroup extends Component {
    static propTypes = {
        height: PropTypes.number,
        itemHeight: PropTypes.number,
        indicatorTop: PropTypes.number,
        indicatorHeight: PropTypes.number,
        onChange: PropTypes.func,
        aniamtion: PropTypes.bool,
        groupIndex: PropTypes.number,
        defaultIndex: PropTypes.number
    }

    static defaultProps = {
        height: 238,
        itemHeight: 25 + 9, //content + padding
        indicatorTop: 102,
        indicatorHeight: 34,
        aniamtion: true,
        groupIndex: -1,
        defaultIndex: -1,
        mapKeys: {
            label: 'label'
        }
    }

    constructor(props){
        super(props);

        this.state = {
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            totalHeight: 0,
            selected: 0,
            animating: this.props.animation
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }

    componentDidMount(){
        this.adjustPosition(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.adjustPosition(nextProps);
    }

    adjustPosition(props){
        const { items, itemHeight, indicatorTop, defaultIndex } = props;
        const totalHeight = items.length * itemHeight;
        let translate = totalHeight <= indicatorTop ? indicatorTop : 0;

        if (defaultIndex > -1) {
            if (translate === 0){
                let upperCount = Math.floor(indicatorTop / itemHeight);
                if ( defaultIndex > upperCount ){
                    //over
                    let overCount = defaultIndex - upperCount;
                    translate -= overCount * itemHeight;
                } else if ( defaultIndex === upperCount){
                    translate = 0;
                } else {
                    //less
                    translate += ( Math.abs(upperCount - defaultIndex) * itemHeight);
                }
                //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
            } else {
                //total item less than indicator height
                translate -= itemHeight * defaultIndex;
            }
        }

    	this.setState({ selected: defaultIndex, ogTranslate: translate, totalHeight, translate,
    	}, () => defaultIndex > -1 ? this.updateSelected(false) : this.updateSelected() );
    }

    updateSelected(propagate = true){
        const { items, itemHeight, indicatorTop, indicatorHeight, onChange, groupIndex } = this.props;
        let selected = 0;
        items.forEach( (item, i) => {
            //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
            if ( !item.disabled && (this.state.translate + (itemHeight * i)) >= indicatorTop &&
            ( this.state.translate + (itemHeight * i) + itemHeight ) <= indicatorTop + indicatorHeight ){
                selected = i;
            }
        });

        if (onChange && propagate) onChange(items[selected], selected, groupIndex);
    }

    handleTouchStart(e){
        if (this.state.touching || this.props.items.length <= 1) return;

        this.setState({
            touching: true,
            ogTranslate: this.state.translate,
            touchId: e.targetTouches[0].identifier,
        	ogY: this.state.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
        	animating: false
        });
    }

    handleTouchMove(e){
        if (!this.state.touching || this.props.items.length <= 1) return;
        if (e.targetTouches[0].identifier !== this.state.touchId) return;

        //prevent move background
        e.preventDefault();

        const pageY = e.targetTouches[0].pageY;
        const diffY = pageY - this.state.ogY;

        this.setState({
            translate: diffY
        });
    }

    handleTouchEnd(e){
        if (!this.state.touching || this.props.items.length <= 1) return;

        const { indicatorTop, indicatorHeight, itemHeight } = this.props;
        let translate = this.state.translate;

        if ( Math.abs(translate - this.state.ogTranslate) < ( itemHeight * .51 ) ){
            translate = this.state.ogTranslate;
        } else if (translate > indicatorTop) {
            //top boundry
            translate = indicatorTop;
        } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
            //bottom
            translate = indicatorTop + indicatorHeight - this.state.totalHeight;
        } else {
            //pass single item range but not exceed boundry
            let step = 0, adjust = 0;
            let diff = (translate - this.state.ogTranslate) / itemHeight;

            if (Math.abs(diff) < 1){
                step = diff > 0 ? 1 : -1;
            } else {
                adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
                step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
            }

            translate = this.state.ogTranslate + ( step * itemHeight );
        }

        this.setState({
            touching: false,
            ogY: 0,
            touchId: undefined,
            ogTranslate: 0,
            animating: true,
            translate
        }, ()=>this.updateSelected());
    }

    render() {
        const { items, className, height, itemHeight, indicatorTop, indicatorHeight, onChange, aniamtion, groupIndex, defaultIndex, mapKeys, ...others } = this.props;
        const cls = classNames('weui-picker__group', className);
        const styles = {
            'transform': `translate(0, ${this.state.translate}px)`,
            'transition': this.state.animating ? 'transform .3s' : 'none'
        };

        return (
            <div className={cls} { ...others }
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                <div className="weui-picker__mask"></div>
                <div className="weui-picker__indicator"></div>
                <div className="weui-picker__content"
                    style={styles}
                    ref="content">
                    { items.map( (item, j) => {
                        const label = item[this.props.mapKeys.label];
                        const itemCls = classNames('weui-picker__item', {
                            'weui-picker__item_disabled': item.disabled
                        });

                        return <div key={j} className={itemCls}>{ label }</div>;
                    }) }
                </div>
            </div>
        );
    }
}

export default PickerGroup;
