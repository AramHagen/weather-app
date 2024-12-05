export default {
  spec_dir: ["spec", "scripts"],  // Ensures scripts directory is included
  spec_files: [
    "**/*[sS]pec.?(m)js",  // Ensures any spec file in these directories is matched
    "spec/**/*[sS]pec.?(m)js",
    "scripts/**/*[sS]pec.?(m)js"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
