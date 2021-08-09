var path = require("path");
var join = path.join;
var basename = path.basename;
var fs = require("fs");
var vfs = require("vinyl-fs");
var renameSync = fs.renameSync;
var existsSync = fs.existsSync;
var chalk = require("chalk");
var through = require("through2");
var emptyDir = require("empty-dir");
var info = require("./logger").info;
var error = require("./logger").error;
var success = require("./logger").success;
var isCnFun = require("./utils").isCnFuc;
var emptyFs = require("./utils").emptyFs;
var isSafeToCreateProjectIn = require("./utils").isSafeToCreateProjectIn;

function init(args) {
  var omiCli = chalk.bold.cyan("Omi-Cli");
  var isCn = isCnFun(args.language);
  var customPrjName = args.project || "";
  var tpl = join(__dirname, "../template/component");
  var dest = join(process.cwd(), customPrjName);
  var componentName = basename(dest);
  var mirror = args.mirror;

  console.log();
  console.log(omiCli + (!isCn ? " is booting... " : " 正在启动..."));
  console.log(
    omiCli +
    (!isCn ? " will execute init command... " : " 即将执行 init 命令...")
  );
  if (existsSync(dest) && !emptyDir.sync(dest)) {
    if (!isSafeToCreateProjectIn(dest, componentName)) {
      process.exit(1);
    }
  }

  createApp();

  function createApp() {
    console.log();
    console.log(
      chalk.bold.cyan("Omi-Cli") +
      (!isCn
        ? " will creating a new omi app in "
        : " 即将创建一个新的应用在 ") +
      dest
    );

    vfs
      .src(["**/*", "!node_modules/**/*"], {
        cwd: tpl,
        cwdbase: true,
        dot: true,
      })
      .pipe(template(dest, tpl))
      .pipe(vfs.dest(dest))
      .on("end", function () {
        try {
          // rename gitignore file as .gitignore if `gitignore` exist
          // (this was actually exist in app-ts-old)
          if (existsSync(join(dest, "gitignore"))) {
            info("Rename", "gitignore -> .gitignore");
            renameSync(join(dest, "gitignore"), join(dest, ".gitignore"));
          }

          if (existsSync(join(dest, "package.json"))) {

            replaceSync(join(dest, "package.json"), {
              files_to_be_replace: 'files',
              counter_to_be_replace: componentName,
            });
          }

          if (customPrjName) {
            try {
              process.chdir(customPrjName);
            } catch (err) {
              console.log(error(err));
            }
          }
          info(
            "Install",
            "We will install dependencies, if you refuse, press ctrl+c to abort, and install dependencies by yourself. :>"
          );
          console.log();
          require("./install")(mirror, done);
        } catch (e) {
          console.log(error(e));
        }
      })
      .resume();
  }

  function replaceSync(file, map) {
    let contents = fs.readFileSync(file).toString();
    Object.keys(map).forEach(fromKey => {
      contents = contents.replace(fromKey, map[fromKey]);
      fs.writeFileSync(file, contents);
    })
  }

  function done() {
    success(`Congratulation! "${componentName}" has been created successfully! `);
    console.log();
    console.log();

    console.log("Change directory command:");
    success(`cd ${componentName}`);
    console.log();
    console.log();
    console.log("Development command:");
    success("npm start");
    console.log();
    console.log();
    console.log("Test command:");
    success("npm run test");
    console.log();
    console.log();
    console.log("Release command:");
    success("npm run build");
    console.log();
    console.log();
  }
}

function template(dest, cwd) {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }

    info("Copy", file.path.replace(cwd + "/", ""));
    this.push(file);
    cb();
  });
}

module.exports = init;
