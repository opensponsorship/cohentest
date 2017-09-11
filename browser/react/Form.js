import React from 'react'

import TextField from './TextField'

const Form = props => {
  return (
    <div>
      <form>
        {props.fields.map(field => <TextField name={field.name} />)}
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
