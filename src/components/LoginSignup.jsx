import react, { useState } from "react";
import "./LoginSignup.css";


const LoginSignup = () => {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setSignup({ ...signup, [name]: value });
  };

  const PostData = async (e) => {
    //destructuring
    const { firstName, lastName, email, contactNo, password, cpassword } =signup;
    if(cpassword === password){
    await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName, 
        lastName, 
        email, 
        contactNo, 
        password
      }),
    });
  }else{
    window.alert('Enter same Password')
  }
  };

  return (
    <div className="form">

      <div className="Complaint">
        <p id="heading">Sign Up</p>
        <form className="login" >
          <input
            className="loginList"
            id="Fname"
            type="text"
            name="firstName"
            placeholder="first name"
            value={signup.firstName}
              onChange={handleInputs}
          />
          <input
            className="loginList"
            id="Lname"
            name="lastName"
            type="text"
            placeholder="last name"
            value={signup.lastName}
              onChange={handleInputs}
          />
          <input
            className="loginList"
            id="Femail"
            type="email"
            name="email"
            placeholder="Email"
            value={signup.email}
              onChange={handleInputs}
          />
          <input
            className="loginList"
            id="contact"
            type="number"
            name="contactNo"
            placeholder="Contact No."
            value={signup.contactNo}
              onChange={handleInputs}
          />
          <input
            className="loginList"
            id="pwd1"
            type="password"
            name="password"
            placeholder="Password"
            value={signup.password}
              onChange={handleInputs}
          />

          <input
            className="loginList"
            id="pwd2"
            type="password"
            name="cpassword"
            placeholder="Re-enter Password"
            value={signup.cpassword}
              onChange={handleInputs}
          />

          <button id="submitlogin" type="submit" onClick={PostData}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginSignup;
