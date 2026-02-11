import { test, expect } from '@playwright/test';
import { BookingService } from '../../src/api/services/booking.service.js';

test('Get all booking ids', async ({ request }) => {
  const bookingService = new BookingService(request);

  const response = await bookingService.getAllBookings();

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
});
