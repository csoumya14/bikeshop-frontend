import Axios from 'axios'
const baseUrl = '/api/users'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = Axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await Axios.post(baseUrl, newObject, config)

  return response.data
}

const update = (id, newObject) => {
  const request = Axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const remove = (id) => {
  const request = Axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}

export default {
  getAll,
  create,
  update,
  remove,
  setToken,
}
