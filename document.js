var O = require("oolong")
var By = require("selenium-webdriver").By
var Element = require("./element")
var query = require("./query")

/**
 * The [`Selenium.WebDriver`][WebDriver] class returned from `Selenium.Builder`
 * will be extended with a few properties and methods found on the browser
 * DOM's Document.
 *
 * @example
 * var browser = new Selenium.Builder().build()
 * browser.body // => WebElementPromise of `<body>`.
 *
 * @class WebDriver
 */

/**
 * Returns a [`WebElementPromise`][WebElementPromise] of `<body>`.
 *
 * @property body
 */
O.defineGetter(exports, "body", function() {
  return this.querySelector("body")
})

/**
 * Returns a [`WebElementPromise`][WebElementPromise] of the element matching
 * the selector.  
 * Given a timeout, retries up to `timeout` milliseconds if the element
 * didn't exist the first time.
 *
 * @example
 * browser.querySelector("li.event")
 * browser.querySelector("li.event", 500)
 *
 * @method querySelector
 * @param selector
 * @param [timeout]
 */
exports.querySelector = Element.querySelector

/**
 * Returns a [Promise][Promise] of [`WebElement`][WebElement]s matching the
 * selector.
 *
 * @example
 * browser.querySelectorAll("li.events")
 *
 * @method querySelectorAll
 * @param selector
 */
exports.querySelectorAll = Element.querySelectorAll

/**
 * Returns a [`WebElementPromise`][WebElementPromise] of the element with the
 * given id.  
 * Given a timeout, retries up to `timeout` milliseconds if the element
 * didn't exist the first time.
 *
 * @example
 * browser.getElementById("signup-form")
 * browser.getElementById("signup-form", 500)
 *
 * @method getElementById
 * @param selector
 * @param [timeout]
 */
exports.getElementById = function(id, timeout) {
	return query(this, By.id(id), timeout)
}

/**
 * Returns a [`WebElementPromise`][WebElementPromise] of the element under the coordinates `x` and `y`.  
 * Uses `document.elementFromPoint` internally.
 *
 * Given negative coordinates, looks for the element from the right and bottom
 * edges.
 *
 * @example
 * browser.elementFromPoint(100, 150)
 * browser.elementFromPoint(-1, 10)
 *
 * @method elementFromPoint
 * @param x
 * @param y
 */
exports.elementFromPoint = function(x, y) {
  return this.findElement(By.js(function(x, y) {
    if (x < 0) x = window.innerWidth + x
    if (y < 0) y = window.innerHeight + y
    return document.elementFromPoint(x, y)
  }, x, y))
}
