export const options = {
  mixin: {} as Record<string, unknown>,
}

export function mixin(obj: Record<string, unknown>) {
  Object.assign(options.mixin, obj)
}
