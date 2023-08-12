import twing from 'gulp-twing';
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';
import htmlbeautify from 'gulp-html-beautify';
import {
  config, src, dest, watch,
} from '../config';

const env = () => new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
  {
    cache: false,
    autoescape: false,
  },
);

export const twigBuild = () => (
  src(config.app.templates)
    .pipe(twing(env()))
    .pipe(htmlbeautify({
      indent_with_tabs: false,
      indent_size: 2,
      max_preserve_newlines: 0,
    }))
    .pipe(dest(config.build.templates))
);

export const twigWatch = () => watch([config.watch.templates], twigBuild);
