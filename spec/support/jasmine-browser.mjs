export default {
  sourceDir: "./scripts",  // Source code directory (excluding test files)

  // Spec directory: This should only include your test files
  specDir: "./spec",       // Directory for spec files

  // Helper files (if any, you can add extra configuration helpers here)
  helpers: [
    "./spec/support/**/*.js"  // Adjusted to use the correct path for helpers
  ],

  // Specify the test files that will be run
  specFiles: [
    "./spec/**/*.spec.js"  // Match all spec files inside /spec folder
  ],

  // Source files directory
  srcFiles: [
    "./scripts/**/*.js",  // Include all JS files from your source folder
  ],

  srcDir: "scripts",  // REQUIRED: Directory for source files

  // Server settings (if needed for the browser to run Jasmine tests)
  listenAddress: "localhost", // Server address
  hostname: "localhost",      // Hostname for running the server

  // Specify the browser where the tests will be run
  browser: {
    name: "chrome" // Use Chrome to run the tests
  }
};


// export default {
//   sourceDir: "./scripts",  // Source code directory (excluding test files)
//
//   // Spec directory: This should only include your test files
//   specDir: "./spec",       // Directory for spec files
//
//   // Helper files (if any, you can add extra configuration helpers here)
//   helpers: [
//     "./spec/support/**/*.js"  // Adjusted to use the correct path for helpers, if any
//   ],          // Helpers for Jasmine, if any
//
//   // Specify the test files that will be run
//   specFiles: [
//     "./spec/utils/getDayAbbreviation.spec.js"
//     // "./spec/**/*.spec.js"  // Only match the spec files located in the /spec folder
//   ],
//
//   // Source files directory
//   srcFiles: [
//     "./scripts/**/*.js",  // Include all JS files from your source folder
//   ],
//
//   srcDir: "scripts",  // REQUIRED: Directory for source files
//
//   // Server settings (if needed for the browser to run Jasmine tests)
//   listenAddress: "localhost", // Server address
//   hostname: "localhost",      // Hostname for running the server
//
//   // Specify the browser where the tests will be run
//   browser: {
//     name: "chrome" // Use Chrome to run the tests
//   }
// };

// export default {
//   sourceDir: "../scripts", // Relative path to the source directory from the config location
//   specDir: "../scripts",   // Relative path to the spec directory
//   helpers: [
//     "../scripts/helpers/**/*.js" // Adjusted to match the helpers directory
//   ],
//   srcDir: "../scripts",      // Source directory for app files
//   srcFiles: [
//     "**/*.js"               // Source file patterns
//   ],
//   specFiles: [
//     "**/*.spec.js"          // Spec file patterns
//   ],
//   listenAddress: "localhost",
//   hostname: "localhost",
//
//   browser: {
//     name: "chrome"          // Run tests in Chrome browser
//   }
// };

// export default {
//   srcDir: "src",
//   srcFiles: [
//     "**/*.js"
//   ],
//   specDir: "spec",
//   specFiles: [
//     "**/*[sS]pec.js"
//   ],
//   helpers: [
//     "helpers/**/*.js"
//   ],
//   env: {
//     stopSpecOnExpectationFailure: false,
//     stopOnSpecFailure: false,
//     random: true
//   },
//
//   // For security, listen only to localhost. You can also specify a different
//   // hostname or IP address, or remove the property or set it to "*" to listen
//   // to all network interfaces.
//   listenAddress: "localhost",
//
//   // The hostname that the browser will use to connect to the server.
//   hostname: "localhost",
//
//   browser: {
//     name: "chrome"
//   }
// };
