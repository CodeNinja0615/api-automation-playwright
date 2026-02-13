export function createBookingPayload(overrides = {}) {
  return {
    firstname: "John",
    lastname: "Doe",
    totalprice: Math.floor(Math.random() * 1000),
    depositpaid: true,
    bookingdates: {
      checkin: "2026-01-01",
      checkout: "2026-01-10"
    },
    additionalneeds: "Breakfast",
    ...overrides
  };
}
