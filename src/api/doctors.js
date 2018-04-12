import { requestWatcher, parseJSON } from './utils'

export function fetchDoctors () {
  return fetch('http://magnusapi.herokuapp.com/doctor')
    .then(parseJSON)
}
