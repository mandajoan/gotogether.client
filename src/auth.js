import axios from 'axios'
import jwtDecode from 'jwt-decode'

class AuthClient {
  constructor() {
    this.request = axios.create({
      baseURL: 'https://gotogether-server.herokuapp.com',
      // baseURL: 'http://localhost:3001',
      headers: {
        common: {
          token: this.getToken()
        }
      }
    })
  }


  getEvents(){
    return this.request({url: '/events'})
      .then(response => response.data)
  }
  //route to show specific event in div
  getEvent(ev){
    return this.request({method: 'GET', url:`/events/${ev}`, data: ev})
    .then(response => response.data)
  }

  newEvent(eventInfo){
    return this.request({method: 'POST', url: '/events', data: eventInfo})
      .then((response) => {
        console.log(response.data)
        return response.data
      })
    }

  signUp(userInfo) {
    return this.request({method: 'POST', url: '/users', data: userInfo})
      .then((response) => {
        console.log(response)
        return response.data.success
      })
  }

  updateUser(updatedInfo){
    return this.request({method: 'PATCH', url:`/users/${this.getCurrentUser()._id}`, data: updatedInfo})
      .then((response) => {
        console.log(response)
        this.setToken(response.data.token)
        return response.data.success
      })
  }

  // run clear token method after running request to delete

  logIn(credentials) {
    return this.request({method: 'POST', url: '/authenticate', data: credentials})
      .then(response => {
        if(response.data.success) {
          const token = response.data.token
          this.setToken(token)
          return jwtDecode(token)
        } else {
          return false
        }
      })
  }

  getCurrentUser() {
    const token = this.getToken()
    return token ? jwtDecode(token) : null
  }

  deleteUser(){
    return this.request({method: 'Delete', url:`/users/${this.getCurrentUser()._id}`})

  }

  getToken() {
    // retrieve token from local storage:
    return localStorage.getItem('token')
  }

  setToken(token) {
    // save token to localStorage:
    localStorage.setItem('token', token)
    // tell axios to always include this token in headers:
    this.request.defaults.headers.common.token = token
    return token
  }

  clearToken() {
    // remove token from localStorage:
    localStorage.removeItem('token')

    // tell axios to stop sending with token:
    delete this.request.defaults.headers.common.token

  }
}

export default new AuthClient()
