global._ = window._;
window.focus = window.focus || {};

window.focus.templates = {
	conf : require("./config"),
	tags : require("./tags")
};