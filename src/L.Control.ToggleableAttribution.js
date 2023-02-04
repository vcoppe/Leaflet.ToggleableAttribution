L.Control.ToggleableAttribution = L.Control.Attribution.extend({
    options: {
        icon: 'i',
    },
    _update() {
        L.Control.Attribution.prototype._update.call(this); // use update method from parent class
        this._container.innerHTML = `<div class="leaflet-control-attribution-body">${this._container.innerHTML}</div><div class="leaflet-control-attribution-icon">${this.options.icon}</div>`;
    }
});

L.Map.mergeOptions({
	attributionControl: false, // override native attribution control
    toggleableAttributionControl: true,
});

L.Map.addInitHook(function () {
	if (this.options.toggleableAttributionControl) {
		new L.Control.ToggleableAttribution().addTo(this);
	}
});

L.control.toggleableAttribution = function (options) {
	return new L.Control.ToggleableAttribution(options);
};
