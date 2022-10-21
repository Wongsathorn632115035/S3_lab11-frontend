import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/auction?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/auction/' + id)
  },
  saveEvent(event) {
    return apiClient.post('/auction', event)
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
      'auction?_limit=' + perPage + '&_page=' + page + '&title=' + keyword
    )
  }
}
