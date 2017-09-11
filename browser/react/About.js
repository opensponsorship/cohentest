import React from 'react'

import TextField from './TextField'
import YesNo from './YesNo'

const About = props => {
  return (
    <div>
      <form onSubmit={props.submitAbout} >
        <TextField label='Location' type='location' />
        <TextField label='Association' type='association' />
        <TextField label='Team' type='team' />
        <TextField label='About Me' type='about' />
        <TextField label='Charities' type='charities' />
        <YesNo type='married' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default About
