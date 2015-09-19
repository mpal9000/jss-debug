/**
 * Add rule name to the class name for debugging purposes.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssDebug(rule) {
  if (!rule.options.named) return

  const name = rule.name

  rule.className += ` jss:${name}`

  if (rule.options.sheet) {
    rule.options.sheet.classes[name] = rule.className
  }
}
