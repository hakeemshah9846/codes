
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Loading from "./Loading";
import  urls from "../../utils/url";
// import { Loadercomponnet } from "./LoaderComponnet";

export default function EmployeeProfileComponent() {
  const HOSTED_SERVER_URL = urls();

  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const [totalPages, setTotalPages] = useState(0);
  const[loading,setLoading]=useState(true)
  const[keyword,setkeyword]=useState({
    // keyword:""
  }
  )
  
  
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      axios.get(`${HOSTED_SERVER_URL}/employee/list?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLists(response.data.data.datas);
        console.log("total_pages",response.data.data.total_pages);
        setTotalPages(response.data.data.total_pages);
      })
      .catch((error) => {
        console.log("get error:", error.message ? error.message : error);
      });
    } catch (error) {
      console.log(error)
    }finally{
      setTimeout(()=>{
        setLoading(false)
      },300)
      
    }
 
  }, [currentPage, pageSize,loading]);
  const handleChange = (e) => {
    console.log("reached handlechange")
    console.log("value:",e.target.value)

        // const value = e.target.value;
        // setkeyword({
        //   ...keyword,
        //   [e.target.name]: value
        // });

        const token = localStorage.getItem("token");
        axios.get(`${HOSTED_SERVER_URL}/employee/list?page=${currentPage}&pageSize=${pageSize}&keyword=${e.target.value}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setLists(response.data.data.datas);
          console.log("total_pages",response.data.data.total_pages);
          setTotalPages(response.data.data.total_pages);
        })
        .catch((error) => {
          console.log("get error:", error.message ? error.message : error);
        });
      };
  return (
    <>
        <div>
        <form className="d" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="keyword" name="keyword" 
          onKeyUp={handleChange}
        />
        <button className="btn btn-outline-success">
          Search
        </button>
      </form>
      </div>
    <div>
      {loading?
      (<Loading/>):(
    
      
      
      <div className="listTable">
        <h2 style={{ textAlign: "center", color: "gray" }}>EMPLOYEE LIST</h2>
        <div className="container ">
          <table className="table table-success table-striped">
            {/*  table header */}
            <thead>
              <tr>
                <th scope="col">SL No</th>
                <th scope="col">Emp_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {/*  table body */}
            <tbody>
              {lists.map((list, index) => {
                const serialNumber=(currentPage-1) * pageSize + index +1;
                return(
                <tr key={list._id}>
                  <td>{serialNumber}</td>
                  <td>{list._id}</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.role}</td>
                  <td>{list.phone}</td>
                  <td>
                    <button className="btn btn-success">
                      <Link to={`/profile/${list._id}`} style={{ textDecoration: "none", color: "white" }}>view</Link>
                    </button>
                  </td>
                </tr>
                )
                })}
            </tbody>
          </table>
          {/* Pagination UI */}
          <nav className="d-flex justify-content-center" aria-label="Page navigation">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <Link
                    // to={`?page=${index + 1}`}
                    className="page-link"
                    onClick={() => (setCurrentPage(index + 1),setLoading(true))}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
  
      )
              }
       </div>       
    </>
  );
}
