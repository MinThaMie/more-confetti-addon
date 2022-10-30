# More-Ember-Confetti Add-on

This add-on provides you with an Ember helper that implements the [canvas-confetti package](https://www.npmjs.com/package/canvas-confetti). So you can call the `confetti`-helper in your template and pass along any attributes specified in the API.

## Installing the add-on

You install this add-on like any other.
```sh
ember install more-ember-confetti
```

## Custom API options

- `interval` _Number (default: 2000)_: The time it will take for the confetti to fire again
- `continuous` _Boolean (default: true)_: The confitte will continue to pop when this is true.
- `originX` _Number (default:0.5)_: The x position on the page, with 0 being the left edge and 1 being the right edge. This is used to construct the `origin` object needed by the `canvas-confetti` API.
- `originY` _Number (default:0.5)_: The y position on the page, with 0 being the top edge and 1 being the bottom edge. This is used to construct the `origin` object needed by the `canvas-confetti` API.

## Contributing to the add-on

If you want to contribute to this project or run into a bug, please reach out on [GitHub](https://github.com/minthamie/more-ember-confetti) or find me on the [EmberJS discord](https://discord.com/channels/480462759797063690/480462759797063692).
