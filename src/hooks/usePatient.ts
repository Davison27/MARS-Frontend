import axios from 'axios'
import { useCallback, useState } from 'react'

const ROOT_URL = 'http://localhost:8080/patient'

const usePatient = (id: string, payload) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const get = useCallback(() => {
    setLoading(true)
    ;async () => {
      try {
        await axios.get(`${ROOT_URL}/${id}`).then((response) => {
          setData(response.data)
        })
        return { data }
      } catch (error) {
        setError(error)
        return { error }
      } finally {
        setLoading(false)
      }
    }
  }, [data])

  const create = useCallback(() => {
    setLoading(true)
    ;async () => {
      try {
        await axios.post(`${ROOT_URL}/${id}`, payload).then((response) => {
          setData(response.data)
        })
        return { data }
      } catch (error) {
        setError(error)
        return { error }
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const edit = useCallback(() => {
    setLoading(true)
    ;async () => {
      try {
        await axios.put(`${ROOT_URL}/${id}`, payload).then((response) => {
          setData(response.data)
        })
        return { data }
      } catch (error) {
        setError(error)
        return { error }
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const remove = useCallback(() => {
    setLoading(true)
    ;async () => {
      try {
        await axios.delete(`${ROOT_URL}/${id}`).then((response) => {
          setData(response.data)
        })
        return { data }
      } catch (error) {
        setError(error)
        return { error }
      } finally {
        setLoading(false)
      }
    }
  }, [])

  return { get, create, edit, remove }
}

export default usePatient
