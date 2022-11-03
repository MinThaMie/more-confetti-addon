# Use the default settings
```handlebars{data-execute=false}
{{confetti}}
```

# Use the custom options
- `interval` _Number (default: 2000)_: The time it will take for the confetti to fire again
- `continuous` _Boolean (default: true)_: The confitte will continue to pop when this is true.
- `originX` _Number (default:0.5)_: The x position on the page, with 0 being the left edge and 1 being the right edge. This is used to construct the `origin` object needed by the `canvas-confetti` API.
- `originY` _Number (default:0.5)_: The y position on the page, with 0 being the top edge and 1 being the bottom edge. This is used to construct the `origin` object needed by the `canvas-confetti` API.

```handlebars{data-execute=false}
{{confetti interval=10000}}
```

# [🎉 Use any of the standard APIs](https://www.npmjs.com/package/canvas-confetti)
`particleCount`, `angle`, `spread`, `startVelocity`, `decay`, `gravity`, `drift`, `ticks`, `colors`, `shapes`, `scalar`, `zIndex` &
`disableForReducedMotion` 
```handlebars{data-execute=false}
{{confetti gravity="0.2"}}
```
