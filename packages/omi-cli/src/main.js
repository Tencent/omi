'use strict';
const program = require('commander');
const path = require('path')
const chalk = require('chalk');
const exists = require('fs-exists-sync');
const spawn = require('cross-spawn');

program
    .version(require('../package').version, '-v, --version')
    .usage('<cmd> [project-name]')
    .option('-m, --mirror <mirror>', 'Select mirror like: npm, cnpm, taobao', /^(npm|cnpm|taobao|nj|rednpm|skimdb|yarn)$/i)
    .option('-l, --language <language>', 'Select language: en / cn', selectLanguage)
    .on('-h, --help', help);

const commandLists = [
    {
        name: 'init',
        argument: '<projectName>',
        description: 'Initialize a new omi application in the current folder',
    },
    {
        name: 'init-o',
        argument: '<projectName>',
        description: 'Initialize a new omio(IE8+) project in the current folder',
    },
    {
        name: 'init-ts',
        argument: '<projectName>',
        description: 'Initialize a new omi project with typescript in the current folder',
    },
    {
        name: 'init-vite',
        argument: '<projectName>',
        description: 'Initialize a new omi project with vite in the current folder',
    },
    {
        name: 'init-component',
        argument: '<componentName>',
        description: 'Initialize a new omi component in the current folder',
    },
    {
        name: 'init-weui',
        argument: '<projectName>',
        description: 'Initialize a mobile project with weui in the current folder',
    },
    {
        name: 'init-mp',
        argument: '<projectName>',
        description: 'Initialize a new omi-mp in the current folder',
    },
    {
        name: 'init-md2site',
        argument: '<projectName>',
        description: 'Initialize a project of static site generator by markdown in the current folder',
    }
]


for (let item in commandLists) {
    let action = require(path.resolve(__dirname, `./actions/${commandLists[item].name}`))
    program.command(commandLists[item].name)
        .description(commandLists[item].description)
        .arguments(commandLists[item].argument)
        .action(
            action
        )
}

program
    .command('*')
    .action(function (cmd) {
        const templateName = isInitTemplate(cmd); // verify init-{templateName}
        const option = arguments[2] || arguments[1]; // if no arguments[2], second parameter is an option.
        const projectName = typeof arguments[1] === 'string' ? arguments[1] : ''; // if arguments[1] is not a string, no project name input.
        // init a template
        if (templateName) {
            const cmd = 'init-template';
            if (option.parent.mirror && typeof option.parent.mirror === 'string') {
                options.mirror = option.parent.mirror;
            }
            // omi init-{templateName} {projectName}
            switchCommand(cmd, { project: projectName, template: templateName, mirror: options.mirror, language: options.language });
        } else {
            // default, if it is not init a template
            spawn('omi', ['-h'], { stdio: 'inherit' })
        }
    });


//Parse the parameters on the process 
program.parse(process.argv);

function isCnFuc(language) {
    return language === "cn" ? true : false
}

function selectLanguage(language) {
    if (language !== 'en' && language !== 'cn') {
        language = 'en';
    }
    options.language = language;
    return language;
}

// verify a command is init a template, and return a template name without init-
// i.e. init-omi-cli to omi-cli
function isInitTemplate(cmd) {
    return /init-(.)+/.test(cmd) && /init-([^\ ]+)/.exec(cmd)[1];
}

function executable(cmd) {
    const file = path.join(__dirname, 'omi-' + cmd);
    return exists(file) ? file : void 0;
}

function help() {
    console.log('  Commands:');
    console.log();
    console.log(`     ${chalk.green('init  [project-name]')}           Initialize a new omi application in the current folder `);
    console.log(`     ${chalk.green('init-o  [project-name]')}         Initialize a new omio(IE8+) project in the current folder `)
    console.log(`     ${chalk.green('init-kbone  [project-name]')}     Initialize a new omi kbone project in the current folder `)
    console.log(`     ${chalk.green('init-ts  [project-name]')}        Initialize a new omi project with typescript in the current folder `)
    console.log(`     ${chalk.green('init-vite  [project-name]')}      Initialize a new omi project with vite in the current folder `)
    console.log(`     ${chalk.green('init-component [ComponentName]')}      Initialize a new omi component in the current folder `)
    console.log(`     ${chalk.green('init-weui  [project-name]')}      Initialize a mobile project with weui in the current folder `)

    console.log(`     ${chalk.green('init-mp  [project-name]')}        Initialize a new omi-mp in the current folder `)
    console.log(`     ${chalk.green('init-md2site  [project-name]')}   Initialize a project of static site generator by markdown in the current folder `)
    console.log();
    console.log('  All commands can be run with -h (or --help) for more information.')
}
