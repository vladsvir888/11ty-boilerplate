const path = require('node:path');
const sass = require('sass');
const sassGlobImporter = require('node-sass-glob-importer');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sortMedia = require('postcss-sort-media-queries');

module.exports = function (eleventy, options = {}) {
  const isProd = process.env.ELEVENTY_RUN_MODE === 'build';

  eleventy.addTemplateFormats('scss');

  eleventy.addExtension('scss', {
    outputFileExtension: 'css',

    compileOptions: {
      cache: false, // todo: fix problem without cache: false
      permalink: function (contents, inputPath) {
        const parsed = path.parse(inputPath);

        return () => {
          return `/styles/${parsed.name}.css`;
        };
      },
    },

    compile: async function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);

      if (parsed.name !== 'main') return;

      const sassCompileResult = sass.renderSync({
        file: inputPath,
        loadPaths: [parsed.dir || '.', 'node_modules'],
        importer: sassGlobImporter(),
      });

      this.addDependencies(inputPath, sassCompileResult.stats.includedFiles);

      let css = sassCompileResult.css;

      const postcssPlugins = [sortMedia];

      if (isProd) {
        postcssPlugins.push(autoprefixer);
        postcssPlugins.push(cssnano);
      }

      const postcssCompileResult = await postcss(postcssPlugins).process(css, { from: inputPath });

      return async () => {
        return postcssCompileResult.css;
      };
    },
  });
};
