import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SuccessDelete from "./SuccessDelete";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";
import SuccessComponent from "./SuccessComponent";

function ProfileComponent() {
  const { id } = useParams("");
console.log("id in employee:",id)
  // const [editData, setEditData] = useState({});
  // const [update, setUpdate] = useState(null);
 
  const [error, setError] = useState(false);

  // const [validationMessage, setValidationMessage] = useState();
  const [backendErrors, setBackendErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const [userData,setuserData]=useState({});
  useEffect(() => {
      getprofile();
    }, []);
    const getprofile = async () =>{
  
      try{
        console.log("call getprofile")
        const token=localStorage.getItem('token')
        console.log("token:",token)
  
        const response = await axios.get(
          'http://localhost:5000/myprofile',
          
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // formik.setValues(response.data.data);
        setuserData(response.data.data);
  
      }
      catch{
        if (error.response && error.response.status === 404) {
          //  not found error
          console.log("user not  found");
        } else {
        
          console.error("Error fetching  details:", error);
        }
      }finally {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    
    }



 

  


  return (
    <>
    <div>
      {loading?(<Loading/>):(
        <div>
      <h3 style={{ textAlign: "center", padding: 20, color: "white" }}>
        {/* Details of {initialValues.name} */}
      </h3>
      <div className="regfrm">
        <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
          <form >
            <div
              className="shadow-lg bg-body rounded"
              style={{ backgroundColor: "white", opacity: 0.75 }}>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  value={userData.name}
                />
                {/* {formik.touched.name && formik.errors.name && (
                  <div style={{ color: "red" }}>{formik.errors.name}</div>
                )}
                {backendErrors.name_empty && (
                  <div>{backendErrors.name_empty}</div>
                )}
                {backendErrors.name && <div>{backendErrors.name}</div>} */}
              </div>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={userData.email}
                />
                {/* {formik.touched.email && formik.errors.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}
                {backendErrors.email_empty && <div>{backendErrors.email_empty}</div>}
                {backendErrors.email && <div>{backendErrors.email}</div>}
                {backendErrors.email_invalid && <div>{backendErrors.email_invalid}</div>}
                {backendErrors.email_exist && (
                  <div>{backendErrors.email_exist}</div>
                )} */}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control"
                  value={userData.phone}
                />
                {/* {formik.touched.phone && formik.errors.phone && (
                  <div style={{ color: "red" }}>{formik.errors.phone}</div>
                )} */}
              </div>

              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="district" className="form-label">
                  District
                </label>
                <input
                  id="district"
                  name="district"
                  type="district"
                  className="form-control"
                  // {...formik.getFieldProps("district")}
                  value={userData.district}
                />
                {/* {formik.touched.district && formik.errors.district && (
                  <div style={{ color: "red" }}>{formik.errors.district}</div>
                )} */}
              </div>

              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="role" className="form-label">
                  Post
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="form-control"
                  value={userData.role}
                />
                {/* {formik.touched.role && formik.errors.role && (
                  <div style={{ color: "red" }}>{formik.errors.role}</div>
                )} */}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="jdate" className="form-label">
                  Join Date
                </label>
                <input
                  id="jdate"
                  name="jdate"
                  type="text"
                  className="form-control"
                  value={userData.jdate}
                />
                {/* {formik.touched.jdate && formik.errors.jdate && (
                  <div style={{ color: "red" }}>{formik.errors.jdate}</div>
                )} */}
              </div>

              <button
                type="submit"
                className="btn btn-success m-2"
                style={{ color: "white" }}
              >
                Update
              </button>

            
              {/* </Link> */}
            </div>
            {/* {update && <SuccessUpdate onClose={handleupdate}/>}
            {deletedata &&  <SuccessDelete onClose={handledelete}/>}
            {error && <ErrorComponent message={validationMessage} onClose={handleError}/>} */}
          </form>
        </div>
      </div>
      </div>
      )
      }
      </div>
    
      {/* {deletedata && (
        <SuccessDelete message={validationMessage} onClose={handledelete} />
      )} */}
      {error && (
        <ErrorComponent message={validationMessage} onClose={handleError} />
      )}
      
    </>
  );
}

export default ProfileComponent;
