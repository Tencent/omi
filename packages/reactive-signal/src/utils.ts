export function isPrimitive(value: unknown) {
  return (
    typeof value === 'undefined' ||
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string' ||
    typeof value === 'symbol'
  )
}
