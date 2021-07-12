const execa = require('execa');
const path = require('path');

module.exports = function (on, config) {
  const browserPath = path.join(__dirname, '..', '..', 'node_modules', 'nw', 'nwjs', 'nw.exe');
  const browser = {
    name: 'NW.js',
    channel: 'stable',
    family: 'chromium',
    displayName: 'NW.js',
    version: '0.54.1',
    path: browserPath,
    majorVersion: 54
  };
  return {
    browsers: config.browsers.concat(browser)
  };
};
