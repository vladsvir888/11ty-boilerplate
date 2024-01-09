const path = require('node:path');
const Image = require('@11ty/eleventy-img');

module.exports = function (config) {
  config.addTemplateFormats(['jpg', 'jpeg', 'png', 'svg']);

  config.addExtension(['jpg', 'jpeg', 'png', 'svg'], {
    read: false,

    compile: async function (inputContent, inputPath) {
      if (inputPath.includes('app/_resources')) return;

      const parsed = path.parse(inputPath);

      if (parsed.ext !== '.svg') {
        await Image(inputPath, {
          width: ['auto'],
          formats: ['auto', 'webp'],
          outputDir: parsed.dir.replace('app/_images', 'build/assets/images'),
          filenameFormat: function (id, src, width, format, options) {
            format = format === 'jpeg' ? 'jpg' : format;

            return `${path.parse(src).name}.${format}`;
          },
          statsOnly: false,
        });
      } else {
        await Image(inputPath, {
          formats: ['svg'],
          outputDir: path.parse(inputPath).dir.replace('app/_images', 'build/assets/images'),
          filenameFormat: function (id, src, width, format, options) {
            return `${path.parse(src).name}.${format}`;
          },
          statsOnly: false,
        });
      }
    },

    compileOptions: {
      cache: false,
      permalink: function () {
        return false;
      },
    },
  });
};
