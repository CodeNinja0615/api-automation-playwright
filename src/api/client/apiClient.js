export class ApiClient {
  /**
   * 
   * @param {import("@playwright/test").APIRequestContext} request 
   * @param {string} token 
   */
  constructor(request, token = null) {
    this.request = request;
    this.token = token;
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.token) {
      headers['Cookie'] = `token=${this.token}`;
    }

    return headers;
  }

  async send(method, url, data = null) {
    const startTime = Date.now();

    console.log(`\n➡️  ${method.toUpperCase()} ${url}`);
    if (data) console.log(`Payload:`, data);

    const options = {
      headers: this.getHeaders(),
      ...(data && { data })
    };

    // const response = await this.request[method](url, options);

    let response;
    let attempts = 3;

    for (let i = 0; i < attempts; i++) {
      response = await this.request[method](url, options);

      if (response.status() < 500) break;

      console.log(`Retrying... Attempt ${i + 2}`);
    }

    const duration = Date.now() - startTime;
    console.log(`⬅️  Status: ${response.status()} | Time: ${duration}ms`);

    return response;
  }

  async get(url) {
    return this.send('get', url);
  }

  async post(url, data) {
    return this.send('post', url, data);
  }

  async put(url, data) {
    return this.send('put', url, data);
  }

  async delete(url) {
    return this.send('delete', url);
  }
}
