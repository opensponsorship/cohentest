import React from 'react'

import TextField from './TextField'
import DropDown from './DropDown'
import { sports, nationalities } from './constants'

const BasicInfo = props => {
  return (
    <div>
      <form onSubmit={props.submitBasicInfo} >
        <TextField label='Name' type='name' />
        <DropDown choices={sports} type='sport' />
        <DropDown choices={nationalities} type='nationality' />
        <DropDown choices={['Male', 'Female']} type='gender' />
        <TextField label='Date of Birth' type='dob' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default BasicInfo
