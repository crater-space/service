# crater-service

[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config-myterminal)
[![License](https://img.shields.io/github/license/crater-space/service.svg)](https://opensource.org/licenses/MIT)  
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y5E5GL7)

A web service to generate package-management shell scripts using [Crater Service](https://github.com/crater-space/service), based on information in [Crater DB](https://github.com/crater-space/db)

## Interface

### Service endpoints

All the below service endpoints accept GET requests:

1. `list-sources` generates a Bash script to determine the package sources (among the configured ones in the [DB](https://github.com/crater-space/db)) available on the current system
2. `search` generates a Bash script to search for the specified package across the available known sources
3. `list` generates a Bash script to list the installed packages across the available known sources
4. `install` generates a Bash script to install the specified packages using the most appropriate option from among the available known sources
5. `uninstall` generates a Bash script to uninstall the specified packages from the system
6. `update` generates a Bash script to update all (or specified) packages using the appropriate available known sources

### Web portal

Hitting the URL in the browser displays basic information about the service endpoints (coming soon).

## Running the service/website

The only major dependency is [NPM](https://nodejs.org), once cloned, the service/web-app can be started using an `npm start`.

More documentation coming soon...
