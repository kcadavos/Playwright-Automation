import { DefaultAzureCredential } from "@azure/identity";
import { defineConfig } from "@playwright/test";
import { createAzurePlaywrightConfig } from "@azure/playwright";
import dotenv from "dotenv";

dotenv.config();

const credential = new DefaultAzureCredential();

const playwrightConfig = defineConfig({
  testDir: "./tests",

  retries: 2,
  workers: 5,

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: [
    ["html", { open: "never" }],
    ["@azure/playwright/reporter"],
  ],

  use: {
    browserName: "chromium",
    headless: true,

    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,

    screenshot: "on",
    trace: "retain-on-failure",
  },
});

export default createAzurePlaywrightConfig(playwrightConfig, {
  credential,
});