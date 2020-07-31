import axios from 'axios'
const baseUrl = '/api/userLogin'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const getAll = () => {
  const request = axios.get('/api/login')
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const response = await axios.post('/api/login', newObject)

  return response.data
}

export default { login, create, getAll }
