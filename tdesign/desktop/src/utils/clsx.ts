export function ClassNamePrefix(prefix: string) {
  return (classname: string) => {
    return `${prefix}${classname}`
  }
}

export const TdClassNamePrefix = ClassNamePrefix('t-')
