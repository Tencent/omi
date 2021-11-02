const { yellow, green, red } = require('kolorist')

function log(msg) {
    console.log(msg)
}

function success(msg) {
    console.log(green(msg))
}

function info(msg) {
    console.log(yellow(msg))
}

function error(msg) {
    console.error(red(msg))
}

module.exports = { log, success, info, error }