## Adds rule name to the class name for debugging purposes.

Take a look at [examples](http://jsstyles.github.io/jss-debug/examples/index.html) directory.


```javascript
exports.styles = {
    button: {
        'font-size': '20px'
    }
}
```
```css
.jss-0 {
    font-size: 20px;
}
```

```html
<button class="jss-0 jss:button">Button</button>
```

## Register plugin

```javascript
var jss = require('jss')
var debug = require('jss-debug')
jss.use(debug)
```

## Run tests

### Locally
```bash
npm i
open test/local.html
```
### From github

[Tests](https://jsstyles.github.com/jss-debug/test)

## License

MIT
