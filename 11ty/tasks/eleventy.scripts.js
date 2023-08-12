const path = require('node:path');
const esbuild = require('esbuild');
const DependencyTree = require("@11ty/dependency-tree");

module.exports = function (config) {
  const isProd = process.env.ELEVENTY_RUN_MODE === 'build';

  config.addTemplateFormats('js');

  config.addExtension('js', {
    outputFileExtension: 'js',

    compileOptions: {
      permalink: function (inputContent, inputPath) {
        const resolvedInputPath = path.resolve(inputPath);
        const resolvedScriptPath = path.resolve(path.join('./', config.dir.input, 'scripts/index.js'));

        if (resolvedInputPath !== resolvedScriptPath) return;

        return 'scripts/main.js';
      },

      cache: false,
    },

    compile: async function (inputContent, inputPath) {
      const resolvedInputPath = path.resolve(inputPath);
      const resolvedScriptPath = path.resolve(path.join('./', config.dir.input, 'scripts/index.js'));

      if (resolvedInputPath !== resolvedScriptPath) return;

      const esbuildCompiledResult = await esbuild.build({
        entryPoints: [inputPath],
        target: 'es2020',
        minify: isProd,
        bundle: true,
        write: false,
      });

      return async (data) => {
        return esbuildCompiledResult.outputFiles[0].text;
      };
    },
  });
};
