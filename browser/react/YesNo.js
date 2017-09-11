import React from 'react'
import { ControlLabel, FormControl } from 'react-bootstrap'

const YesNo = props =>
  <div>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass='select' name={props.type} defaultValue={props.value} >
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    </FormControl>
  </div>

export default YesNo
