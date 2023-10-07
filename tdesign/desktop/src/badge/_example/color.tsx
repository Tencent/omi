import { WeElement, tag } from 'omi'
import '../../checkbox'
import '../index'

@tag('badge-color')
export default class BadgeColor extends WeElement{
    static css = 't-badge{}'
    colors = [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
        '#9e9e9e',
        '#607d8b',
    ]
    dot = true
    setDot = (isDot : boolean) => {
        this.dot = isDot
        this.update()
    }

    render() {
        const { colors, dot, setDot} = this
        return (
            <>
              <t-checkbox value={dot} onChange={setDot}>
                红点样式
              </t-checkbox>
              <div>
                    {colors.map((color) => (
                        <t-badge color={color} dot={dot} key={color} count={100}></t-badge>
                    ))}
              </div>
            </>
        )
    }
}