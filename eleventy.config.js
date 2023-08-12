const twigPlugin = require('./gulp/tasks/eleventy.twig');
const resourcesPlugin = require('./gulp/tasks/eleventy.resources');
const stylesPlugin = require('./gulp/tasks/eleventy.styles');
const scriptsPlugin = require('./gulp/tasks/eleventy.scripts');
const imagesPlugin = require('./gulp/tasks/eleventy.images');
const spritesPlugin = require('./gulp/tasks/eleventy.sprites');

module.exports = function(config) {

	config.addPlugin(twigPlugin);
	config.addPlugin(resourcesPlugin);
	config.addPlugin(stylesPlugin);
	config.addPlugin(scriptsPlugin);
	config.addPlugin(imagesPlugin);
	config.addPlugin(spritesPlugin);

  config.addWatchTarget("./app/blocks/**/*.twig")

	return {
		// templateFormats: ['twig'],
		dir: {
			input: 'app',
			includes: 'blocks',
			layouts: 'blocks/layout',
			output: 'build'
		}
	}
}