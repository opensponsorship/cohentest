import React from 'react'

const DropDown = props =>
  <select name={props.type} defaultValue={props.value} >
    {props.choices.map((choice, i) => <option key={i} value={choice}>{choice}</option>)}
  </select>

export default DropDown
