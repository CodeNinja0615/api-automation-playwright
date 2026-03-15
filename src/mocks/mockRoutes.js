import createBooking from "./responses/createBooking.json" assert { type: "json" };
import getBooking from "./responses/getBooking.json" assert { type: "json" };

export async function enableMocks(page) {

    await page.route('**/booking', async route => {
        if (route.request().method() === 'POST') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(createBooking)
            });
        }
    });

    await page.route('**/booking/*', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(getBooking)
        });
    });

}