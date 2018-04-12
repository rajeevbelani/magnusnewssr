import React, { Component, PropTypes } from 'react'
import Layer from 'grommet/components/Layer'
import Box from 'grommet/components/Box'
import Spinning from 'grommet/components/icons/Spinning'

export default class LoadingIndicator extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    let loadingNode
    if (this.props.modal) {
      loadingNode = (
        <Layer flush={false} align="center">
          <Box
            direction="row"
            responsive={false}
            pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
          >
            <Spinning /><span>{this.props.message}</span>
          </Box>
        </Layer>
      )
    } else {
      loadingNode = (
        <Box
          direction="row"
          responsive={false}
          pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
        >
          <Spinning /><span>{this.props.message}</span>
        </Box>
      )
    }

    return loadingNode
  }
}

// LoadingIndicator.defaultProps = {
//   modal: false,
//   message: 'Loading...Please Wait'
// }

// LoadingIndicator.propTypes = {
//   modal: PropTypes.bool,
//   message: PropTypes.string
// }
