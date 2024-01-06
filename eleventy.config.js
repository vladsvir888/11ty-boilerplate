const resourcesPlugin = require('./11ty/tasks/eleventy.resources');
const stylesPlugin = require('./11ty/tasks/eleventy.styles');
const scriptsPlugin = require('./11ty/tasks/eleventy.scripts');
const imagesPlugin = require('./11ty/tasks/eleventy.images');
const webcPlugin = require('@11ty/eleventy-plugin-webc');
const { eleventyImagePlugin } = require('@11ty/eleventy-img');
const beautify = require('js-beautify').html;

module.exports = function (config) {
  const isProd = process.env.ELEVENTY_RUN_MODE === 'build';

  config.setServerOptions({
    domDiff: false,
    showAllHosts: true,
  });

  config.addPlugin(resourcesPlugin);
  config.addPlugin(stylesPlugin);
  config.addPlugin(scriptsPlugin);
  config.addPlugin(imagesPlugin);
  config.addPlugin(webcPlugin, {
    components: ['app/_blocks/**/*.webc', 'npm:@11ty/eleventy-img/*.webc'],
  });
  config.addPlugin(eleventyImagePlugin, {
    formats: ['auto', 'webp'],
    urlPath: './assets/images/',
    outputDir: './build/assets/images/',
  });

  if (isProd) {
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
  }

  return {
    dir: {
      input: 'app',
      includes: '_blocks',
      layouts: '_blocks/layout',
      output: 'build',
    },
  };
};
