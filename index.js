'use strict'

/**
 * Add rule name to the class name for debugging purposes.
 *
 * @param {Rule} rule
 * @api public
 */
module.exports = function (rule) {
    if (!rule.options.named) return
    var name = rule.options.name
    rule.className += ' jss:' + name
    if (rule.options.sheet) {
        rule.options.sheet.classes[name] = rule.className
    }
}
