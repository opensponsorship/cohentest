import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

export default class Athletes extends Component {
  constructor(props){
    super(props)
    this.state = {
      athletes: []
    }
  }

  componentDidMount() {
    axios.get('/api/athletes')
    .then(res => this.setState({ athletes: res.data }))
    .catch(err => console.error(err))
  }

  render(){
    return(
      <div>
        <Table bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Association</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
          {this.state.athletes.map(athlete =>
            <tr key={athlete.id} >
              <td>{athlete.name}</td>
              <td>{athlete.association}</td>
              <td>{athlete.team}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    )
  }
}
