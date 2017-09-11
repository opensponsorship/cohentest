import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import axios from 'axios'

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
      sport: '',
      about: '',
      charities: '',
      married: false
    }
    this.submitForm = this.submitForm.bind(this)
    this.submitBasicInfo = this.submitBasicInfo.bind(this)
    this.submitAbout = this.submitAbout.bind(this)
  }
  submitForm(e) {
    e.preventDefault()
    const athlete = {
      name: this.state.name,
      sport: this.state.sport,
      nationality: this.state.nationality,
      gender: this.state.gender,
      dob: this.state.dob,
      location: this.state.location,
      association: this.state.association,
      team: this.state.team,
      about: this.state.about,
      charities: this.state.charities,
      alcohol: this.state.alcohol,
      married: this.state.married
    }
    axios.post('/api/athletes', athlete)
    .catch(err => console.error(err))
  }
  submitBasicInfo(e) {
    e.preventDefault()
    this.setState({
      name: e.target.name.value,
      sport: e.target.sport.value,
      gender: e.target.gender.value,
      nationality: e.target.nationality.value,
      dob: e.target.dob.value
    })
    browserHistory.replace('/about')
  }
  submitAbout(e) {
    e.preventDefault()
    this.setState({
      location: e.target.location.value,
      association: e.target.association.value,
      team: e.target.team.value,
      about: e.target.about.value,
      charities: e.target.charities.value,
      married: e.target.married.value
    })
    browserHistory.replace('/confirm')
  }
  render(){
    const sendToProps = Object.assign({}, this.state, {
      submitBasicInfo: this.submitBasicInfo,
      submitAbout: this.submitAbout,
      submitForm: this.submitForm
    });
    return (
      <div>
        {
          this.props.children && React.cloneElement(this.props.children, sendToProps)
        }
        </div>
    )
  }
}
