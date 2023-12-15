import axios from 'axios'
import { useState } from 'react'
import { Patients } from '~/types/patients'

const ROOT_URL = 'http://localhost:8080/'

const usePatients = () => {
  const [data, setData] = useState<Patients[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)

  ;async () => {
    await axios
      .get(`${ROOT_URL}/patients`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }

  return { data, loading, error }
}

export default usePatients
