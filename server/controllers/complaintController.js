// Import necessary modules and models
const Complaint = require('../models/complaint');
const mailSender = require('../utils/mailSender')
const {complaintSender} = require("../template/complaintSender")
const User = require("../models/user")

// Controller function to create a new complaint
exports.createComplaint = async (req, res) => {
  try {
    
    const { title, description, location, contactNo , name } = req.body;
    // const userId = req.user.id; // Modify this according to your authentication method.

    // if (!req.user || !req.user.id) {
    //   return res.status(401).json({ error: 'User not authenticated.' });
    // }

    // const userId = req.user.id;

    // const user = await User.findById(userId);

    // if (!user) {
    //   return res.status(404).json({ error: 'User not found.' });
    // }

    const complaint = new Complaint({
      title,
      description,
      status: 'open', // Set an initial status (customize as needed)
      location,
      contactNo,
      name
    });

    //send Mail
      try{
        const emailResponse = await mailSender(
            "nagresharayu@gmail.com", complaint.title,complaintSender(
                complaint.name, complaint.contactNo, complaint.title, complaint.description, complaint.location),
                );
                console.log("Email sent successfully: ", emailResponse.response)
        }
    catch(error){
        console.log("Error while sending email:", error);
        return res.status(500).json({
          success:false,
          message:'Error occured while sending email',
          error:error.message,
        });
      }
    
      const savedComplaint = await complaint.save();
      res.status(201).json(savedComplaint);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while creating the complaint.' });
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
