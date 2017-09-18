# Accessibility Acceptance Criteria

## What's this?

This describes the necessary behaviours that an character counter needs to meet to be usable by assistive technologies.

They are useful if you are evaluating `char-counter`, or a different character counter solution.

## User story

> As an Assistive Technology (AT) user, I want to know if there are limits to fields and how close I am to the limit, so that I can provide appropriate content.

## Acceptance criteria

The field with autocomplete must:

1. Be focusable with a keyboard
1. Indicate when it has keyboard focus
1. Inform the user that it is an editable field
1. Inform the user if there is a pre-filled value
1. Inform the user about the character limit
1. Inform the user as the number of left characters changes
