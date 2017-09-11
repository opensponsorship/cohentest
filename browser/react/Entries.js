import React from 'react'

import Entry from './Entry'

const Entries = props => {
  return (
    <div>
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
    </div>
  )
}

export default Entries
