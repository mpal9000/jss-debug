/**
 * Add rule name to the class name for debugging purposes.
 *
 * @param {Rule} rule
 * @api public
 */
'use strict';

exports.__esModule = true;
exports['default'] = jssDebug;

function jssDebug(rule) {
  console.log('rule:', rule);
  if (!rule.options.named) return;

  var name = rule.options.name;
  console.log('name:', name);

  rule.className += ' jss:' + name;

  if (rule.options.sheet) {
    rule.options.sheet.classes[name] = rule.className;
  }
}

module.exports = exports['default'];