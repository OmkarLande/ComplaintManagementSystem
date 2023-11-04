// Import necessary modules and models
const Complaint = require('../models/complaint');
const mailSender = require('../utils/mailSender')
const {complaintSender} = require("../template/complaintSender")
const User = require("../models/user")

// Controller function to create a new complaint
exports.createComplaint = async (req, res) => {
  try {
    
    const { title, description, location, contactNo , complainerName } = req.body;


    const complaint = new Complaint({
      title,
      description,
      status: 'open',
      location,
      contactNo,
      complainerName
    });

    //send Mail
      try{
        const emailResponse = await mailSender(
            "nagresharayu@gmail.com", complaint.title,complaintSender(
                complaint.complainerName, complaint.contactNo, complaint.title, complaint.description, complaint.location),
                );
                console.log("Email sent successfully: ", emailResponse.response)
        }
    catch(error){
        console.log("Error while sending email:", error);
        return res.status(501).json({
          success:false,
          message:'Error occured while sending email',
          error:error.message,
        });
      }
    
      const savedComplaint = await complaint.save();
      res.status(201).json(savedComplaint);

  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'An error occurred while creating the complaint.' });
  }
};

// Controller function to get a list of complaints
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json(complaints);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while retrieving complaints.' });
  }
};

// Controller function to update the status of a complaint
exports.updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const complaintId = req.params.id;

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      complaintId,
      { status },
      { new: true }
    );

    if (!updatedComplaint) {
      return res.status(404).json({ error: 'Complaint not found.' });
    }
    //email to police

    res.status(200).json(updatedComplaint);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating the complaint status.' });
  }
};
