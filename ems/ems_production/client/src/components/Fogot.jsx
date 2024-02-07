

import React, { useState } from "react";
import "./AdminLogin.css";
// import './resetPassword.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import axios from "axios";
import { useNavigate} from "react-router-dom";

export default function Forgot() {
  const navigate = useNavigate();
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: ""
   
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      console.log("values::", values);
      

      const response = await axios.post(`http://localhost:3000/forgot-password`, values,
      {
        
      });
    
   
      console.log("forgot password:", response.data);
console.log("response",response)
      // alert("your password is changed");

      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.message);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
        const token = response.data.data;
       console.log("token in forgot password:", token);

        localStorage.setItem("token", token);
        // navigate('')
      }
      resetForm();
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      console.log("error", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="lgfrm">
        <div
          className="container mx-auto col-sm-12 col-md-12 col-lg-5 justify-content-center"
        >
          <h1
            className="m-5"
            style={{ color: "green", fontSize: "30px", textAlign: "center" }}
          >
            Reset Your Password
          </h1>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={object().shape({
              email: string().email().required("Required"),
           
             
            })}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <div
                  className="shadow-lg bg-body rounded"
                  style={{ backgroundColor: "white", opacity: 0.75 }}
                >
                  <p
                    className="m-3"
                    style={{ fontFamily: "serif", fontSize: "14px" }}
                  >
                  If you forgot password please enter your mail id and we will send password reset url to your email then you can reset password.
                  </p>
                  <div className="form-group text-center">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      Email
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>
                    {backendError.email && <div>{backendError.email}</div>}
                    {backendError.email_empty && (
                      <div>{backendError.email_empty}</div>
                    )}
                    {backendError.email_invalid && (
                      <div>{backendError.email_invalid}</div>
                    )}
                  </div>
                  
                  <div className="text-center">
                      <button
                        className="btn btn-success m-3"
                        type="submit"
                      >
                        Send
                      </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
