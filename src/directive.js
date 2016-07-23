function Directive(descriptor, vm, el) {
	this.vm = vm
	this.el = el
	this.descriptor = descriptor
	this.name = descriptor.name
}

Directive.prototype._bind = function () {
	var name = this.name
	var descriptor = this.descriptor

	if (this.el && this.el.removeAttribute) {
		this.el.removeAttribute(attr)
	}
	
	var def = descriptor.def
	this.update = def.update
	this.bind = def.bind

	if (this.bind) this.bind()

	this._update = function (val) {
		this.update(val)
	}.bind(this)

	var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update)
	if (this.update) this.update(watcher.value)
}

Directive.prototype.set = function (value) {
	this._watcher.set(value)
}

Directive.prototype.on = function (event, handler) {
	this.el.addEventHandler(event, handler)
}