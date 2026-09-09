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

  timeout: 40 *1000, //overide the existing 30sec timeout  for components and not expect timeout | test level timeout 
  expect: {
    timeout: 40 *1000 //timeout for assertion
  },
   reporter: 'html',
   projects:[
    {
      name:'safari',
      use:{
        browserName : 'webkit' ,
        headless: false,
        actionTimeout: 10 *1000, //10secs timeout for all actions
        navigationTimeout: 30*1000, // when hiting a new page
        screenshot:'on', // enable screenshots
        video:'retain-on-failure',// captures videos on retry on first iteration
        trace:'retain-on-failure', //logging information (on/off/retain-on-failure)
        //retain on failure only creates screenshots and logs for failure 
        ...devices['iPhone 11'],
        
     }
    },
    {
      name: 'Chrome Execution',
      use:{
        browserName : 'chromium' ,
        headless: true,
        actionTimeout: 10 *1000, //10secs timeout for all actions
        navigationTimeout: 30*1000, // when hiting a new page
        screenshot:'on', // enable screenshots
        trace:'retain-on-failure', //logging information (on/off/retain-on-failure)
        ignoreHttpsErrors:true, //ssl issue
        permissions:['geolocation'] //enable geolocation
        //retain on failure only creates screenshots and logs for failure 
     //   viewport: {width:720, height:720} //for testing mobile responsiveness 
       }
    }
   ]
   

});

module.exports = config