const spawnNpm = require('cross-npm-spawn')
const ora = require('ora')
const spinner = ora("npm installing dependencies, please wait for a while...")
spinner.start()

module.exports = function (done){
    spawnNpm('install').then((result) => {
        spinner.stop();
        done()
    })
}