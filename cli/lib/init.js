const { join, basename } = require('path')
const vfs = require('vinyl-fs')
const { renameSync } = require('fs')
const chalk = require('chalk')
const through = require('through2')
const emptyDir  = require('empty-dir')
const { info, error, success } = require('./logger')


function init() {
    const tpl = join(__dirname, '../template/app')
    const dest = process.cwd()
    const prjName = basename(dest)

    if (!emptyDir.sync(dest)) {
        error('This directory existing files, please empty.');
        process.exit(1);
    }

    console.log()
    console.log(`Creating a new Omi app in ${dest}`)

   /*
    * Use vinyl-fs to init file
    * https://github.com/dvajs/dva-cli/blob/master/src/init.js
    */
    vfs.src(['**/*', '!mode_modules/**/*'], {cwd: tpl, cwdbase: true, dot: true})
      .pipe(template(dest, tpl))
      .pipe(vfs.dest(dest))
      .on('end', function(){
          try{
            info('rename', 'gitignore -> .gitignore')
            renameSync(join(dest, 'gitignore'), join(dest, '.gitignore'));

                info('run', 'npm install')
                require('./install')(echoDone)
          } catch(e){
              console.log(error(e))
          }
      })
      .resume()

      function echoDone(){
        console.log()
        console.log()
        console.log()
        success(`Congratulation! "${prjName}" has been created successful! `)
        console.log(`
        
Using the scaffold with Gulp + Webpack + Babel + BrowserSync,

In ${prjName}, you can run these commands:

  > ${chalk.bold.white('npm run dev')}         Starts the development server
  > ${chalk.bold.white('npm run dist')}        Publish your project`)
        console.log()
        console.log(`${chalk.bold.cyan('Omi!')} https://alloyteam.github.io/omi` )

    }
    
}

function template(dest, cwd) {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }

    info('create', file.path.replace(cwd + '/', ''));
    this.push(file);
    cb();
  });
}

module.exports = init