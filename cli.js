#!/usr/bin/env node
const package = require('./package.json')
const asciify = require('asciify')
const asciifyImage = require('asciify-image')
const colors = require('colors')
const fs = require('file-system')
const program = require('commander')
const [, , ...args] = process.argv;
const src = __dirname

const commands = require('./lib/gitCommands.json')

// const reactFiles = require('./blueprints/react/index.js')
const menu = `
cc  | component-class` + `      create a react component (class)`.yellow + `
`

const config = `\n
version: ${require('./package.json').version}
`.green

gititOutput = (commandArgs) => {
    console.log('printing: ', commandArgs)
    // console.log('commands: ', commands)
    let output = commandArgs.join(' ')
    if(commandArgs.length == 1 || true) {
        output = commands[commandArgs[0]] ? commands[commandArgs[0]].effect : ''
    }
    return output
}

console.log(gititOutput(args))

const gitit = (command) => {
    return gititOutput(command.split(' '))
}

module.exports = {
    gitit: gitit
}