import React from 'react'
import { Button } from 'react-bootstrap'

import Entry from './Entry'
import BackButton from './BackButton'

const Confirm = props => {
  return (
    <div>
      <h3>Confirm Details</h3>
      <Entry type='Name' value={props.name} />
      <Entry type='Gender' value={props.gender} />
      <Entry type='Date of Birth' value={props.dob} />
      <Entry type='Nationality' value={props.nationality} />
      <Entry type='Location' value={props.location} />
      <Entry type='Sports' value={props.sports} />
      <Entry type='Association' value={props.association} />
      <Entry type='Team' value={props.team} />
      <Entry type='Marital Status' value={props.married === true ? 'Married' : 'Single'} />
      <Entry type='About Me' value={props.about} />
      <BackButton address='/about' />
      <Button onClick={props.submitForm} bsStyle='link'>Submit</Button>
    </div>
  )
}

export default Confirm
