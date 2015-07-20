'use strict'

QUnit.module('Debug plugin', {
    setup: function () {
        jss.use(jssDebug)
    },
    teardown: function () {
        jss.plugins.registry = []
    }
})

test('debug properties', function () {
    jss.Rule.uid = 0
    var ss = jss.createStyleSheet({
        a: {
            'font-size': '20px'
        }
    })

    equal(ss.getRule('a').className, 'jss-0 jss:a')
})
