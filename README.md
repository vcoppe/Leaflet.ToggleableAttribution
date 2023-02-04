# Leaflet.ToggleableAttribution
Minimalist Leaflet plugin to display the map attribution only when hovered on.

Check the [demo](https://vcoppe.github.io/Leaflet.ToggleableAttribution/)!

## Requirements

Developed with Leaflet 1.9.3 but so simple it probably works with other versions too.

## Usage

Simply add the two files from the `src` folder to your project like below.

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet-toggleable-attribution@0.0.1/src/L.Control.ToggleableAttribution.css"/>
<script src="https://unpkg.com/leaflet-toggleable-attribution@0.0.1/src/L.Control.ToggleableAttribution.js"></script>
```

## Reference

The `ToggleableAttribution` control is automatically added to the map with default settings.

If you want to use a custom icon for the control, you need to:
1. Create the map with the `toggleableAttributionControl` option set to `false` to avoid creating the control automatically.
1. Create the `ToggleableAttribution` control with its constructor `L.control.toggleableAttribution(options)`.

The options are the following:
Option | Type | Default | Description
--- | --- | --- | ---
`icon` | `String` | `i` | HTML code for the icon shown when the attribution control is toggled off.
`prefix` | `String` or `false` | `'Leaflet'` | *Inherited from L.Control.Attribution.* The HTML text shown before the attributions. Pass false to disable.
`position` | `String` | `'topright'` | *Inherited from L.Control.* The position of the control (one of the map corners). Possible values are `'topleft'`, `'topright'`, `'bottomleft'` or `'bottomright`.'

## Example

The example below adds a `ToggleableAttribution` control with an icon from [Font Awesome](https://fontawesome.com/).
```javascript
var map = L.map('map', {
    toggleableAttributionControl: false // do not add the control automatically
}).setView([51.505, -0.09], 13);

L.control.toggleableAttribution({ // add the control with custom options
    icon: '<i class="fa-solid fa-circle-info"></i>'
}).addTo(map);
```
This code is used in the [demo](https://vcoppe.github.io/Leaflet.ToggleableAttribution/).

## Styling

The icon can be styled by adding CSS rules to the `leaflet-control-attribution-icon` class.
The attribution control itself can be styled by adding CSS rules to the `leaflet-control-attribution` class.
