import React from 'react'
import * as formik from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { editData } from '../Redux/formSlice';

const EditData = () => {
    const { Formik } = formik;
    const {id} = useParams()
    const data = useSelector((state)=>state?.forms?.data ?? [])
    const thisData = data.find((ele)=> ele.id === Number(id))
    console.log('lol',thisData);
    
    const dispatch = useDispatch()
    const navg = useNavigate()
    const handleSubmit = (event)=>{
        dispatch(editData(event))
        navg('/')        
    }
  return (
    <Formik
    // validationSchema={schema}
    onSubmit={handleSubmit}
    initialValues={{
      expense: thisData.expense,
      amount: thisData.amount,
      id:thisData.id
     
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

export default EditData