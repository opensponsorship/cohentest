import React from 'react'

const YesNo = props =>
  <select name={props.type} defaultValue={props.value} >
    <option value={true}>Yes</option>
    <option value={false}>No</option>
  </select>

export default YesNo
