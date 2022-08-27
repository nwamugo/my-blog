import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

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
  puppeteerLaunchOptions: {
    executablePath:
      process.platform === 'win32'
        ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'linux'
        ? '/usr/bin/google-chrome'
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }
};
