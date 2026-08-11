// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config= ({
  testDir: './tests', //directory where tests are located
  timeout: 40 *1000, //overide the existing 30sec timeout  for components and not expect timeout
  expect: {
    timeout: 40 *1000 //timeout for assertion
  },
   reporter: 'html',
   use:{
    browserName : 'webkit' ,
    headless: false

 },

});

module.exports = config