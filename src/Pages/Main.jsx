import React from 'react'
import DataForm from '../Components/DataForm'
import DisplayData from '../Components/DisplayData'
import { Container } from 'react-bootstrap'

const Main = () => {
  return (
    <Container>
        <DataForm/>
        <DisplayData/>
    </Container>
)
}

export default Main