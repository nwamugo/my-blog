import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

const chromium = require('chrome-aws-lambda');
let configuration = {
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
  }
}

const setConfiguration = async function() {
  const options = process.env['AWS_LAMBDA_FUNCTION_NAME']
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

  const configObj = {
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

  return configObj;
};

setConfiguration().then(result => configuration = result);

export const config: ScullyConfig = configuration;
