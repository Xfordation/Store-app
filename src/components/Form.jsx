import React from "react";
import { LoginForm } from "./styles/LoginForm.styles";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const Form = () => {
  // Email Validation
  const validateEmailRegex =
    /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

  //   Form State
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  //   Router
  const router = useRouter();

  //  Handle on Change
  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //   Handle on Submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.match(validateEmailRegex)) {
      toast.error("Please Enter a Valid Email or Name Field is Empty");
    } else {
      localStorage.setItem("userData", JSON.stringify(formData));
      router.push("/admin");
    }
  };
  return (
    <>
      <LoginForm onSubmit={handleOnSubmit}>
        <h2>Welcome, Login for free</h2>
        <p>Please enter your Name and Email to continue.</p>
        <div className="form-container">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Jon Doe"
            className="form-element"
            value={formData.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            className="form-element"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          disabled={
            formData.name.length > 1 && formData.email.match(validateEmailRegex)
              ? false
              : true
          }
        >
          Login
        </button>
      </LoginForm>
      <ToastContainer theme="dark" />
    </>
  );
};

export default Form;
