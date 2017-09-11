import React from 'react'
import { ControlLabel, FormControl } from 'react-bootstrap'

const TextField = props =>
  <div>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl componentClass={props.text} defaultValue={props.value} name={props.type} />
  </div>

export default TextField
