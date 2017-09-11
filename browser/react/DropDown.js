import React from 'react'
import { ControlLabel, FormControl } from 'react-bootstrap'

const DropDown = props =>
  <div>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl name={props.type} defaultValue={props.value} componentClass='select' multiple={props.multiple} >
      {props.choices.map((choice, i) => <option key={i} value={choice}>{choice}</option>)}
    </FormControl>
  </div>

export default DropDown
