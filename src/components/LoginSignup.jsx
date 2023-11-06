import  { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [signup, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };

  const PostData = async () => {
    const { firstName, lastName, email, contactNo, password, cpassword } =
      signup;

    if (cpassword === password) {
      try {
        const response = await fetch("http://localhost:4000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            contactNo,
            password,
          }),
        });

        if (response.ok) {
          window.alert("Sign up successful. You can now log in.");
          window.location.href = "/";
          // window.location.href = '/login';
        } else {
          console.error("Complaint submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      window.alert("Enter the same password");
    }
  };

  return (
    <div className="form">
      <div className="Complaint">
        <p id="heading">Sign Up</p>
        <form className="login">
          <input
            className="loginList"
            id="Fname"
            type="text"
            name="firstName"
            placeholder="first name"
            value={signup.firstName}
            onChange={handleInputChange}
          />
          <input
            className="loginList"
            id="Lname"
            name="lastName"
            type="text"
            placeholder="last name"
            value={signup.lastName}
            onChange={handleInputChange}
          />
          <input
            className="loginList"
            id="Femail"
            type="email"
            name="email"
            placeholder="Email"
            value={signup.email}
            onChange={handleInputChange}
          />
          <input
            className="loginList"
            id="contact"
            type="number"
            name="contactNo"
            placeholder="Contact No."
            value={signup.contactNo}
            onChange={handleInputChange}
          />
          <input
            className="loginList"
            id="pwd1"
            type="password"
            name="password"
            placeholder="Password"
            value={signup.password}
            onChange={handleInputChange}
          />

          <input
            className="loginList"
            id="pwd2"
            type="password"
            name="cpassword"
            placeholder="Re-enter Password"
            value={signup.cpassword}
            onChange={handleInputChange}
          />

          <button id="submitlogin" type="button" onClick={PostData}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginSignup;
