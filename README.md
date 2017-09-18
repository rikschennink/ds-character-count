# Character / Word Count

## About the component

A character/word count limit that counts down as users type in to a field. If the user goes over the limit, it counts up.

## Demo

- [Character count prototype](https://govuk-charcount-prototype.herokuapp.com/components/char-count)
- [Word count prototype](https://govuk-charcount-prototype.herokuapp.com/components/word-count)
- [Char count prototype with threshold](https://govuk-charcount-prototype.herokuapp.com/components/char-count-threshold)
- [Char count prototype with highlight](https://govuk-charcount-prototype.herokuapp.com/components/char-count-highlight)


## Usage
### Character Count
#### HTML
Define the fields with a ``maxlength`` attribute and add a *javascript handler* class (e.g. ``js-char-count``). The field **must** have an ``id`` attribute set to a unique value.

```
<input id="name-field" class="form-control js-char-count" type="text" aria-required="true" maxlength="20">
```

```
<textarea id="description-field" class="form-control js-char-count" rows="5" aria-required="true" maxlength="500"></textarea>
```

#### JavaScript
Extend the fields that have a specific class (e.g. ``js-char-count``) to display character count
```
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-char-count'
})
```

### Word Count
#### HTML
Since there is no *maxwords* attribute in HTML5, define the fields with a ``data-maxwords`` attribute and add a *javascript handler* class (e.g. ``js-word-count``). The field **must** have an ``id`` attribute set to a unique value.

```
<input id="name-field" class="form-control js-word-count" type="text" aria-required="true" data-maxwords="10">
```

```
<textarea id="description-field" class="form-control js-word-count" rows="5" aria-required="true" data-maxwords="30"></textarea>
```

#### JavaScript
Extend the fields with a specific class (e.g. ``js-word-count``) to display word count. For initialising the *Word Count* you must add the ``wordCount: true`` to the options of the ``init`` function.
```
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-word-count',
  wordCount: true
})
```

## Options
You can display the count message when the users are at 50% or more setting a percentage value as ``threshold``
```
var charCount = new GOVUK.CharCount()
charCount.init({
  selector: '.js-word-count',
  wordCount: true,
  threshold: 50
})
```
