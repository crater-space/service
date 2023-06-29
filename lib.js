/* global require module __dirname */

const { join } = require('path');
const { spawn } = require('child_process');

const commandPrefix = 'sbcl --script ./main.lisp';

module.exports.COMMANDS = {
    LIST_SOURCES: `${commandPrefix} get_sources`,
    SEARCH: `${commandPrefix} search`,
    LIST: `${commandPrefix} list`,
    INSTALL: `${commandPrefix} install`,
    UNINSTALL: `${commandPrefix} uninstall`,
    UPDATE: `${commandPrefix} update`
};

module.exports.executeCommand = (command, responseObject) => {
    const commandElements = command.split(' ');
    const commandName = commandElements[0];
    const commandArgs = commandElements.slice(1);

    const currentCommandInstance = spawn(
        commandName,
        commandArgs,
        { cwd: join(__dirname, './db-reader'), shell: true }
    );

    currentCommandInstance.stdout.on(
        'data',
        data => {
            responseObject.contentType('text/plain');
            responseObject.send(data.toString());
        }
    );

    currentCommandInstance.stderr.on(
        'data',
        data => {
            responseObject.contentType('text/plain');
            responseObject.send(data.toString());
        }
    );
};
