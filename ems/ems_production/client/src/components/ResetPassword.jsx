

import React, { useState } from "react";
import "./AdminLogin.css";
import { useEffect } from "react";
// import './resetPassword.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from a popular icon library
import axios from "axios";
import { useNavigate,useLocation} from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    confirm: "",
  };
  useEffect(() => {
   
    const queryParams = new URLSearchParams(location.search);
    const tokenFromQuery = queryParams.get("token");

    if (tokenFromQuery) {
      // If token is present in the query, set it in the local storage
      localStorage.setItem("token", tokenFromQuery);
    }
  }, [location.search]);
  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      console.log("values::", values);
      const token = localStorage.getItem("token");
      if(token){

      var response = await axios.post(`http://localhost:5000/reset-password`, values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    else{
      var response = await axios.post(`http://localhost:3000/reset-password`, values,
      {
        headers: {
          Authorization: `Bearer ${tokenFromQuery}`,
        },
      });
    }
      console.log("Reset password:", response.data);
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
       console.log("token in reset:", token);

        localStorage.setItem("token", token);
        navigate('/login')
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
           
              password: string()
                .required("Required")
                .min(6, "Password is too short - should be 6 chars minimum"),
              confirm: string()
                .required("Required")
                .min(6, "Password is too short - should be 6 chars minimum"),
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
                    You have received a one-time password, please reset your
                    password for another login !!
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
                  {/* <div className="form-group text-center">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      Password
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                      />
                      <span onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>
                    {backendError.name_empty && (
                      <div>{backendError.name_empty}</div>
                    )}
                  </div> */}

                  <div className="form-group text-center">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      New Password
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                      />
                      <span onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>
                    {backendError.password_empty && (
                      <div>{backendError.password_empty}</div>
                    )}
                    
                  </div>
                  <div className="form-group text-center">
                    <label
                      htmlFor="confirm"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      Confirm Password
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="confirm"
                        name="confirm"
                        className="form-control"
                      />
                       <span onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>
                    {backendError.password_empty && (
                      <div>{backendError.password_empty}</div>
                    )}
                    
                  </div>
                  <div className="text-center">
                    {/* <Link to="/login"> */}
                      <button
                        className="btn btn-success m-3"
                        type="submit"
                      >
                        Change
                      </button>
                    {/* </Link> */}
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
