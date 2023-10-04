import { h, tag, WeElement, OmiProps, classNames, createRef } from 'omi'
import { TdCardProps } from './type'
import css from './style/index'
import { commonClass } from '../../src/common'
import { TdClassNamePrefix } from '../utils'
import '../../src/loading'

import { StyledProps } from '../common'
export interface CardProps extends TdCardProps, StyledProps {}
@tag('t-card')
export default class Card extends WeElement<CardProps> {
  static css = css as string

  static defaultProps = {
    bordered: true,
    headerBordered: false,
    hoverShadow: false,
    loading: false,
    shadow: false,
    size: 'medium',
    theme: 'normal',
  }

  static propTypes = {
    action: Object,
    avatar: Object,
    bordered: Boolean,
    content: Object,
    cover: [Object, String],
    description: Object,
    footer: Object,
    header: Object,
    headerBordered: Boolean,
    hoverShadow: Boolean,
    loading: [Boolean, Object],
    shadow: Boolean,
    size: String,
    status: String,
    subtitle: Object,
    theme: String,
    title: Object,
  }

  componentName = TdClassNamePrefix('card')
  ref = createRef()

  render(props: OmiProps<CardProps>) {
    const {
      theme,
      bordered,
      size,
      shadow,
      hoverShadow,
      headerBordered,
      loading,
      title,
      subtitle,
      description,
      avatar,
      actions,
      status,
      header,
      cover,
      footer,
      children,
    } = props
    const { componentName, ref } = this
    const isPoster2 = theme === 'poster2'

    const cardClass = classNames(`${componentName}`, props.class, {
      [commonClass.SIZE.small]: size === 'small',
      [`${componentName}--bordered`]: bordered,
      [`${componentName}--shadow`]: shadow,
      [`${componentName}--shadow-hover`]: hoverShadow,
    })

    const showHeader = (header ||
      title ||
      subtitle ||
      description ||
      avatar ||
      (actions && !isPoster2) ||
      (status && isPoster2)) as boolean

    const headerClass = classNames({
      [`${componentName}__header`]: showHeader,
      [`${componentName}__title--bordered`]: headerBordered,
    })

    const titleClass = classNames({
      [`${componentName}__title`]: title,
    })

    const subtitleClass = classNames({
      [`${componentName}__subtitle`]: subtitle,
    })

    const actionClass = classNames({
      [`${componentName}__actions`]: actions,
    })

    const footerClass = classNames({
      [`${componentName}__footer`]: footer,
    })

    const coverClass = classNames({
      [`${componentName}__cover`]: cover,
    })

    const avatarClass = classNames({
      [`${componentName}__avatar`]: avatar,
    })

    const bodyClass = classNames({
      [`${componentName}__body`]: children.length > 0,
    })

    const descriptionClass = classNames({
      [`${componentName}__description`]: description,
    })

    const renderTitle = title ? <span class={titleClass}>{title}</span> : null

    const renderSubtitle = subtitle ? <span class={subtitleClass}>{subtitle}</span> : null

    const renderDescription = description ? <p class={descriptionClass}>{description}</p> : null

    const renderAvatar = avatar && <div class={avatarClass}>{avatar}</div>

    const renderHeaderActions = actions && !isPoster2 && <div class={actionClass}>{actions}</div>
    const renderFooterActions = actions && isPoster2 && <div class={actionClass}>{actions}</div>

    const renderStatus = status && isPoster2 && <div class={actionClass}>{status}</div>
    const renderHeader = () => {
      if (header) {
        return <div class={headerClass}>{header}</div>
      }
      return (
        <div class={headerClass}>
          <div class={`${componentName}__header-wrapper`}>
            {renderAvatar}
            <div>
              {renderTitle}
              {renderSubtitle}
              {renderDescription}
            </div>
          </div>
          {renderHeaderActions}
          {renderStatus}
        </div>
      )
    }

    const renderCover = cover ? (
      <div class={coverClass}>{typeof cover === 'string' ? <img src={cover} alt=""></img> : cover}</div>
    ) : null

    const renderChildren = children && <div class={bodyClass}>{children}</div>

    const renderFooter = footer && (
      <div class={footerClass}>
        <div class={`${componentName}__footer-wrapper`}>{footer}</div>
        {renderFooterActions}
      </div>
    )

    const card = (
      <div ref={ref} class={cardClass} style={props.style}>
        {showHeader ? renderHeader() : null}
        {renderCover}
        {renderChildren}
        {renderFooter}
      </div>
    )

    return loading ? <t-loading>{card}</t-loading> : card
  }
}
