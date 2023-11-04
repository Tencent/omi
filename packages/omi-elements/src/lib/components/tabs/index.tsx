import { tag, Component, classNames, bind, createRef } from 'omi'
import { tailwind } from '@/tailwind'
import tabsTheme from './tabsTheme'
import tabsItemTheme from './tabsItemTheme'

interface TabsTheme {
  defaultTabs?: string
  verticalTabs?: string
  pillsTabs?: string
}

interface TabsProps {
  ref?: React.Ref<any>
  theme?: TabsTheme
  fill?: boolean
  justify?: boolean
  vertical?: boolean
  pills?: boolean
}

interface TabsItemTheme {
  fillTabsItem?: string
  justifyTabsItem?: string
  verticalTabsItem?: string
  tabsLink?: string
  pillsLink?: string
  inactiveTabsLink?: string
  inactivePillsLink?: string
  disabledTabsLink?: string
  disabledPillsLink?: string
  activePrimaryPillsLink?: string
  activeSecondaryPillsLink?: string
  activeSuccessPillsLink?: string
  activeDangerPillsLink?: string
  activeWarningPillsLink?: string
  activeInfoPillsLink?: string
  activeLightPillsLink?: string
  activeDarkPillsLink?: string
  activePrimaryTabsLink?: string
  activeSecondaryTabsLink?: string
  activeSuccessTabsLink?: string
  activeDangerTabsLink?: string
  activeWarningTabsLink?: string
  activeInfoTabsLink?: string
  activeLightTabsLink?: string
  activeDarkTabsLink?: string
}

interface TabsItemProps {
  ref?: React.Ref<any>
  theme?: TabsItemTheme
  tag?: React.ComponentProps<any>
  wrapperClass?: string
  active?: boolean
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

@tag('o-tabs')
export class Tabs extends Component {
  static css = [
    tailwind,
    `:host {
  display: block;
}`,
  ]

  render(props) {
    const { fill, justify, vertical, pills } = props

    const tabsClasses = classNames(
      pills
        ? vertical
          ? tabsTheme.verticalTabs
          : tabsTheme.pillsTabs
        : vertical
        ? tabsTheme.verticalTabs
        : tabsTheme.defaultTabs,
    )

    const tabsColors = {
      primary: {
        tabs: tabsItemTheme.activePrimaryTabsLink,
        pills: tabsItemTheme.activePrimaryPillsLink,
      },
      secondary: {
        tabs: tabsItemTheme.activeSecondaryTabsLink,
        pills: tabsItemTheme.activeSecondaryPillsLink,
      },
      success: {
        tabs: tabsItemTheme.activeSuccessTabsLink,
        pills: tabsItemTheme.activeSuccessPillsLink,
      },
      danger: {
        tabs: tabsItemTheme.activeDangerTabsLink,
        pills: tabsItemTheme.activeDangerPillsLink,
      },
      warning: {
        tabs: tabsItemTheme.activeWarningTabsLink,
        pills: tabsItemTheme.activeWarningPillsLink,
      },
      info: {
        tabs: tabsItemTheme.activeInfoTabsLink,
        pills: tabsItemTheme.activeInfoPillsLink,
      },
      light: {
        tabs: tabsItemTheme.activeLightTabsLink,
        pills: tabsItemTheme.activeLightPillsLink,
      },
      dark: {
        tabs: tabsItemTheme.activeDarkTabsLink,
        pills: tabsItemTheme.activeDarkPillsLink,
      },
    }

    return (
      <ul class={tabsClasses} role="tablist">
        {props.children.map((child) => {
          const { disabled, active, color = 'primary', wrapperClass, tag = 'a', ...others } = child.attributes
          const childTag = {
            name: tag,
          }
          const wrapperClasses = classNames(
            fill && tabsItemTheme.fillTabsItem,
            justify && tabsItemTheme.justifyTabsItem,
            vertical && tabsItemTheme.verticalTabsItem,
            disabled && tabsItemTheme.disabledTabsItem,
            wrapperClass,
          )

          const classes = classNames(
            pills ? tabsItemTheme.pillsLink : tabsItemTheme.tabsLink,
            disabled ? (pills ? tabsItemTheme.disabledPillsLink : tabsItemTheme.disabledTabsLink) : '',
            pills && !disabled
              ? active
                ? tabsColors[color].pills
                : tabsItemTheme.inactivePillsLink
              : active
              ? tabsColors[color].tabs
              : tabsItemTheme.inactiveTabsLink,
          )

          return (
            <li className={wrapperClasses} role="presentation" {...others}>
              <childTag.name className={classes} role="tab">
                {child.children}
              </childTag.name>
            </li>
          )
        })}
      </ul>
    )
  }
}
