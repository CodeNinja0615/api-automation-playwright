export async function mockRequest(method, url, payload) {

  if (method === "POST" && url === "/auth") {
    return {
      status: 200,
      body: { token: "mock-token-123" }
    };
  }

  if (method === "POST" && url === "/booking") {
    return {
      status: 200,
      body: {
        bookingid: 1,
        booking: payload
      }
    };
  }

  if (method === "GET" && url.startsWith("/booking/")) {
    return {
      status: 200,
      body: {
        firstname: "Sameer",
        lastname: "Akhtar",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-01-01",
          checkout: "2026-01-05"
        },
        additionalneeds: "Breakfast"
      }
    };
  }

  if (method === "DELETE" && url.startsWith("/booking/")) {
    return {
      status: 201,
      body: {}
    };
  }

  throw new Error(`No mock defined for ${method} ${url}`);
}