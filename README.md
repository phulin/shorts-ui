# shorts-ui

This is a GUI for the Cargo Cultist Shorts.

To install, `svn checkout https://github.com/phulin/shorts-ui/branches/master/build`

![Screenshot](screenshot.png)

## Development

This script is built with `preact-cli`. That means it can use a modern JS/JSX component paradigm. To get started with development, install node and do `npm install` in the root directory. There were some gymnastics required to get preact and Mafia to work nicely together, and the interface still isn't entirely clean. The best way to develop is to set the Mafia property `shorts_devMode` to true. Then do `npm run dev`, and the webpack dev server will start on `localhost:8080` and relay all of the Mafia pages. There are still some problems with HMR, so you'll have to manually refresh the main frame every time you make a change.