import Axios from 'axios'
const baseUrl = '/api/login'

const create = async (newObject) => {
  const response = await Axios.post(baseUrl, newObject)

  return response.data
}

const getAll = () => {
  const request = Axios.get(baseUrl)
  return request.then((response) => response.data)
}

export default {
  create,
  getAll,
}
