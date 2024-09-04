import React from 'react'
import { Button, Col,  Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dltData } from '../Redux/formSlice'
import { Link } from 'react-router-dom'

const DisplayData = () => {
    const formDaata = useSelector((state)=> state?.forms?.data ?? [])
    const total = useSelector((state)=> state?.forms?.total ?? '')

    const dispatch = useDispatch()
  return (
        <Col sm={7} className='mx-auto'>
            <Row>
                <Col>
                    Expense
                </Col>
                <Col>
                    Amount 
                </Col>
                <Col>
                    Edit/Delete 
                </Col>

            </Row>
    {formDaata.map((ele)=>(
        <Row className='mt-2' key={ele.id}>
            <Col>
                {ele.expense}
            </Col>
            <Col>
                {ele.amount} 
            </Col>
            <Col>
                <Button as={Link} to={`/editData/${ele.id}`} className='bg-gradient me-2'>
                    Edit
                </Button>
                <Button className='bg-danger' onClick={()=>(dispatch(dltData(ele)))} >
                    Delete
                </Button>
            </Col>

        </Row>
    ))}
            <Col sm={5} className='mx-auto'>
                <strong>Total : {total}</strong>
            </Col>
        </Col>
)
}

export default DisplayData