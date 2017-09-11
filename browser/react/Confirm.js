import React from 'react'
import { Button } from 'react-bootstrap'

import Entries from './Entries'
import BackButton from './BackButton'

const Confirm = props => {
  return (
    <div>
      <h3>Confirm Details</h3>
      <Entries {...props} />
      <BackButton address='/about' />
      <Button onClick={props.submitForm} bsStyle='link'>Submit</Button>
    </div>
  )
}

export default Confirm
