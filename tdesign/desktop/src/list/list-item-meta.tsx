import { OmiProps, WeElement, h, tag, classNames } from 'omi'
import style from './style'
import { ListItemMetaProps } from './types'
import { TdClassNamePefix } from '../utils/clsx'
import { StyledProps , TElement,TNode } from '../common';

const ListItenMetaClassNamePefix = (className: string) => TdClassNamePefix('list-item__meta-') + className

@tag('t-list-item-meta')
export default class ListItemMeta extends WeElement<ListItemMetaProps> {
  static css = style

  static defaultProps = {}

  static propTypes = {
    description: String,
    image: String,
    title: String,
  }


  renderImage = (image : any) => {
    return (
      <div class={classNames(ListItenMetaClassNamePefix('avatar'))}>
        <img src={image} alt="" />
      </div>
    );
  };

  render(props: OmiProps<ListItemMetaProps, any>, store: any) {
    const { description, image, title } = props

    return (
      <>
        <div class={classNames(TdClassNamePefix('list-item__meta'))}>
          {image && this.renderImage(image)}
          <div>
            <h3 class={classNames(ListItenMetaClassNamePefix('title'))}>{title}</h3>
            {typeof description === 'string' ? <p class={classNames(ListItenMetaClassNamePefix('description'))}>{description}</p> : description}
          </div>
        </div>
      </>
    )
  }
}
