import { useState } from "react";
import "./Login.css";
import FormInput from "./components/FormInput";
import Image570 from "../../../Images/570.jpg";
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <img className="ImageLog" src={Image570} alt="" />
      <form className="Form" onSubmit={handleSubmit}>
        <div className="contenttt">
          <h2 className="YieShop">Register</h2>
        </div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <a className="Login">
          <button className="Shoping-login">Register</button>
          <i className="Shoping-i-Login"></i>
        </a>
        <a className="Login">
          <span className="Login-span-Login">Login</span>
          <i className="Login-i"></i>
        </a>
        <a className="haveaccount">Have an account already? Press log-in</a>
        <div className="facebook-Twitter">
          <a className="Shoping-Login-Bigger">
            <span className="Shoping-span-Login">
              Login with <span className="facebook"> Facebook </span>
            </span>
            <i className="Shoping-i-Login"></i>
          </a>
          <a className="Shoping-Login-Bigger">
            <span className="Shoping-span-Login">
              Login with <span className="facebook"> Twitter </span>
            </span>
            <i className="Shoping-i-Login"></i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
