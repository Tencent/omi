/**
 * Cache for storing created CSSStyleSheets.
 *
 * 用无原型的对象，避免 css 文本恰好是 `constructor` / `toString` 这类键时取到原型上的属性。
 */
const styleSheetCache = Object.create(null) as { [key: string]: CSSStyleSheet }

/**
 * A tagged template function for CSS that supports JavaScript expressions.
 * It concatenates the parts of the template string with the values of the expressions.
 * It also checks if the values are safe to insert into CSS.
 * The function returns a CSSStyleSheet object, which can be shared among multiple elements.
 *
 * @param {TemplateStringsArray} strings - The parts of the template string.
 * @param {...unknown[]} values - The values of the expressions.
 * @returns {CSSStyleSheet} The resulting CSSStyleSheet object.
 * @throws {Error} If a value is not safe to insert into CSS.
 */
export function css(
  strings: TemplateStringsArray,
  ...values: unknown[]
): CSSStyleSheet {
  let str = ''
  strings.forEach((string, i) => {
    // Check if the value is safe to insert into CSS
    if (
      values[i] !== undefined &&
      typeof values[i] !== 'string' &&
      typeof values[i] !== 'number'
    ) {
      throw new Error(`Unsupported value in CSS: ${values[i]}`)
    }

    // 用 ?? 而不是 ||：0 是合法的 CSS 值，不能被当成空值丢掉
    str += string + (values[i] ?? '')
  })

  // Check if the style sheet is in the cache
  if (styleSheetCache[str]) {
    // If it is, return the cached style sheet
    return styleSheetCache[str]
  } else {
    // If it's not, create a new style sheet
    const styleSheet = new CSSStyleSheet()
    styleSheet.replaceSync(str)

    // Store the new style sheet in the cache
    styleSheetCache[str] = styleSheet

    // Return the new style sheet
    return styleSheet
  }
}
