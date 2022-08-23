import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

const chromium = require('chrome-aws-lambda');
let options;

(async function setLaunchOptions() {
  options = process.env['production']
    ? {
        args: chromium.args,
        executablePath: await chromium.executablePath,
        headless: chromium.headless
      }
    : {
        args: [],
        executablePath:
          process.platform === 'win32'
            ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
            : process.platform === 'linux'
            ? '/usr/bin/google-chrome'
            : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      };
  return options;
})();

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  },
  puppeteerLaunchOptions: options
};