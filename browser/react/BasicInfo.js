import React from 'react'

import TextField from './TextField'
import DropDown from './DropDown'
import { sports, nationalities } from './constants'

const BasicInfo = props => {
  return (
    <div>
      <form onSubmit={props.submitBasicInfo} >
        <TextField label='Name' type='name' value={props.name} />
        <DropDown choices={sports} type='sport' value={props.sport} />
        <DropDown choices={nationalities} type='nationality' value={props.nationality} />
        <DropDown choices={['Male', 'Female']} type='gender' value={props.gender} />
        <TextField label='Date of Birth' type='dob' value={props.dob} />
        <input type='submit' value='Next' />
      </form>
    </div>
  )
}

export default BasicInfo
