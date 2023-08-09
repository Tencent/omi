export function ClassNamePefix(prefix: string) {
  return (classname: string) => {
    return `${prefix}${classname}`
  }
}

export const TdClassNamePefix = ClassNamePefix('t-')
