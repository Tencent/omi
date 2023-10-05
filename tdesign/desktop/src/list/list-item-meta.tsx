import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { ListItemMetaProps } from './types'
import { TdClassNamePrefix } from '../utils'
import { StyledProps, TElement, TNode } from '../common'

const ListItenMetaClassNamePrefix = (className: string) => TdClassNamePrefix('list-item__meta-') + className

@tag('t-list-item-meta')
export default class ListItemMeta extends WeElement<ListItemMetaProps> {
  static css = style

  static defaultProps = {}

  static propTypes = {
    description: String,
    image: String,
    title: String,
  }

  renderImage = (image: any) => {
    return (
      <div class={classNames(ListItenMetaClassNamePrefix('avatar'))}>
        <img src={image} alt="" />
      </div>
    )
  }

  render(props: OmiProps<ListItemMetaProps, any>, store: any) {
    const { description, image, title } = props

    return (
      <>
        <div class={classNames(TdClassNamePrefix('list-item__meta'))}>
          {image && this.renderImage(image)}
          <div>
            <h3 class={classNames(ListItenMetaClassNamePrefix('title'))}>{title}</h3>
            {typeof description === 'string' ? (
              <p class={classNames(ListItenMetaClassNamePrefix('description'))}>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </>
    )
  }
}
