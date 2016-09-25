var WebElement = require("selenium-webdriver").WebElement
var WebElementPromise = require("selenium-webdriver").WebElementPromise
module.exports = query

// Timeout makes sense only for single element queries, hence the singular
// findElement cal.
function query(el, locator, timeout) {
  if (timeout == null) return el.findElement(locator)

  var browser = el instanceof WebElement ? el.getDriver() : el
  el = browser.wait(locate.bind(null, el, locator), timeout)
  return new WebElementPromise(browser, el)
}

function locate(el, locator) {
  return el.findElement(locator).then(null, function(err) {
    if (isElementNotPresentError(err)) return null
    throw err
  })
}

function isElementNotPresentError(err) {
  // The "Not a WebElement" error is a plain TypeError.
  if (err.message == "Custom locator did not return a WebElement") return true
  if (err.name == "NoSuchElementError") return true
  if (err.name == "StaleElementReferenceError") return true
	return false
}
