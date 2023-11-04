import React, { useState } from 'react';
// import './Complaint.css'
import '../components/Complaint.css'
const Complaint = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [complaint, setComplaint] = useState('');
  const [image, setImage] = useState(null);
  const [complaints, setComplaints] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || address.trim() === '' || complaint.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const newComplaint = {
      title: title,
      address: address,
      text: complaint,
      image: image,
    };

    setComplaints([...complaints, newComplaint]);

    // Reset form fields
    setTitle('');
    setAddress('');
    setComplaint('');
    setImage(null);
  };

  return (
    <div className="Complaint">
      <p id="heading">Complaint</p>
      <form className='complaintForm' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Location"
          value={address}
          onChange={handleAddressChange}
        />
        <textarea
          placeholder="Enter your complaint here"
          value={complaint}
          onChange={handleComplaintChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button id="submit" type="submit">Submit</button>
      </form>
      <h2>Complaints</h2>
      <ul>
        {complaints.map((item, index) => (
          <li key={index}>
            <p><strong>Title:</strong> {item.title}</p> 
            <p><strong>Address:</strong> {item.address}</p>
            <p>{item.text}</p>
            {item.image && (
              <img
                src={URL.createObjectURL(item.image)}
                alt={`Complaint ${index}`}
                width="200"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Complaint;
