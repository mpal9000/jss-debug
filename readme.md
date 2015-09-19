![JSS logo](http://avatars1.githubusercontent.com/u/9503099?v=3&s=60)

## JSS plugin for debugging

Adds rule name to the class name for debugging purposes.

[Demo](http://jsstyles.github.io/jss-examples/index.html#plugin-jss-debug) -
[JSS](https://github.com/jsstyles/jss)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/jsstyles/jss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Usage example

```javascript
import jss from 'jss'
import debug from 'jss-debug'

jss.use(debug)

const styleSheet = jss.createStyleSheet({
  button: {
    'font-size': '20px'
  }
})
```

```javascript
console.log(styleSheet.toString())
```
```css
.jss-0-0 {
  font-size: 20px;
}
```

```javascript
console.log(styleSheet.classes)
```
```javascript
{ button: "jss-0-0 jss:button" }
```

```html
<button class="jss-0-0 jss:button">Button</button>
```


## Run tests

### Locally

```bash
npm i
open test/index.html
```

### From github

[Tests](https://jsstyles.github.com/jss-debug/test)


## License

MIT
