#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const { prompt } = require('enquirer')
const shell = require('shelljs');

const { log, error, success, info } = require('./log')
const { TEMPLATES } = require('./templates')
const { emptyDir, copy, copyDir } = require('./utils')

const renameFiles = {
    _gitignore: '.gitignore'
}

const cwd = process.cwd()
let targetDir = argv._[0]
const defaultProjectName = !targetDir ? 'omi-project' : targetDir

async function init() {
    if (!targetDir) {
        const { name } = await prompt({
            type: "input",
            name: "name",
            message: "Project name:",
            initial: defaultProjectName
        })
        targetDir = name
    } else {
        success(`your project will created in ${path.join(cwd, targetDir)}`)
    }
    const root = path.join(cwd, targetDir)
    if (!fs.existsSync(root)) {
        fs.mkdirSync(root, { recursive: true })
    }
    const existing = fs.readdirSync(root)
    if (existing.length) {
        const { yes } = await prompt({
            type: 'confirm',
            name: 'yes',
            initial: 'Y',
            message:
                `Target directory ${targetDir} is not empty.\n` +
                `Remove existing files and continue?`
        })
        if (yes) {
            emptyDir(root)
            log(root)
        } else {
            return
        }
    }

    chooseTemplate(root)
        .then(async (res) => {
            const packageManager = await choosePackageManager()
            copyTemplate(res)
            return packageManager
        })
        .then((packageManager) => {
            installDependencies(root, packageManager).then(() => {
            })
        })
        .catch((err) => { error(err) })
}

async function chooseTemplate(root) {
    let template = argv.t || argv.template
    if (!template || !TEMPLATES.includes(template)) {
        if (!TEMPLATES.includes(template)) {
            info("The selected template was not found")
        }
        const { t } = await prompt({
            type: "select",
            name: "t",
            message: "Select a template:",
            choices: TEMPLATES
        })
        template = t
    } else {
        log(`Template will choose ${template}`)
    }
    const templateDir = path.join(__dirname, `template/${template}`)
    success(`your project will created ${template} in ${path.join(cwd, targetDir)}`)
    return { templateDir, root }
}

async function choosePackageManager() {
    const { packageManager } = await prompt({
        type: 'select',
        name: 'packageManager',
        initial: 'npm',
        choices: ['npm', 'yarn', 'pnpm'],
        message:
            `Select a package manager`
    })
    return packageManager
}

async function copyTemplate({ templateDir, root }) {
    const files = fs.readdirSync(templateDir)
    const write = (file, content) => {
        const targetPath = renameFiles[file]
            ? path.join(root, renameFiles[file])
            : path.join(root, file)
        if (content) {
            fs.writeFileSync(targetPath, content)
        } else {
            copy(path.join(templateDir, file), targetPath)
        }
    }
    for (const file of files.filter((f) => f !== 'package.json')) {
        write(file)
    }
    const pkg = require(path.join(templateDir, `package.json`))
    pkg.name = path.basename(root)
    write('package.json', JSON.stringify(pkg, null, 2))
}

async function installDependencies(root, packageManager) {
    prompt({
        type: 'confirm',
        name: 'isInstall',
        initial: 'Y',
        message:
            `Whether to install dependencies now\n`
    }).then((isInstall) => {
        if (isInstall) {
            shell.cd(`${path.relative(cwd, root)}`);
            shell.exec(`${packageManager} install`)
        } else {
            log(`\nDone. Now run:\n`)
            if (root !== cwd) {
                log(`cd ${path.relative(cwd, root)}`)
            }
            log(`npm install (or \`yarn\`)`)
        }
        log(`\nnpm run dev (or \`yarn start\`)`)
        success(`\nThe project has been created in ${root}\n`)
    })
}

init().catch((err) => {
    error(err)
})