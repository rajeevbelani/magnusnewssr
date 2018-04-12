import { requestWatcher, parseJSON } from './utils'

export function fetchHospitals () {
  return fetch('http://magnusapi.herokuapp.com/hospital')
    .then(parseJSON)
}
