var path = require('path');
var join = path.join;
var basename = path.basename;
var fs = require('fs');
var existsSync = fs.existsSync;
var chalk = require('chalk');
var emptyDir = require('empty-dir');
var info = require('./logger').info;
var error = require('./logger').error;
var success = require('./logger').success;
var isCnFun = require('./utils').isCnFuc;
var checkAppName = require('./utils').checkAppName;
var isSafeToCreateProjectIn = require('./utils').isSafeToCreateProjectIn;
var spawn = require('cross-spawn');

function init(args) {
	var omiCli = chalk.bold.cyan("Omi-Cli");
	var isCn = isCnFun(args.language);
  var customPrjName = args.project || '';
  var templateName = args.template || '';
	var dest = join(process.cwd(), customPrjName);
	var projectName = basename(dest);
  var mirror = args.mirror;
  
	console.log();
	console.log(omiCli + (!isCn ? ' is booting... ' : ' 正在启动...'));
	console.log(
		omiCli +
			(!isCn ? ' will execute init command... ' : ' 即将执行 init 命令...')
	);
	checkAppName(projectName);
	if (existsSync(dest) && !emptyDir.sync(dest)) {
		if (!isSafeToCreateProjectIn(dest, projectName)) {
			process.exit(1);
		}
	}
		
	createApp();

	function createApp() {
		console.log();
		console.log(
			chalk.bold.cyan('Omi-Cli') +
				(!isCn
					? ' will creating a new omi app in '
					: ' 即将创建一个新的应用在 ') +
				dest
    );
    
    console.log();

    // git clone a template from https://www.github.com/omijs/template-{templateName}
    const { status, error: cloneError }  = spawn.sync('git', ['clone', '--depth=1', `https://www.github.com/omijs/template-${templateName}`, customPrjName || '.']);

    // verify git clone succeed
    if (!cloneError && status === 0) {
      try {
          try {
            // remove .git
            const gitPath = join(dest, '.git');
            if (existsSync(gitPath)) {
              spawn.sync('rm', ['-rf', gitPath])
            }

            // change a package name as a project name if package.json exist
            if (existsSync(join(dest, 'package.json'))) {
              var appPackage = require(join(dest, 'package.json'));
              appPackage.name = projectName;
              fs.writeFile(join(dest, 'package.json'), JSON.stringify(appPackage, null, 2), (err) => {
                if (err) return console.log(err);
              });

              process.chdir(customPrjName || '.');

              // install ndoe package modules
              info(
                'Install',
                'We will install dependencies, if you refuse, press ctrl+c to abort, and install dependencies by yourself. :>'
              );
              console.log();
              require('./install')(mirror, done); // npm install
            }
          } catch (e) {
            console.log(error(e));
          }
      } catch (e) {
        console.log(error(e));
      }
    } else {
      // if incorrect template name
      error(`${templateName} is an ineixst template.
Please check on https://github.com/omijs
`);
    }
	}

  // NOTE - to edit as template paragraph.
	function done() {
		console.log();
		console.log();
		console.log();
		success(`Congratulation! "${projectName}" has been created successful! `);
		console.log(`

Using the scaffold with Gulp + Webpack + Babel + BrowserSync,

if you are not in ${projectName}, please run 'cd ${projectName}', then you can:

    > ${chalk.bold.white("npm run dev")}         Starts the development server
    > ${chalk.bold.white("npm run dist")}        Publish your project`);
		console.log();
		console.log(`${chalk.bold.cyan("Omi!")} https://alloyteam.github.io/omi`);
	}
}

module.exports = init;
