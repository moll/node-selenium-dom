var Element = require("./element")
var Document = require("./document")

/**
 * @module SeleniumDom
 */

/**
 * Extends the given Selenium module's [`WebDriver`][WebDriver] and
 * [`WebElement`][WebElement] classes with DOM methods.
 *
 * [Promise]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise_exports_Promise.html
 * [WebDriver]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html
 * [WebElement]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html
 * [WebElementPromise]: https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElementPromise.html
 *
 * @example
 * var Selenium = require("selenium-webdriver")
 * require("selenium-dom")(Selenium)
 *
 * var browser = new Selenium.Builder().build()
 * browser.body // => WebElementPromise of `<body>`.
 *
 * @static
 * @class SeleniumDom
 * @param Selenium {Object} Selenium
 */
module.exports = function(Selenium) {
	copy(Document, Selenium.WebDriver.prototype)
	copy(Element, Selenium.WebElement.prototype)
	return Selenium
}

function copy(source, target) {
	return Object.defineProperties(target, getOwnPropertyDescriptors(source))
}

function getOwnPropertyDescriptors(obj) {
	return map(obj, Object.getOwnPropertyDescriptor.bind(null, obj))
}

function map(obj, fn, context) {
	var result = {}
	for (var key in obj) result[key] = fn.call(context, key, obj)
	return result
}
