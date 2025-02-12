const express = require('https')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://routuprabhakar2000:routu123@cluster0.0o7o8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const reservationSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    date:String,
    time:String,
    guests:Number

})

const Reservation = mongoose.model('Reservation',reservationSchema)

app.post('/reservation',async(req,res)=>{
    const newReservation = new Reservation(req,body)
    await newReservation.save()
    res.status(201).send(newReservation)
})


app.listen(5000,()=>console.log('Server is on port 5000'))