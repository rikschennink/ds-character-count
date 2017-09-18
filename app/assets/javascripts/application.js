/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  // Character/Word Count
  var charCount = new GOVUK.CharCount()
  charCount.init({
    selector: 'js-char-count'
  })
  charCount.init({
    selector: 'js-word-count',
    wordCount: true
  })
  charCount.init({
    selector: 'js-char-count-threshold',
    threshold: 50
  })
  charCount.init({
    selector: 'js-char-count-highlight',
    highlight: true
  })
  charCount.init({
    selector: 'js-char-count-highlight-default-border',
    highlight: true,
    defaultBorder: true
  })

})
