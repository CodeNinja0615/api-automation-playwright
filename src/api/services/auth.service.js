import { endpoints } from '../routes/endpoints.js';
import { ApiClient } from '../client/apiClient.js';
import { env } from '../../../configs/env.js';

export class AuthService {
  constructor(request) {
    this.apiClient = new ApiClient(request);
  }

  async getToken() {
    const response = await this.apiClient.post(endpoints.AUTH, {
      username: env.username,
      password: env.password
    });

    const body = await response.json();
    return body.token;
  }
}
