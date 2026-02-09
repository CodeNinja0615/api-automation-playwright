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
export default defineConfig({
  testDir: './tests',
  globalSetup: '',
  globalTeardown: '',
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://restful-booker.herokuapp.com/',
    extraHTTPHeaders: {

    },
  }
});

