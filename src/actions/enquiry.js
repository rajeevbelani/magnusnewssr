import { addEnquiry } from '../api/enquiry'

export function addNewEnquiry (enquiry, done) {
//   return dispatch => {
  //   console.log('before dispatch add new campaign');
  addEnquiry(JSON.stringify(enquiry)).then(payload => {
    console.log('before calling done')
    done()
  })
//   }
}
