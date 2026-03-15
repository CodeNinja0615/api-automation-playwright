import { test as base } from '@playwright/test';
import { AuthService } from '../api/services/auth.service.js';
import { enableMocks } from "../mocks/mockRoutes.js";

test.beforeEach(async ({ page }) => {
  if (process.env.ENV === "mock") {
    await enableMocks(page);
  }
});

export const test = base.extend({
  authToken: async ({ request }, use) => {
    const authService = new AuthService(request);
    const token = await authService.getToken();

    await use(token);
  }
});

test.afterEach(async ({ }, testInfo) => {
  const status = testInfo.status;
  const title = testInfo.title;
  const file = testInfo.file;

  console.log(`\n📁 File: ${file}`);
  console.log(`🧪 Test: ${title}`);
  console.log(`✅ Status: ${status.toUpperCase()}`);

  if (status !== testInfo.expectedStatus) {
    console.log(`❌ Error: ${testInfo.error?.message}`);
  }

  console.log('-----------------------------------');
});
export { expect } from '@playwright/test';
