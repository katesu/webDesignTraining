const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/**/_*`,
      `!${srcPath}/assets/images/**/*[.jpg|.jpeg|.png|.svg]`,
      `!${srcPath}/assets/js/**/*`,
      `!${srcPath}/assets/style/**/*`,
      `!${srcPath}/**/*[.pug|.html]`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
      `!${srcPath}/**/_*.html`,
    ],
    pugSrc: [
      `${srcPath}/**/*.pug`,
      `!${srcPath}/**/_*.pug`,
      `!${srcPath}/assets/**/_*/*.pug`,
    ],
    watchSrc: [
      `${srcPath}/**/*[.pug|.html]`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*[.scss|.sass]`,
      `!${srcPath}/assets/style/**/_*/*[.scss|.sass]`,
      `!${srcPath}/assets/style/**/_*[.scss|.sass]`,
    ],
    watchSrc: [
      `${srcPath}/assets/style/**/*[.scss|.sass]`,
    ],
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      // `${nodePath}/bootstrap/dist/**/bootstrap.min.js`
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*[.jpg|.jpeg|.png|.svg]`,
    ],
    path: [
      `${distPath}/assets/images/`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
