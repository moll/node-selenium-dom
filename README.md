SeleniumDom.js
==============
[![NPM version][npm-badge]](https://www.npmjs.com/package/selenium-dom)

SeleniumDom.js is a mixin library for Node.js's Selenium WebDriver that adds **DOM methods** to Selenium's `WebDriver` and `WebElement`. That allows you to locate and query elements with a more **standardized API** _and_ to **share test code** between integration tests using [Selenium][selenium] and unit tests using something like [JSDOM][jsdom]. Very handy for the page object pattern.

SeleniumDom.js supports [Selenium WebDriver][selenium] v2.

[npm-badge]: https://img.shields.io/npm/v/selenium-dom.svg
[selenium]: https://www.npmjs.com/package/selenium-webdriver
[jsdom]: https://github.com/tmpvar/jsdom


Installing
----------
```sh
npm install selenium-dom
```

SeleniumDom.js follows [semantic versioning](http://semver.org), so feel free to depend on its major version with something like `>= 1.0.0 < 2` (a.k.a `^1.0.0`).


Using
-----
```javascript
var Selenium = require("selenium-webdriver")
require("selenium-dom")(Selenium)

var browser = new Selenium.Builder().build()
browser.body // => WebElementPromise of `<body>`.
```


API
---
For extended documentation on all functions, please see the
[SeleniumDom.js API Documentation][api].

[api]: https://github.com/moll/node-selenium-dom/blob/master/doc/API.md

### [SeleniumDom](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#SeleniumDom)

### [WebDriver](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebDriver)
- [body](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#webDriver.body)
- [.prototype.elementFromPoint](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebDriver.prototype.elementFromPoint)(x, y)
- [.prototype.getElementById](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebDriver.prototype.getElementById)(selector, [timeout])
- [.prototype.querySelector](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebDriver.prototype.querySelector)(selector, [timeout])
- [.prototype.querySelectorAll](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebDriver.prototype.querySelectorAll)(selector)

### [WebElement](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebElement)
- [classList](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#webElement.classList)
- [value](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#webElement.value)
- [.prototype.closest](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebElement.prototype.closest)([options])
- [.prototype.querySelector](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebElement.prototype.querySelector)(selector, [timeout])
- [.prototype.querySelectorAll](https://github.com/moll/node-selenium-dom/blob/master/doc/API.md#WebElement.prototype.querySelectorAll)(selector)


License
-------
SeleniumDom.js is released under a *Lesser GNU Affero General Public License*, which in summary means:

- You **can** use this program for **no cost**.
- You **can** use this program for **both personal and commercial reasons**.
- You **do not have to share your own program's code** which uses this program.
- You **have to share modifications** (e.g. bug-fixes) you've made to this program.

For more convoluted language, see the `LICENSE` file.


About
-----
**[Andri Möll][moll]** typed this and the code.  
[Monday Calendar][monday] supported the engineering work.

If you find SeleniumDom.js needs improving, please don't hesitate to type to me now at [andri@dot.ee][email] or [create an issue online][issues].

[email]: mailto:andri@dot.ee
[issues]: https://github.com/moll/node-selenium-dom/issues
[moll]: http://themoll.com
[monday]: https://mondayapp.com
