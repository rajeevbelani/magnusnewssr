import React from 'react'
import { withRouteData, Link } from 'react-static'

//

export default withRouteData(({ doctor }) => (
  <div>
    <Link to="/hospitals/">{'<'} Back</Link>
    <br />
    <h3>{doctor.name}</h3>
  </div>
))
