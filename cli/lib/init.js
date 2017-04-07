var join = require('path').join;
var basename = require('path').basename;
var vfs = require('vinyl-fs');
var renameSync = require('fs').renameSync;
var chalk = require('chalk');
var through = require('through2');
var emptyDir  = require('empty-dir');
var info = require('./logger').info;
var error = require('./logger').error;
var success = require('./logger').success;


function init(program) {
    var args = ['install'];
    var customPrj = '';
    if(program.args[0] && program.args[0] === "cn"){
        args = ['install', "--registry", "https://registry.npm.taobao.org"];
    } else if(program.args[1] && program.args[1] === "cn") {
        customPrj = program.args[0];
        args = ['install', "--registry", "https://registry.npm.taobao.org"];
    } else {
        customPrj = program.args[0] || '';
    }

    var tpl = join(__dirname, '../template/app');
    var dest = join(process.cwd(), customPrj);
    var projectName = basename(dest);

    if (!customPrj && !emptyDir.sync(dest)) {
        error('This directory existing files, please empty.');
        process.exit(1);
    }

    console.log();
    console.log(`Creating a new Omi app in ${dest}`);

   /*
    * Use vinyl-fs to init file
    * https://github.com/dvajs/dva-cli/blob/master/src/init.js
    */
    vfs.src(['**/*', '!mode_modules/**/*'], {cwd: tpl, cwdbase: true, dot: true})
        .pipe(template(dest, tpl))
        .pipe(vfs.dest(dest))
        .on('end', function(){
            try{
                info('Rename', 'gitignore -> .gitignore');
                renameSync(join(dest, 'gitignore'), join(dest, '.gitignore'));
                if(customPrj) {
                    try{
                        process.chdir(customPrj);
                    }
                    catch (err) {
                    console.log(error(err));
                }}
                info('Run', 'npm will install dependencies');
                console.log();
                require('./install')(args, echoDone)
            } catch(e){
              console.log(error(e))
            }
        })
        .resume();

        function echoDone(){
        console.log();
        console.log();
        console.log();
        success(`Congratulation! "${projectName}" has been created successful! `);
        console.log(`
        
Using the scaffold with Gulp + Webpack + Babel + BrowserSync,

In ${projectName}, you can run these commands:

  > ${chalk.bold.white('npm run dev')}         Starts the development server
  > ${chalk.bold.white('npm run dist')}        Publish your project`);
        console.log();
        console.log(`${chalk.bold.cyan('Omi!')} https://alloyteam.github.io/omi` )

    }
    
}

function template(dest, cwd) {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }

    info('Copy', file.path.replace(cwd + '/', ''));
    this.push(file);
    cb();
  });
}

module.exports = init;