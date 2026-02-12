import { test as base } from '@playwright/test';
import { AuthService } from '../api/services/auth.service.js';

export const test = base.extend({
  authToken: async ({ request }, use) => {
    const authService = new AuthService(request);
    const token = await authService.getToken();

    await use(token);
  }
});

export { expect } from '@playwright/test';
