import { useState } from 'react'
import axios from 'axios'

const ROOT_URL = 'http://localhost:8080/'

const useAxios = (apiEndpoint: string) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = () => {
    setLoading(true)
    axios
      .get(`${ROOT_URL}/${apiEndpoint}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }
  return { data, loading, error, getData }
}

export default useAxios
