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
    
   <div className='container-fluid p-3'>
   
  <div className="ri">
    <div className="col-md-6 m-auto">
    <div className="card p-3 ">
    <div className=" conatiner-fluid">
    <h3 className='text-center text-dark text-uppercase p-1'>Reservation Table</h3>
      <form action="" onSubmit={handleSubmit} className='was-validated'>
       <div className="">
       <label htmlFor="Name">Name</label>
       <input type="text" id='Name' name='name'  className='form-control' value={formData.name} required onChange={handleChange}/>
       <div className='valid-feedback fw-bold'>Valid.</div>
       <div className='invalid-feedback fw-bold'>Please fill out this field.</div>
       </div>

       <div className="">
       <label htmlFor="email">Email</label>
       <input type="text" id='email' name='email'  className='form-control' value={formData.email}  required onChange={handleChange} />
       <div class="valid-feedback fw-bold">Valid.</div>
       <div class="invalid-feedback fw-bold">Please fill out this field.</div>
       </div>

       <div className="">
       <label htmlFor="phone">Phone</label>
       <input type="text" id='phone' name='phone'  className='form-control' value={formData.phone} required onChange={handleChange}/>
       <div class="valid-feedback fw-bold">Valid.</div>
       <div class="invalid-feedback fw-bold">Please fill out this field.</div>
       </div>

       <div className="">
       <label htmlFor="date">Date</label>
       <input type="date" id='date' name='date'  className='form-control' value={formData.date} required onChange={handleChange}/>
       <div class="valid-feedback fw-bold">Valid.</div>
       <div class="invalid-feedback fw-bold">Please fill out this field.</div>
       </div>

       <div className="">
       <label htmlFor="time">Time</label>
       <input type="time" id='time' name='time'  className='form-control' value={formData.time} required onChange={handleChange}/>
       <div class="valid-feedback fw-bold">Valid.</div>
       <div class="invalid-feedback fw-bold">Please fill out this field.</div>
       </div>
       <div className="">
       <label htmlFor="guests">Guests</label>
       <input type="number" id='guests' name='guests'  className='form-control' value={formData.guests} required onChange={handleChange}/>
       <div class="valid-feedback fw-bold">Valid.</div>
       <div class="invalid-feedback fw-bold">Please fill out this field.</div>
       <button className='btn btn-success text-center'>Reserve Table</button>
       </div>
      
      
      
      
      
      </form>
    </div>
    </div>
    </div>
  </div>
   </div>
  )
}

export default Reservation