import React from 'react'

import TextField from './TextField'
import DropDown from './DropDown'

const Confirm = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.gender}</p>
      <p>{props.team}</p>
      <p>{props.location}</p>
      <p>{props.association}</p>
      <p>{props.charities}</p>
      <p>{props.about}</p>
      <p>{props.married}</p>
      <p>{props.sport}</p>
      <p>{props.dob}</p>
      <p>{props.nationality}</p>
      <button onClick={props.submitForm}>Submit</button>
    </div>
  )
}

export default Confirm

      // name: '',
      // dob: '',
      // nationality: '',
      // location: '',
      // association: '',
      // team: '',
      // gender: '',
      // sport: '',
      // about: '',
      // charities: '',
      // married: false
