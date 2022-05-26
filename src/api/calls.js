import axios from "./axios"

export const getData = async () => {
  try {
    const response = await axios('/data')
    return response.data
  } catch (e) {
    throw e.message
  }
}

export const updateItem = async (id, data) => {
  try {
    const response = await axios.put(`/data/${id}`, data)
    return response.data
  } catch (e) {
    throw e.message
  }
}
