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

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setComplaint({ ...complaint, [name]: value });
  };

  const PostData = async (e) => {
    //destructuring
    const { title, description, location, contactNo, complainerName } =complaint;

    await fetch("http://localhost:4000/api/complaints", {
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
          onChange={handleInputs}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          value={complaint.description}
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={complaint.location}
          onChange={handleInputs}
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          name="contactNo"
          value={complaint.contactNo}
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="Enter your name"
          name="complainerName"
          value={complaint.complainerName}
          onChange={handleInputs}
        />
        <button id="submit" type="submit" onClick={PostData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Complaint;
