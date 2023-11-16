/**
 * classNames based on https://github.com/JedWatson/classnames
 * by Jed Watson
 * Licensed under the MIT License
 * https://github.com/JedWatson/classnames/blob/master/LICENSE
 * modified by dntzhang
 */
const hasOwn = {}.hasOwnProperty

type Value = string | number | boolean | undefined | null
type Mapping = Record<string, unknown>
interface ArgumentArray extends Array<Argument> {}
interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray

export function classNames(...args: ArgumentArray): string {
  const classes: (string | number)[] = []

  for (let i = 0; i < args.length; i++) {
    const arg: Argument = args[i]
    if (!arg) continue

    const argType = typeof arg

    if (argType === 'string' || argType === 'number') {
      classes.push(arg as string | number)
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames(...arg)
      if (inner) {
        classes.push(inner)
      }
    } else if (argType === 'object') {
      for (const key in arg as Mapping) {
        if (hasOwn.call(arg, key) && (arg as Mapping)[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}

type PropsMapping = {
  class?: Argument
  className?: Argument
} & Mapping

export function extractClass(
  props: PropsMapping,
  ...args: ArgumentArray
): { class: string } | undefined {
  if (props.class) {
    args.unshift(props.class)
    delete props.class
  } else if (props.className) {
    args.unshift(props.className)
    delete props.className
  }
  if (args.length > 0) {
    return { class: classNames(...args) }
  }
}
