var fs = require("fs");
var chalk = require('chalk');
var path = require('path');
var existsSync = fs.existsSync;
var readdirSync = fs.readdirSync;
var rmdirSync = fs.rmdirSync;
var unlinkSync = fs.unlinkSync;
var statSync = fs.statSync;
var validateProjectName = require('validate-npm-package-name');

function isCnFuc(language) {
	return language === "cn" ? true : false;
}

function emptyFs(path) {
	var files = [];
	var dir = [];
	if (existsSync(path)) {
		files = readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if (statSync(curPath).isDirectory()) {
				emptyFs(curPath);
			} else {
				unlinkSync(curPath);
			}
		});
		dir = readdirSync(path);
		dir.forEach(function(dirName, index) {
			rmdirSync(path + "/" + dirName);
		});
	}
}

/**
 * isSafeToCreateProjectIn function is created from `create-react-app`
 * which is on create-react-app/packages/create-react-app/createReactApp.js line 740 of version 2.0.4
 */
function isSafeToCreateProjectIn(root, name) {
	// These files should be allowed to remain on a failed install,
	// but then silently removed during the next create.
	const errorLogFilePatterns = [
		'npm-debug.log',
		'yarn-error.log',
		'yarn-debug.log',
	];

  const validFiles = [
    '.DS_Store',
    'Thumbs.db',
    '.git',
    '.gitignore',
    '.idea',
    'README.md',
    'LICENSE',
    'web.iml',
    '.hg',
    '.hgignore',
    '.hgcheck',
    '.npmignore',
    'mkdocs.yml',
    'docs',
    '.travis.yml',
    '.gitlab-ci.yml',
    '.gitattributes',
  ];
  console.log();

  const conflicts = fs
    .readdirSync(root)
    .filter(file => !validFiles.includes(file))
    // Don't treat log files from previous installation as conflicts
    .filter(
      file => !errorLogFilePatterns.some(pattern => file.indexOf(pattern) === 0)
    );

  if (conflicts.length > 0) {
    console.log(
      `The directory ${chalk.green(name)} contains files that could conflict:`
    );
    console.log();
    for (const file of conflicts) {
      console.log(`  ${file}`);
    }
    console.log();
    console.log(
      'Either try using a new directory name, or remove the files listed above.'
    );

    return false;
  }

  // Remove any remnant files from a previous installation
  const currentFiles = fs.readdirSync(path.join(root));
  currentFiles.forEach(file => {
    errorLogFilePatterns.forEach(errorLogFilePattern => {
      // This will catch `(npm-debug|yarn-error|yarn-debug).log*` files
      if (file.indexOf(errorLogFilePattern) === 0) {
        unlinkSync(path.join(root, file));
      }
    });
  });
  return true;
}

// validate an app(project) name
// - Nameing Rules: https://www.npmjs.com/package/validate-npm-package-name#naming-rules
// - Referenced: https://github.com/facebook/create-react-app/blob/master/packages/create-react-app/createReactApp.js#L664
function checkAppName(appName) {
  const validationResult = validateProjectName(appName);
  if (!validationResult.validForNewPackages) {
    console.error(
      `Could not create a project called ${chalk.red(
        `"${appName}"`
      )} because of npm naming restrictions: `
    );
    printValidationResults(validationResult.errors);
    printValidationResults(validationResult.warnings);
    process.exit(1);
  }

  function printValidationResults(results) {
    if (typeof results !== 'undefined') {
      results.forEach(error => {
        console.error(chalk.red(`  *  ${error}`));
      });
    }
  }
}

module.exports = {
	isCnFuc: isCnFuc,
	emptyFs: emptyFs,
  isSafeToCreateProjectIn: isSafeToCreateProjectIn,
  checkAppName: checkAppName
};
