import { test, expect } from '../../src/fixtures/api.fixture.js';
import { BookingService } from '../../src/api/services/booking.service.js';
import { bookingSchema } from '../../src/api/schemas/booking.schema.js';
import { validateSchema } from '../../src/utils/schemaValidator.js';

test('Create → Get → Delete booking (E2E)', async ({ request, authToken }) => {
  /** @type {BookingService} */
  let bookingService, bookingId;
  const payload = {
    firstname: "Sameer",
    lastname: "Akhtar",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-01-01",
      checkout: "2024-01-05"
    },
    additionalneeds: "Breakfast"
  };
  await test.step(`Create Booking`, async () => {
    bookingService = new BookingService(request, authToken);
    // 1️⃣ Create
    const createResponse = await bookingService.createBooking(payload);
    expect(createResponse.status()).toBe(200);

    const createBody = await createResponse.json();
    bookingId = createBody.bookingid;
  });
  await test.step(`Get Booking`, async () => {
    // 2️⃣ Get
    const getResponse = await bookingService.getBookingById(bookingId);
    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();
    expect(getBody.firstname).toBe("Sameer");
    expect(validateSchema(bookingSchema, getBody)).toBeTruthy(); //----Response schema validation
  });
  await test.step(`Delete Booking`, async () => {
    // 3️⃣ Delete
    const deleteResponse = await bookingService.deleteBooking(bookingId);
    expect(deleteResponse.status()).toBe(201);
  });
});
