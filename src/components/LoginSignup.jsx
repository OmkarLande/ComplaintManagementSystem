import react, { useState } from 'react'
import './LoginSignup.css'
// import user_icon from './Assets/person.png'
// import email_icon from './Assets/email.png'
// import password_icon from './Assets/password.png'

const LoginSignup = () =>{
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
        <div className="form">

            {/* <form>
            <lable class="lb1">Uername: </lable>
            <input class="in" type="text" id="nm" name="nm" required />

            <lable class="lb1">Email: </lable>
            <input type="email" class="in" id="em" name="em" required />

            <lable class="lb1">Password: </lable>
            <input type="password" class="in" id="pwd" name="pwd" required />

            <label class="lb1" for="rm">Remember me?</label> <input type="checkbox" />
            <input type="submit" class="#signUpBtn" id="signUpSubmit" value="SignUp" />
            </form> */}


<div className="Complaint">
      <p id="heading">Sign Up</p>
      <form className='login' onSubmit={handleSubmit}>
        <input className='loginList' id="Fname"
          type="text"
          placeholder="Full_name"
          value={title}
        //   onChange={handleTitleChange}
        />
        <input className='loginList' id="Femail"
          type="email"
          placeholder="Email"
          value={address}
        //   onChange={handleAddressChange}
        />

        <input className='loginList' id="pwd1"
          type="password"
          placeholder="Password"
          value={address}
        //   onChange={handleAddressChange}
        />

        <input className='loginList' id="pwd2"
          type="password"
          placeholder="Re-enter Password"
          value={address}
        //   onChange={handleAddressChange}
        />
       
        <button id="submitlogin" type="submit">Create Account</button>
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

        </div>
    )
}
export default LoginSignup;