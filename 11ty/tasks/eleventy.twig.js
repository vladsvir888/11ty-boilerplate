const path = require('node:path');
const TwigDeps = require('twig-deps');
const { TwingEnvironment, TwingLoaderRelativeFilesystem } = require('twing');

module.exports = function (eleventy, options = {}) {
  const loader = new TwingLoaderRelativeFilesystem();

  eleventy.addTemplateFormats('twig');

  eleventy.addExtension('twig', {
    compileOptions: {
      permalink: function (inputContent, inputPath) {
        const parsed = path.parse(inputPath);

        return () => {
          return `${parsed.name}.html`;
        };
      },
    },

    compile: async function (inputContent, inputPath) {
      // Twing
      const twing = new TwingEnvironment(loader, {
        // cache: '.twing_cache',
        cache: false,
        auto_reload: true,
        autoescape: false,
      });

      const depper = new TwigDeps();
      const dependencies = [];

      depper.on('data', function (dependency) {
        if (dependency !== inputPath) {
          dependencies.push(dependency.replaceAll('\\', '/'));
        }
      });

      depper.end(inputPath);

      this.addDependencies(inputPath, dependencies);

      return async (data) => {
        return await twing.render(inputPath, data);
      };
    },
  });
};
