/* global module require */

const express = require('express');

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
        '/list-sources',
        (_, res) => {
            executeCommand(COMMANDS.LIST_SOURCES, res);
        }
    );

    app.get(
        '/search',
        ({ query }, res) => {
            res.send(JSON.stringify({ search: query }));
        }
    );

    app.get(
        '/list',
        (_, res) => {
            res.send('list');
        }
    );

    app.get(
        '/install',
        ({ query }, res) => {
            res.send(JSON.stringify({ install: query }));
        }
    );

    app.get(
        '/uninstall',
        ({ query }, res) => {
            res.send(JSON.stringify({ uninstall: query }));
        }
    );

    app.get(
        '/update',
        ({ query }, res) => {
            res.send(JSON.stringify({ update: query }));
        }
    );
};
