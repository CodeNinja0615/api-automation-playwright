import { test, expect } from '../../src/fixtures/api.fixture.js';
import { BookingService } from '../../src/api/services/booking.service.js';
import { bookingSchema } from '../../src/api/schemas/booking.schema.js';
import { validateSchema } from '../../src/utils/schemaValidator.js';

test('Create → Get → Delete booking (E2E)', async ({ request, authToken }) => {

  const bookingService = new BookingService(request, authToken);

  let payload = {
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

  // 1️⃣ Create
  const createResponse = await bookingService.createBooking(payload);
  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  // 2️⃣ Get
  const getResponse = await bookingService.getBookingById(bookingId);
  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();
  expect(getBody.firstname).toBe("Sameer");
  expect(validateSchema(bookingSchema, getBody)).toBeTruthy(); //----Response schema validation

  payload['lastname'] = 'king';
  // 3️⃣ Put
  const updateResponse = await bookingService.updateBooking(bookingId, payload);
  expect(updateResponse.status()).toBe(200);

  // 4️⃣ Get after update booking
  const updatedGetResponse = await bookingService.getBookingById(bookingId);
  expect(updatedGetResponse.status()).toBe(200);

  const updatedGetBody = await updatedGetResponse.json();
  expect(updatedGetBody.lastname).toBe("king");
  expect(validateSchema(bookingSchema, updatedGetBody)).toBeTruthy(); //----Response schema validation


  // 5️⃣ Delete
  const deleteResponse = await bookingService.deleteBooking(bookingId);
  expect(deleteResponse.status()).toBe(201);
});
