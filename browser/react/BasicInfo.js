import React from 'react'

import TextField from './TextField'
import DropDown from './DropDown'
import NextButton from './NextButton'
import { sports, nationalities } from './constants'

const BasicInfo = props =>
  <div>
    <h3>The Basics</h3>
    <form onSubmit={props.submitBasicInfo} id='basic' >
      <TextField label='Name' type='name' text='input' value={props.name} />
      <DropDown label='Sports' choices={sports} type='sport' value={props.sports} multiple={true} />
      <DropDown label='Nationality' choices={nationalities} type='nationality' value={props.nationality} multiple={false} />
      <DropDown label='Gender' choices={['Male', 'Female']} type='gender' value={props.gender} />
      <TextField label='Date of Birth' type='dob' text='input' value={props.dob} />
    </form>
    <NextButton form='basic' />
  </div>

export default BasicInfo
