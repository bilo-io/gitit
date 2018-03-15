#!/usr/bin/env node
const package = require('./package.json')
const asciify = require('asciify')
const asciifyImage = require('asciify-image')
const colors = require('colors')
const fs = require('file-system')
const program = require('commander')
const [, , ...args] = process.argv;
const src = __dirname
const gitit = require('./index').gitit
const commands = require('./lib/gitCommands.json')

// const reactFiles = require('./blueprints/react/index.js')
const menu = `
cc  | component-class` + `      create a react component (class)`.yellow + `
`

const config = `\n
version: ${require('./package.json').version}
`.green



console.log(gitit(args.join(' ')))