import useAxios from '~/hooks/useAxios'

export const GET_PATIENTS = 'get_patients'
export const GET_PATIENT = 'get_patient'
export const POST_PATIENT = 'post_patient'
export const PUT_PATIENT = 'put_patient'
export const DELETE_PATIENT = 'delete_patient'

export function getPatients() {
  const { data, error, getData } = useAxios(`patients`)

  getData()

  if (error != null) {
    return {
      type: GET_PATIENTS,
      payload: error,
    }
  }

  return {
    type: GET_PATIENTS,
    payload: data,
  }
}

export function getPatient(id: string) {
  const { data, error, getData } = useAxios(`patients/${id}`)

  getData()

  if (error != null) {
    return {
      type: GET_PATIENT,
      payload: error,
    }
  }

  return {
    type: GET_PATIENT,
    payload: data,
  }
}
