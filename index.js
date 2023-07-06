/* global module require */

const express = require('express');
const axios = require('axios');

const { COMMANDS, executeCommand } = require('./lib');

module.exports = url => {
    const app = express();

    app.listen(
        url,
        () => {
            console.log('Crater service started on', url);
        }
    );

    app.get(
        '/cli',
        (_, res) => {
            axios
                .get('https://raw.githubusercontent.com/crater-space/cli/main/install')
                .then(
                    ({ data }) => {
                        res.contentType('text/plain');
                        res.send(data);
                    }
                );
        }
    );

    app.get(
        '/list-sources',
        (_, res) => {
            executeCommand(COMMANDS.LIST_SOURCES, res);
        }
    );

    app.get(
        '/search',
        ({ query }, res) => {
            executeCommand(`${COMMANDS.SEARCH} ${query.s}  ${query.t}`, res);
        }
    );

    app.get(
        '/list',
        ({ query }, res) => {
            executeCommand(`${COMMANDS.LIST} ${query.s}`, res);
        }
    );

    app.get(
        '/install',
        ({ query }, res) => {
            executeCommand(`${COMMANDS.INSTALL} ${query.s} ${query.p}`, res);
        }
    );

    app.get(
        '/uninstall',
        ({ query }, res) => {
            executeCommand(`${COMMANDS.UNINSTALL} ${query.s}  ${query.p}`, res);
        }
    );

    app.get(
        '/update',
        ({ query }, res) => {
            executeCommand(`${COMMANDS.UPDATE} ${query.s}  ${query.p}`, res);
        }
    );
};
