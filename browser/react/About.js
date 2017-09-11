import React from 'react'
import { Link } from 'react-router'

import TextField from './TextField'
import YesNo from './YesNo'

const About = props => {
  return (
    <div>
      <form onSubmit={props.submitAbout} >
        <TextField label='Location' type='location' value={props.location} />
        <TextField label='Association' type='association' value={props.association} />
        <TextField label='Team' type='team' value={props.team} />
        <TextField label='About Me' type='about' value={props.about} />
        <TextField label='Charities' type='charities' value={props.charities}/>
        <YesNo type='married' value={props.married} />
        <Link to='/welcome'>Back</Link>
        <input type='submit' value='Next' />
      </form>
    </div>
  )
}

export default About
