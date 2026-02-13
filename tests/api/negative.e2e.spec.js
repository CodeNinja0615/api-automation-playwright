import { test, expect } from '@playwright/test';
import { BookingService } from '../../src/api/services/booking.service.js';

test('Get booking with invalid ID', async ({ request }) => {

  const bookingService = new BookingService(request);

  const response = await bookingService.getBookingById(99999999);
  expect(response.status()).toBe(404);
});
