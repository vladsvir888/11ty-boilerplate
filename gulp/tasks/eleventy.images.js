const path = require('node:path');
const Image = require('@11ty/eleventy-img');

module.exports = function(config) {
	config.addTemplateFormats(['jpg', 'jpeg', 'png']);

	config.addExtension(['jpg', 'jpeg', 'png'], {
		read: false,

		compile: async function(inputContent, inputPath) {
			if (inputPath.includes('app/resources')) return;

			const parsed = path.parse(inputPath);

			await Image(inputPath, {
				width: ['auto'],
				formats: ['auto', 'webp'],
				outputDir: parsed.dir.replace('app', 'build/assets'),
				filenameFormat: function (id, src, width, format, options) {
					format = format === 'jpeg' ? 'jpg' : format;

					return `${path.parse(src).name}.${format}`;
				},
				statsOnly: false,
			});
		},

		compileOptions: {
			cache: false
		}
	});
}