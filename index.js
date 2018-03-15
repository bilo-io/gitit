const commands = require('./lib/gitCommands.json')

const gititOutput = (commandArgs) => {
    console.log('printing: ', commandArgs)
    // console.log('commands: ', commands)
    let output = commandArgs.join(' ')
    if(commandArgs.length == 1 || true) {
        output = commands[commandArgs[0]] ? commands[commandArgs[0]].effect : ''
    }
    return output
}

const gitit = (command) => {
    return gititOutput(command.split(' '))
}

module.exports = {
    gitit,
    gititOutput
}