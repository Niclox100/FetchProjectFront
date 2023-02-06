
import axios from 'axios'

export const getAPI = async (url, token) => {
  const res = await axios.get(url)
  return res.data
}

export const postAPI = async (url) => {
  const res = await axios.post(url)
  return res.data
}

