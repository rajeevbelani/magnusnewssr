import { DOCTOR_LOAD } from '../actions'
import { fetchDoctors } from '../api/doctors'

export function loadDoctors () {
  return dispatch => (
    fetchDoctors().then(payload => {
      dispatch({ type: DOCTOR_LOAD, payload })
    })
  )
}
