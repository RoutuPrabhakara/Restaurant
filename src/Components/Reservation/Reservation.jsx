import React, { useState } from 'react'
import './Reservation.css'
import axios from 'axios';
function Reservation() {
  const [formData,SetFormData]=useState({
    name:'',
    email:'',
    phone:'',
    date:'',
    time:'',
    guests:1
  })
  const handleChange=(e)=>{
    SetFormData({...formData,[e.target.name]:e.target.value})
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await axios.post('',formData)
      alert('Reservation  Successfull')
    } catch (error) {
      console.error("Error Making reservation",error)
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="col-md-6 m-auto border-3 mt-4 mb-4 ">
          <div className="fs-3 text-success text-center fw-blod mt-4 text-capitalize">Reservation Table</div>
          <form onSubmit={handleSubmit} className='was-validated'>
                 <div className="">
                 <label htmlFor="Name">Name</label>
                  <input type="text" className='form-control' id='Name' name='name'  value={formData.name} placeholder='Enter Name' onChange={handleChange} required/>
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">Please fill out this feild</div>
                 </div>

                 <div className="">
                 <label htmlFor="email">Email</label>
                  <input type="email" className='form-control' id='email' name='email'  value={formData.email} placeholder='Enter email' onChange={handleChange} required/>
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">Please fill out this feild</div>
                 </div>
                 <div className="">
                 <label htmlFor="phone">Phone number</label>
                  <input type="tel" className='form-control' id='phone' name='phone' value={formData.phone} placeholder='Enter phone number' onChange={handleChange} required/>
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">Please fill out this feild</div>
                 </div>
                 <div className="">
                 <label htmlFor="date">Date</label>
                  <input type="date" className='form-control' id='date' name='date' value={formData.date} placeholder='Enter date' onChange={handleChange} required/>
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">Please fill out this feild</div>
                 </div>
                 <div className="">
                 <label htmlFor="time">Time</label>
                  <input type="time" className='form-control' id='time' name='time' value={formData.time} placeholder='Enter time' onChange={handleChange} required/>
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">Please fill out this feild</div>
                 </div>
                 <div className="">
                 <label htmlFor="guests">Guests</label>
                  <input type="number" className='form-control' id='guests' min={1}  max={10} name='guests'  value={formData.guests}placeholder='Enter guests numbers' onChange={handleChange} required/>
                  <div className="valid-feedback">Valid</div>
                  <div className="invalid-feedback">Please fill out this feild</div>
                  <button className='btn btn-success text-white text-center' type='submit'>Reserve Table</button>
                 </div>
          </form>
        </div>

        
      </div>
    </div>
  )
}

export default Reservation