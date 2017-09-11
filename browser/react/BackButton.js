import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

const BackButton = props =>
  <Link to={props.address}>
    <Button bsStyle='link'>Back</Button>
  </Link>

export default BackButton
