# Character count

This is a prototype. We don't recommend using it in production.

## Introduction

Character count is a component that:
* helps users provide information in a limited number of characters
* tells users how many characters they have remaining by counting down as they type
* provides feedback for assistive technology so that all users are aware of the character limit
* shows the number of remaining words or characters

This component will be part of the [govuk-frontend](https://github.com/alphagov/govuk-frontend), a single package containing everything needed to start building a GOV.UK service.

### Demo

- [Character count](https://govuk-charcount-prototype.herokuapp.com/components/char-count)
- [Word count](https://govuk-charcount-prototype.herokuapp.com/components/word-count)
- [Character count with threshold](https://govuk-charcount-prototype.herokuapp.com/components/char-count-threshold)
- [Character count with highlight](https://govuk-charcount-prototype.herokuapp.com/components/char-count-highlight)

[Screenshot]

## Guidance

* [link to Design System]
* [contribution guidelines](https://github.com/alphagov/ds-character-count/blob/master/CONTRIBUTING.md)

## Requirements
This component prototype has been built using [govuk_prototype_kit](https://github.com/alphagov/govuk_prototype_kit).

Dependencies:
* [alphagov/govuk-elements-sass](https://github.com/alphagov/govuk_elements)

## Installation
* For using the component in your service download [char-count.js](https://raw.githubusercontent.com/alphagov/ds-character-count/master/app/assets/javascripts/char-count.js) and [character-count.scss](https://raw.githubusercontent.com/alphagov/temporary-event-notice-prototype/master/app/assets/sass/patterns/character-count.scss), place them in your project's assets folder then follow the [usage instructions](#usage) below.
* For testing the component prototype on your local machine follow the [govuk_prototype_kit installation instructions](https://govuk-prototype-kit.herokuapp.com/docs/install/developer-install-instructions)

## Usage
1. Set the ``maxlength`` attribute and add a *javascript handler* class or id (e.g. ``.js-char-count``). Note that the textarea **must** have an ``id`` attribute set to a unique value within the page.
```html
<textarea id="description-field" class="form-control js-char-count" rows="5" maxlength="500"></textarea>
```

2. Enhance the textarea by initialising a `charCount` instance on the specified handler (e.g. ``.js-char-count``)
```js
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-char-count'
})
```

## Variants

### Word count
1. Since there is no *maxwords* attribute in HTML5, use ``data-maxwords`` attribute to set the maximum number of words and add a *javascript handler* class (e.g. ``.js-word-count``). Note that the textarea **must** have an ``id`` attribute set to a unique value within the page.
```html
<input id="name-field" class="form-control js-word-count" type="text" data-maxwords="10">
```
```html
<textarea id="description-field" class="form-control js-word-count" rows="5" data-maxwords="30"></textarea>
```
2. Enhance the textarea by initialising a `charCount` instance on the specified handler (e.g. ``.js-word-count``) to display word count. For initialising the *Word Count* you must add ``wordCount: true`` to the options of the ``init`` function.
```js
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-word-count',
  wordCount: true
})
```

### Character count with threshold
You can display the count message when the users are at 50% or more setting a percentage value as ``threshold``.
```js
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-char-count',
  wordCount: true,
  threshold: 50
})
```

### Character count with highlight
You can also visually highlight the characters which have taken users over the limit by setting the ``highlight`` option to `true`. This can make it easier for some users to see how far over they are and edit their content to fit. However, for some lower confidence, it can cause confusion.

```js
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-char-count',
  highlight: true
})
```

## Accessibility
The [acceptance criteria](https://github.com/alphagov/ds-character-count/blob/master/accessibility-criteria.md) describes the necessary behaviours a character count needs to meet to be usable by assistive technologies.
