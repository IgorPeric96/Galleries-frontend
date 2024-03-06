import HttpService from './http.service';

const API_URL = 'http://localhost:8000/api'; 

export default class AuthService extends HttpService {
  // static login(credentials) {
  //   console.log(credentials)
  //   return this.request({
  //       url: `${API_URL}/login`,
  //       data: credentials,
  //       method: "POST"
  //   })
  //     .then(response => {
  //       if (response.data.accessToken) {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //       }
  //       return response.data;
  //     });
  // }

  static login = async (credentials) => {
    console.log(credentials)
    return this.request({
        url: `${API_URL}/login`,
        data: credentials,
        method: "POST"
    })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  static register = async (userData) => {
    console.log(userData, "ovo je userData")
    console.log(this, "ovo je this")
    await this.request({
        method: "GET",
        url: "/sanctum/csrf-cookie"
    })
    return this.request({
        url: `${API_URL}/register`,
        data: userData,
        method: "POST"
    })
      .then(response => {
        console.log(response)
        
            this.client.defaults.headers['Authorization'] = `Bearer ${response.access_token}`;
            
          localStorage.setItem('user', JSON.stringify(response.user));
        
        return response.user;
      });
  }

  static logout() {
    localStorage.removeItem('user');
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

