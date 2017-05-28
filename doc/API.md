SeleniumDom.js API Documentation
================================
### [SeleniumDom](#SeleniumDom)

### [WebDriver](#WebDriver)
- [body](#webDriver.body)
- [.prototype.elementFromPoint](#WebDriver.prototype.elementFromPoint)(x, y)
- [.prototype.getElementById](#WebDriver.prototype.getElementById)(selector, [timeout])
- [.prototype.querySelector](#WebDriver.prototype.querySelector)(selector, [timeout])
- [.prototype.querySelectorAll](#WebDriver.prototype.querySelectorAll)(selector)

### [WebElement](#WebElement)
- [classList](#webElement.classList)
- [textContent](#webElement.textContent)
- [value](#webElement.value)
- [.prototype.closest](#WebElement.prototype.closest)(selector)
- [.prototype.querySelector](#WebElement.prototype.querySelector)(selector, [timeout])
- [.prototype.querySelectorAll](#WebElement.prototype.querySelectorAll)(selector)
- [.prototype.scrollIntoView](#WebElement.prototype.scrollIntoView)([options])


SeleniumDom <a name="SeleniumDom"></a>
-----------
Extends the given Selenium module's [`WebDriver`][WebDriver] and
[`WebElement`][WebElement] classes with DOM methods.

[Promise]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise_exports_Promise.html
[WebDriver]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html
[WebElement]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html
[WebElementPromise]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElementPromise.html

**Examples**:
```javascript
var Selenium = require("selenium-webdriver")
require("selenium-dom")(Selenium)

var browser = new Selenium.Builder().build()
browser.body // => WebElementPromise of `<body>`.
```


WebDriver <a name="WebDriver"></a>
---------
The [`Selenium.WebDriver`][WebDriver] class returned from `Selenium.Builder`
will be extended with a few properties and methods found on the browser
DOM's Document.

**Examples**:
```javascript
var browser = new Selenium.Builder().build()
browser.body // => WebElementPromise of `<body>`.
```

### webDriver.body <a name="webDriver.body"></a>
Returns a [`WebElementPromise`][WebElementPromise] of `<body>`.

### WebDriver.prototype.elementFromPoint(x, y) <a name="WebDriver.prototype.elementFromPoint"></a>
Returns a [`WebElementPromise`][WebElementPromise] of the element under the coordinates `x` and `y`.  
Uses `document.elementFromPoint` internally.

Given negative coordinates, looks for the element from the right and bottom
edges.

**Examples**:
```javascript
browser.elementFromPoint(100, 150)
browser.elementFromPoint(-1, 10)
```

### WebDriver.prototype.getElementById(selector, [timeout]) <a name="WebDriver.prototype.getElementById"></a>
Returns a [`WebElementPromise`][WebElementPromise] of the element with the
given id.  
Given a timeout, retries up to `timeout` milliseconds if the element
didn't exist the first time.

**Examples**:
```javascript
browser.getElementById("signup-form")
browser.getElementById("signup-form", 500)
```

### WebDriver.prototype.querySelector(selector, [timeout]) <a name="WebDriver.prototype.querySelector"></a>
Returns a [`WebElementPromise`][WebElementPromise] of the element matching
the selector.  
Given a timeout, retries up to `timeout` milliseconds if the element
didn't exist the first time.

**Examples**:
```javascript
browser.querySelector("li.event")
browser.querySelector("li.event", 500)
```

### WebDriver.prototype.querySelectorAll(selector) <a name="WebDriver.prototype.querySelectorAll"></a>
Returns a [Promise][Promise] of [`WebElement`][WebElement]s matching the
selector.

**Examples**:
```javascript
browser.querySelectorAll("li.events")
```


WebElement <a name="WebElement"></a>
----------
The [`Selenium.WebElement`][WebElement] and
[`Selenium.WebElementPromise`][WebElementPromise] classes returned from
[`WebDriver.prototype.findElement`][findElement] and other funcitons will be
extended with a few methods found on the browser DOM's Document.

[findElement]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#findElement
[getAttribute]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#getAttribute

**Examples**:
```javascript
var browser = new Selenium.Builder().build()

var el = browser.getElementById("username")
el.then(function(el) { return el.value }) // => Promise of `<input>`'s value.
```

### webElement.classList <a name="webElement.classList"></a>
Returns a [`Promise`][Promise] of the element's classes as an array.

### webElement.textContent <a name="webElement.textContent"></a>
Returns a [`Promise`][Promise] of the element's `textContent`.

**Examples**:
```javascript
browser.body.textContent
```

### webElement.value <a name="webElement.value"></a>
Returns a [`Promise`][Promise] of the element's value.  
Uses [`WebElement.prototype.getAttribute`][getAttribute] internally.

### WebElement.prototype.closest(selector) <a name="WebElement.prototype.closest"></a>
Returns a [`WebElementPromise`][WebElementPromise] of the closest parent
matching the selector. Throws if no parent matched.

**Examples**:
```javascript
var el = browser.getElementById("signup-form")
el.closest("fieldset")
```

### WebElement.prototype.querySelector(selector, [timeout]) <a name="WebElement.prototype.querySelector"></a>
Returns a [`WebElementPromise`][WebElementPromise] of the element matching
the selector.  
Given a timeout, retries up to `timeout` milliseconds if the element
didn't exist the first time.

**Examples**:
```javascript
var el = browser.getElementById("signup-form")
el.querySelector("input[type=email]")
el.querySelector("input[type=email]", 500)
```

### WebElement.prototype.querySelectorAll(selector) <a name="WebElement.prototype.querySelectorAll"></a>
Returns a [Promise][Promise] of [`WebElement`][WebElement]s matching the
selector.

**Examples**:
```javascript
var el = browser.getElementById("signup-form")
el.querySelector("input[type=email]")
```

### WebElement.prototype.scrollIntoView([options]) <a name="WebElement.prototype.scrollIntoView"></a>
Calls the WebElement's DOM method `scrollIntoView`.  
Given options, passes them on to `scrollIntoView`.

**Examples**:
```javascript
var el = browser.getElementById("signup-form")
el.scrollIntoView()
el.scrollIntoView({block: "start"})
```
