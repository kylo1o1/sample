import React from 'react'
import * as formik from 'formik';
import { Button, Col, Form, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getData } from '../Redux/formSlice';
const DataForm = () => {
    const { Formik } = formik;
    const dispatch = useDispatch()
    const handleSubmit = (event)=>{
        const dat = event
        dispatch(getData(dat))
    }
  return (
    <Formik
    // validationSchema={schema}
    onSubmit={handleSubmit}
    initialValues={{
      expense: '',
      amount: '',
      id:0
     
    }}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Col sm={6} className='mx-auto my-5'>
        <Form noValidate onSubmit={handleSubmit}>
       
       <Form.Group as={Col} md="4" controlId="validationFormik01">
         <Form.Label>Expense</Form.Label>
         <Form.Control
           type="text"
           name="expense"
           value={values.expense}
           onChange={handleChange}
           isValid={touched.expense && !errors.expense}
         />
         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>
       <Form.Group as={Col} md="4" controlId="validationFormik02">
         <Form.Label>Amount</Form.Label>
         <Form.Control
           type="number"
           name="amount"
           value={values.amount}
           onChange={handleChange}
           isValid={touched.amount && !errors.amount}
         />

         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>
       <Button type='submit' className='mt-3'>Submit</Button>
       </Form>
      </Col>
    )}
    </Formik>

)
}

export default DataForm