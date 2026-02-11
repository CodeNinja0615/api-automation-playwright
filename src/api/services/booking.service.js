import { endpoints } from '../routes/endpoints.js';
import { ApiClient } from '../client/apiClient.js';

export class BookingService {
  constructor(request, token = null) {
    this.apiClient = new ApiClient(request, token);
  }

  async getAllBookings() {
    return await this.apiClient.get(endpoints.BOOKING);
  }

  async getBookingById(id) {
    return await this.apiClient.get(`${endpoints.BOOKING}/${id}`);
  }

  async createBooking(payload) {
    return await this.apiClient.post(endpoints.BOOKING, payload);
  }

  async updateBooking(id, payload) {
    return await this.apiClient.put(`${endpoints.BOOKING}/${id}`, payload);
  }

  async deleteBooking(id) {
    return await this.apiClient.delete(`${endpoints.BOOKING}/${id}`);
  }
}
