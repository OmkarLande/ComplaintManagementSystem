const mongoose = require('mongoose');

// Define the Complaint Schema
const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
  },
  //photo
  photo: {
    type:String
  },
  name:{
    type: String,
    trim: true
  },
  //location(mapbox)
  location:{
    type:String,
    required: true,
    trim: true
  },
  contactNo: {
    type: Number,
    required:true
},
  status: {
    type: String,
    enum: ['open', 'in-progress', 'closed'], // You can customize status values
    default: 'open', // Set a default status
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Create the Complaint model
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
