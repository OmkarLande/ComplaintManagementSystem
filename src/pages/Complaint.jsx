import React, { useState } from "react";
import "../components/Complaint.css";

const Complaint = () => {
  const [complaint, setComplaint] = useState({
    title: "",
    description: "",
    location: "",
    contactNo: "",
    complainerName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaint({
      ...complaint,
      [name]: value,
    });
  };

  const PostData = async () => {
    const { title, description, location, contactNo, complainerName } =
      complaint;

    try {
      const response = await fetch("http://localhost:4000/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          location,
          contactNo,
          complainerName,
        }),
      });

      if (response.ok) {
        window.alert("Complaint submitted successfully.");
        window.location.href = "/allcomplaints";
        console.log("Complaint submitted successfully");
      } else {
        console.error("Complaint submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Complaint">
      <p id="heading">Complaint</p>
      <form className="complaintForm">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={complaint.title}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          value={complaint.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={complaint.location}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          name="contactNo"
          value={complaint.contactNo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter your name"
          name="complainerName"
          value={complaint.complainerName}
          onChange={handleInputChange}
        />
        <button id="submit" type="button" onClick={PostData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Complaint;
