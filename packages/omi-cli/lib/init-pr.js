var path = require("path");
var join = path.join;
var basename = path.basename;
var vfs = require("vinyl-fs");
var existsSync = require("fs").existsSync;
var chalk = require("chalk");
var through = require("through2");
var emptyDir = require("empty-dir");
var logger = require("./logger");
var info = logger.info;
var error = logger.error;
var success = logger.success;
var isCnFun = require("./utils").isCnFuc;
var emptyFs = require("./utils").emptyFs;

function initPr(args) {
	var omiCli = chalk.bold.cyan("Omi-Cli");
	var isCn = isCnFun(args.language);
	var customPrjName = args.project || "";
	var tpl = join(__dirname, "../template/pr");
	var dest = join(process.cwd(), customPrjName);
	var projectName = basename(dest);
	var mirror = args.mirror;

	console.log();
	console.log(omiCli + (!isCn ? " is booting... " : " 正在启动..."));
	console.log(
		omiCli +
			(!isCn
				? " will execute init-pr command... "
				: " 即将执行 init-pr 命令...")
	);

	if (existsSync(dest) && !emptyDir.sync(dest)) {
		console.log();
		process.stdout.write(
			!isCn
				? "This directory isn't empty, empty it? [Y/N] "
				: "此文件夹不为空，是否需要清空？ [Y/N]: "
		);
		process.stdin.resume();
		process.stdin.setEncoding("utf-8");
		process.stdin.on("data", chunk => {
			chunk = chunk.replace(/\s\n|\r\n/g, "");
			if (chunk !== "y" && chunk !== "Y") {
				process.exit(0);
			} else {
				console.log(
					chalk.bold.cyan("Omi-Cli") +
						(!isCn ? " is emptying this directory..." : " 正在清空此文件夹...")
				);
				emptyFs(dest);
				createPr();
			}
		});
	} else {
		createPr();
	}

	function createPr() {
		console.log();
		console.log(
			chalk.bold.cyan("Omi-Cli") +
				(!isCn
					? " will creating a new omi-pr in "
					: " 即将创建一个新的omi-pr在 ") +
				dest
		);

		vfs
			.src(["**/*", "!mode_modules/**/*"], {
				cwd: tpl,
				cwdbase: true,
				dot: true
			})
			.pipe(template(dest, tpl))
			.pipe(vfs.dest(dest))
			.on("end", function() {
				try {
					if (customPrjName) {
						try {
							process.chdir(customPrjName);
						} catch (err) {
							console.log(error(err));
						}
					}
					console.log();
					require("./install")(mirror, done);
				} catch (e) {
					console.log(error(e));
				}
			})
			.resume();
	}

	function done() {
		console.log();
		console.log();
		console.log();
		success(`Congratulation! a Omi-pr has been created successful! `);
		console.log(`

if you are not in ${projectName}, please run 'cd ${projectName}', then you can:

    > ${chalk.bold.white("omi pr")}        compile your project`);
		console.log();
		console.log(`${chalk.bold.cyan("Omi!")} https://alloyteam.github.io/omi`);
	}
}

function template(dest, cwd) {
	return through.obj(function(file, enc, cb) {
		if (!file.stat.isFile()) {
			return cb();
		}

		info("Copy", file.path.replace(cwd + "/", ""));
		this.push(file);
		cb();
	});
}

module.exports = initPr;
