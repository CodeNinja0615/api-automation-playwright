import { test, expect } from '@playwright/test';

test('GET booking ids', async ({ request }) => {
  const response = await request.get('/ping');

  expect(response.status()).toBe(201);
});
