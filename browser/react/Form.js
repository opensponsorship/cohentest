import React from 'react'
import axios from 'axios'

const Form = props => {
  const handleSubmit = e => {
    e.preventDefault()
    const athlete = {name: e.target.name.value, sport: e.target.sport.value, nationality: e.target.nationality.value, gender: e.target.gender.value, dob: e.target.dob.value}
    axios.post('/api/athletes', athlete)
    .catch(err => console.error(err))

  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        Name: <input type="text" name="name" /><br />
        Sport: <input type="text" name="sport" /><br />
        Nationality: <input type="text" name="nationality" /><br />
        Gender: <input type="text" name="gender" /><br />
        DOB: <input type="text" name="dob" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
