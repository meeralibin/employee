import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const fetchData=()=>(
        axios.get("https://jsonplaceholder.typicode.com/users").then(
        (Response)=>{
            setData(Response.data)
        }   
    )
  )
  React.useEffect(()=>{fetchData()},[])
  return (
    <div>
         <div className="container">
        <Navbar />
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        
                    {data.map((value, index) => (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard