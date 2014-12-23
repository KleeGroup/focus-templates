/**
 * Configuration file.
 * @type {object}
 */
var config = require('./config.json');

/**
 * Get the current ocnfiguration for tags.
 * @return {object} - the current configuration for tags.
 */
var getConfiguration = function getConfiguration(){
	return config;
};

/**
 * configure options for all focus tags.
 * @param  {object} options list of custom options for focus tags
 */
var configure = function configure(options){
	_.extend(config, options);
};

module.exports = {
	getConfiguration : getConfiguration,
	configure : configure
};