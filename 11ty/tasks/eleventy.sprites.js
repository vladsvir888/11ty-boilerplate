const path = require('node:path');
const fs = require('node:fs');
const svgo = require('svgo');
const svgSprite = require('svg-sprite');
const Image = require('@11ty/eleventy-img');

module.exports = function (config) {
  // Vector images processing
  let svgSpriteMono = null;
  let svgSpriteMulti = null;

  config.addTemplateFormats('svg');

  config.addExtension('svg', {
    init: function () {
      svgSpriteMono = new svgSprite({
        shape: {
          id: {
            generator: function (name) {
              return path.parse(name).name;
            },
          },
        },
        mode: {
          stack: {
            dest: config.dir.output,
            sprite: 'assets/sprites/sprite-mono.svg',
          },
        },
      });

      svgSpriteMulti = new svgSprite({
        shape: {
          id: {
            generator: function (name) {
              return path.parse(name).name;
            },
          },
        },
        mode: {
          stack: {
            dest: config.dir.output,
            sprite: 'assets/sprites/sprite-multi.svg',
          },
        },
      });
    },

    compile: async function (inputContent, inputPath) {
      if (inputPath.includes('app/resources')) return;

      const parsed = path.parse(inputPath);

      if (inputPath.includes('app/icons/mono')) {
        inputContent = svgo.optimize(inputContent, {
          plugins: [
            'preset-default',
            {
              name: 'removeAttrs',
              params: {
                attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
              },
            },
          ],
        }).data;

        svgSpriteMono.add(inputPath, `${parsed.dir}/${parsed.base}`, inputContent);

        return;
      }

      if (inputPath.includes('app/icons/multi')) {
        inputContent = svgo.optimize(inputContent, {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeUselessStrokeAndFill: false,
                  inlineStyles: true,
                },
              },
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: ['class', 'data-name'],
              },
            },
          ],
        }).data;

        svgSpriteMulti.add(inputPath, `${parsed.dir}/${parsed.base}`, inputContent);

        return;
      }

      await Image(inputPath, {
        formats: ['svg'],
        outputDir: path.parse(inputPath).dir.replace('app', 'build/assets'),
        filenameFormat: function (id, src, width, format, options) {
          return `${path.parse(src).name}.${format}`;
        },
        statsOnly: false,
      });
    },

    compileOptions: {
      cache: false,
      permalink: function () {
        return false;
      },
    },
  });

  config.on('eleventy.after', async (event) => {
    svgSpriteMono?.compile((error, result, data) => {
      for (const mode of Object.values(result)) {
        for (const resource of Object.values(mode)) {
          fs.mkdirSync(path.dirname(resource.path), { recursive: true });
          fs.writeFileSync(resource.path, resource.contents);
        }
      }
    });

    svgSpriteMulti?.compile((error, result, data) => {
      for (const mode of Object.values(result)) {
        for (const resource of Object.values(mode)) {
          fs.mkdirSync(path.dirname(resource.path), { recursive: true });
          fs.writeFileSync(resource.path, resource.contents);
        }
      }
    });
  });
};
