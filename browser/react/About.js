import React from 'react'

import TextField from './TextField'
import YesNo from './YesNo'
import BackButton from './BackButton'
import NextButton from './NextButton'

const About = props =>
  <div>
    <h3>More About You</h3>
    <form onSubmit={props.submitAbout} id='about' >
      <TextField label='Location' type='location' text='input' value={props.location} />
      <TextField label='Association' type='association' text='input' value={props.association} />
      <TextField label='Team' type='team' text='input' value={props.team} />
      <TextField label='About Me' type='about' text='textarea' value={props.about} />
      <YesNo label='Are you married?' type='married' value={props.married} />
    </form>
    <BackButton address='/welcome' />
    <NextButton form='about' />
  </div>

export default About
