// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { env } from './configs/env.js';

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
export default defineConfig({
  testDir: './tests',
  globalSetup: './src/global-setup.js',
  globalTeardown: './src/global-teardown.js',
  workers: 1,
  reporter: [
    ["list"],
    ["allure-playwright"]
  ],
  use: {
    baseURL: env.baseURL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
});

