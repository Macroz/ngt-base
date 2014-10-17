module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
    ]
  },

  vendor_files: {
    js: [
      'vendor/phaser-official/build/phaser.js',
      'vendor/lodash/dist/lodash.js',
      'vendor/ngt/ngt.js',
    ],
    css: [
    ],
    assets: [
    ]
  },
};
