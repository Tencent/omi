const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer');
const chalk = require('chalk')
const ora = require('ora')
let { exec } = require('child_process')
let loading = null

const scipts = ['docs', 'start', 'build']
const components = fs.readdirSync(path.resolve(process.cwd(), './components')).map(item => item).filter(item => !item.includes('.') && item !== 'LICENSE')
const sciptsRawlist = {
    name: 'scriptType',
    message: '请选择想要执行的命令类型',
    choices: scipts.map(item => item)
}
const componentList = {
    name: 'componentType',
    message: '请输入执行命令的组件名',
}

rawlistChoose(sciptsRawlist, sciptsThenCallback)

function sciptsThenCallback(currentScript) {
    inputChoose(componentList, executeScript.bind(executeScript, currentScript))
}

function executeScript(scriptName, componentName) {
    if (!components.includes(componentName)) {
        console.log();
        console.log(chalk.redBright('!! 组件库中没有名为['), chalk.blueBright(componentName), chalk.redBright(']的组件'))
        console.log();
        return;
    }
    const targetDir = path.resolve(process.cwd(), `./components/${componentName}`)
    if (scriptName !== 'docs' && !hasDependencies(targetDir)) {
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'value',
                    message: chalk.yellowBright(`检测到您未安装任何依赖\n  是否帮您安装开发[${componentName}]所需要的依赖`),
                }
            ])
            .then((answers) => {
                if (answers.value) {
                    noDependencies(scriptName, targetDir, componentName)
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    } else {
        child_processScript(scriptName, targetDir)
    }


}
function child_processScript(scriptName, targetDir) {
    const itemsMap = {
        'docs': {
            text: '正在生成README.md文件...',
            endingConsole: 'README.md文件已成功生成，请点击对应目录查看'
        },
        'start': {
            text: '正在持续监听源文件变化，构建产物文件中...请及时查看文件变化',
            endingConsole: '正在监听demo文件的变化'
        },
        'build': {
            text: '正在build产物和其映射文件',
            endingConsole: '对应产物文件已生成，请点击对应目录查看'
        }
    }
    loading = ora(itemsMap[scriptName].text).start()
    loading.color = 'yellow'
    loading.spinner = {
        interval: 80,
        frames: ['-', '+', '-']
    }
    exec(`npm run ${scriptName}`, {
        cwd: targetDir
    },
        (err, stdout, stderr) => {
            console.log();
            console.log();


            const isMissingScript = new RegExp('Missing script')
            if (err) {
                if (isMissingScript.test(err))
                    console.log();
                    loading.fail(chalk.red(` 该文件夹下没有名为[${scriptName}]的脚本命令`))
                return;
            }
            loading.succeed(" " + chalk.green(itemsMap[scriptName].endingConsole))
        })
}
function rawlistChoose(rawlistlist, thenCallback) {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: rawlistlist.name,
                message: chalk.yellowBright(`${rawlistlist.message}`),
                choices: rawlistlist.choices
            }
        ])
        .then((answers) => {
            thenCallback(answers[rawlistlist.name])
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}
function inputChoose(inputItem, thenCallback) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: inputItem.name,
                message: chalk.yellowBright(`${inputItem.message}`),
            }
        ])
        .then((answers) => {
            thenCallback(answers[inputItem.name])
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function hasDependencies(targetDir) {
    let files = fs.readdirSync(targetDir)
    return files.includes('node_modules')
}
function noDependencies(scriptName, targetDir, componentName) {
    loading = ora(`正在为您安装开发[${componentName}]需要的所有依赖`).start()
    loading.color = 'yellow'
    loading.spinner = {
        interval: 80,
        frames: ['-', '+', '-']
    }

    exec(`npm install`, {
        cwd: targetDir
    },
        (err, stdout, stderr) => {
            console.log();
            console.log();

            loading.succeed(" " + chalk.green('该组件依赖已为您安装成功'))
            console.log();
            child_processScript(scriptName, targetDir)

            if (err) {
                console.error(err);
                return;
            }
        })
}