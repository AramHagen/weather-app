export default {
  sourceDir: './scripts', // Source code directory

  specDir: './spec', // Directory for spec files

  // Helper files (adjust paths to match actual locations)
  helpers: [
    './spec/support/**/*.mjs', // Change extension to `.mjs` if applicable
    './spec/support/**/*.js', // Match all helper JavaScript files
  ],

  // Specify the test files that will be run
  specFiles: [
    '**/*.spec.js', // Match all spec files relative to the `specDir`
  ],

  // Source files directory
  srcFiles: [
    '**/*.js', // Match all JavaScript files in `sourceDir`
  ],

  srcDir: 'scripts', // Directory for source files

  // Server settings (if needed for the browser to run Jasmine tests)
  listenAddress: 'localhost',
  hostname: 'localhost',

  // Specify the browser where the tests will be run
  browser: {
    name: 'chrome',
  },
};
