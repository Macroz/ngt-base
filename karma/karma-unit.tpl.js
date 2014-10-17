module.exports = function (karma) {
  karma.set({
    basePath: '../',

    files: [
      <% scripts.forEach(function (file) { %>'<%= file %>',
      <% }); %>
      'src/**/*.js',
      'src/**/*.coffee',
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-firefox-launcher', 'karma-coffee-preprocessor'],
    preprocessors: {
      '**/*.coffee': 'coffee',
    },

    reporters: 'dots',
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',
    autoWatch: false,
    browsers: [
      'Firefox'
    ]
  });
};
