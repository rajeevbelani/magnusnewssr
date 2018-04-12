import 'whatwg-fetch'
import { requestWatcher, parseJSON } from './utils'

export function addEnquiry (payload) {
  console.log(`Adding Enquiry :: ${payload}`)
  return fetch('http://magnusapi.herokuapp.com/enquiry', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: payload
  }).then(parseJSON)
}
