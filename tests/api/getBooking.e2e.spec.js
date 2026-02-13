import { test, expect } from '@playwright/test';
import { BookingService } from '../../src/api/services/booking.service.js';

test('Get all booking ids', async ({ request }) => {
  const bookingService = new BookingService(request);

  const start = Date.now();
  const response = await bookingService.getAllBookings();
  const duration = Date.now() - start;

  expect(duration).toBeLessThan(2000);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  expect(response.headers()['content-type']).toContain('application/json');
});
