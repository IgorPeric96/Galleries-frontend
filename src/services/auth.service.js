import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 

export default class AuthService {
  static login(credentials) {
    return axios.post(`${API_URL}/login`, credentials)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  static register(userData) {
    return axios.post(`${API_URL}/register`, userData)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  static logout() {
    localStorage.removeItem('user');
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
