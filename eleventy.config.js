const resourcesPlugin = require('./11ty/tasks/eleventy.resources');
const stylesPlugin = require('./11ty/tasks/eleventy.styles');
const scriptsPlugin = require('./11ty/tasks/eleventy.scripts');
const imagesPlugin = require('./11ty/tasks/eleventy.images');
const spritesPlugin = require('./11ty/tasks/eleventy.sprites');
const webcPlugin = require('@11ty/eleventy-plugin-webc');
const beautify = require('js-beautify').html;

module.exports = function (config) {
  config.addPlugin(resourcesPlugin);
  config.addPlugin(stylesPlugin);
  config.addPlugin(scriptsPlugin);
  config.addPlugin(imagesPlugin);
  config.addPlugin(spritesPlugin);

  config.addPlugin(webcPlugin, {
    components: 'app/blocks/**/*.webc',
  });

  config.addTransform('beautify', async function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
      const minified = beautify(content, {
        indent_with_tabs: false,
        indent_size: 2,
        max_preserve_newlines: 0,
      });

      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'app',
      includes: 'blocks',
      layouts: 'blocks/layout',
      data: 'data',
      output: 'build',
    },
  };
};
