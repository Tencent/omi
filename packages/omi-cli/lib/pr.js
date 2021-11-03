var fs = require("fs");
var chalk = require("chalk");
var join = require("path").join;
var existsSync = fs.existsSync;

function pr() {
	var currentDir = process.cwd();
	var srcPath = join(currentDir, "src");

	if (existsSync(srcPath)) {
		var build = require("./omi-pr/build");
		console.log();
		console.log(chalk.bold.cyan("Omi-Cli") + " is readying compiling...");
		console.log();

		build(currentDir);
	} else {
		console.log(chalk.bold.red("-------------------------------------------"));
		console.log(chalk.bold.red("---------------- Path Error ---------------"));
		console.log(chalk.bold.red("-------------------------------------------"));
		process.exit(1);
	}
}

module.exports = pr;
