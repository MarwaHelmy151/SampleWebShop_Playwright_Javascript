// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { workers } from 'node:cluster';

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
const config = ({
  testDir: './tests',
  workers: 8,
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html', { open: 'never' }]
  ],
  //reporter: 'html',
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: false, // change to true for CI if needed
        screenshot: 'retain-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true,
      },

    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // }
  ],
});

module.exports = config

