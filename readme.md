https://restful-booker.herokuapp.com/


//--Payload generator
import { createBookingPayload } from '../../src/api/factories/booking.factory.js';

const payload = createBookingPayload({
  firstname: "Sameer"
});


layered API automation framework using a Service Layer pattern. Tests interact with service classes instead of raw HTTP calls. All requests are routed through a centralized API client for maintainability, token handling, logging, and scalability.

npm install dotenv
npm install ajv
npm install -D allure-playwright
npm install -g allure-commandline
npm install --save-dev allure-single-html-file-js



playwright-api-framework/
│
├── package.json
├── package-lock.json
├── playwright.config.js
├── .env
├── .gitignore
│
├── configs/
│   ├── env.js
│   ├── dev.env.js
│   ├── qa.env.js
│   └── prod.env.js
│
├── src/
│   ├── api/
│   │   ├── client/
│   │   │   └── apiClient.js
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.js
│   │   │   ├── user.service.js
│   │   │   ├── booking.service.js
│   │   │   └── order.service.js
│   │   │
│   │   └── routes/
│   │       └── endpoints.js
│   │
│   ├── fixtures/
│   │   └── api.fixture.js
│   │
│   ├── utils/
│   │   ├── payloadBuilder.js
│   │   ├── dataGenerator.js
│   │   ├── responseValidator.js
│   │   └── logger.js
│   │
│   └── test-data/
│       ├── users.json
│       └── bookingData.json
│
├── tests/
│   ├── api/
│   │   ├── auth.e2e.spec.js
│   │   ├── user.e2e.spec.js
│   │   └── booking.e2e.spec.js
│   │
│   └── hybrid/
│       └── user-ui-api.e2e.spec.js
│
├── reports/
│
└── .github/
    └── workflows/
        └── api-tests.yml
