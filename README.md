More Ember Confetti
==============================================================================

This addon provides you with an Ember helper that implements the [canvas-confetti package](https://www.npmjs.com/package/canvas-confetti). So you can call the `confetti`-helper in your template and pass along any attributes specified in the API.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install more-ember-confetti
```


Usage
------------------------------------------------------------------------------

You can use this helper like you would with any other EmberJS helper. 

```handlebars
{{confetti}}
```

## Use the custom options
- `interval` _Number (default: 2000)_: The time it will take for the confetti to fire again
- `continuous` _Boolean (default: true)_: The confitte will continue to pop when this is true.
- `originX` _Number (default:0.5)_: The x position on the page, with 0 being the left edge and 1 being the right edge. This is used to construct the `origin` object needed by the `canvas-confetti` API.
- `originY` _Number (default:0.5)_: The y position on the page, with 0 being the top edge and 1 being the bottom edge. This is used to construct the `origin` object needed by the `canvas-confetti` API.

## [🎉 Use any of the standard APIs](https://www.npmjs.com/package/canvas-confetti)
`particleCount`, `angle`, `spread`, `startVelocity`, `decay`, `gravity`, `drift`, `ticks`, `colors`, `shapes`, `scalar`, `zIndex` &
`disableForReducedMotion` 



Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
