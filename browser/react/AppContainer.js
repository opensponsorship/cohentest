import React, { Component } from 'react'
import axios from 'axios'

import Form from './Form'

export default class AppContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      dob: '',
      nationality: '',
      location: '',
      association: '',
      team: '',
      gender: '',
      sports: '',
      about: '',
      interests: '',
      charities: '',
      handles: '',
      pets: '',
      alcohol: false,
      married: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const athlete = {
      name: this.state.name,
      sport: this.state.sport,
      nationality: this.state.nationality,
      gender: this.state.gender,
      dob: this.state.dob
    }
    axios.post('/api/athletes', athlete)
    .catch(err => console.error(err))
  }
  render(){
    return (
      <Form fields={[{name: 'name'}, {name: 'team'}]} />
    )
  }
}
