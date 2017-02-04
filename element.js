var O = require("oolong")
var By = require("selenium-webdriver").By
var WebElementPromise = require("selenium-webdriver").WebElementPromise
var query = require("./query")

/**
 * The [`Selenium.WebElement`][WebElement] and
 * [`Selenium.WebElementPromise`][WebElementPromise] classes returned from
 * [`WebDriver.prototype.findElement`][findElement] and other funcitons will be
 * extended with a few methods found on the browser DOM's Document.
 *
 * [findElement]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#findElement
 * [getAttribute]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#getAttribute
 *
 * @example
 * var browser = new Selenium.Builder().build()
 *
 * var el = browser.getElementById("username")
 * el.then(function(el) { return el.value }) // => Promise of `<input>`'s value.
 *
 * @class WebElement
 */

/**
 * Returns a [`Promise`][Promise] of the element's value.  
 * Uses [`WebElement.prototype.getAttribute`][getAttribute] internally.
 *
 * @property value
 */
O.defineGetter(exports, "value", function() {
  return this.getAttribute("value")
})

/**
 * Returns a [`Promise`][Promise] of the element's classes as an array.  
 *
 * @property classList
 */
O.defineGetter(exports, "classList", function() {
  return this.getAttribute("class").then((klass) => klass.split(" "))
})

/**
 * Returns a [`Promise`][Promise] of the element's `textContent`.  
 *
 * @example
 * browser.body.textContent
 *
 * @property textContent
 */
O.defineGetter(exports, "textContent", function() {
	var script = "return arguments[0].textContent"
	return this.getDriver().executeScript(script, this)
})

/**
 * Returns a [`WebElementPromise`][WebElementPromise] of the element matching
 * the selector.  
 * Given a timeout, retries up to `timeout` milliseconds if the element
 * didn't exist the first time.
 *
 * @example
 * var el = browser.getElementById("signup-form")
 * el.querySelector("input[type=email]")
 * el.querySelector("input[type=email]", 500)
 *
 * @method querySelector
 * @param selector
 * @param [timeout]
 */
exports.querySelector = function(selector, timeout) {
	return query(this, By.css(selector), timeout)
}

/**
 * Returns a [Promise][Promise] of [`WebElement`][WebElement]s matching the
 * selector.
 *
 * @example
 * var el = browser.getElementById("signup-form")
 * el.querySelector("input[type=email]")
 *
 * @method querySelectorAll
 * @param selector
 */
exports.querySelectorAll = function(css) {
	return this.findElements({css: css})
}

/**
 * Returns a [`WebElementPromise`][WebElementPromise] of the closest parent
 * matching the selector. Throws if no parent matched.  
 *
 * @example
 * var el = browser.getElementById("signup-form")
 * el.closest("fieldset")
 *
 * @method closest
 * @param selector
 */
exports.closest = function(selector) {
  var el = this.getDriver().findElement(By.js(function(el, selector) {
    if (el.closest) return el.closest(selector)

    do { if (el.matches && el.matches(selector)) return el }
    while (el = el.parentNode)

    throw new Error("No closest element matching: " + selector)
  }, this, selector))

  return new WebElementPromise(this.getDriver(), el)
}

/**
 * Calls the WebElement's DOM method `scrollIntoView`.  
 * Given options, passes them on to `scrollIntoView`.
 *
 * @example
 * var el = browser.getElementById("signup-form")
 * el.scrollIntoView()
 * el.scrollIntoView({block: "start"})
 *
 * @method scrollIntoView
 * @param [options]
 */
exports.scrollIntoView = function(opts) {
  var script = "arguments[0].scrollIntoView(arguments[1])"
  return this.getDriver().executeScript(script, this, opts)
}
