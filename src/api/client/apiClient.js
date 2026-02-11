export class ApiClient {
  /**
   * 
   * @param {import("@playwright/test").Request} request 
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

  async get(url) {
    return await this.request.get(url, {
      headers: this.getHeaders()
    });
  }

  async post(url, data) {
    return await this.request.post(url, {
      data,
      headers: this.getHeaders()
    });
  }

  async put(url, data) {
    return await this.request.put(url, {
      data,
      headers: this.getHeaders()
    });
  }

  async delete(url) {
    return await this.request.delete(url, {
      headers: this.getHeaders()
    });
  }
}
