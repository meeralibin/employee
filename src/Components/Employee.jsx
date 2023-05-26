import React from 'react'
import Navbar from './Navbar'

const Employee = () => {
  return (
    <div>
        <div className="container">
        <Navbar />
        <h6 className="text-center pt-5">Add Employee</h6>
        <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">
                  Name
                </label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">
                  Designation
                </label>
                <input type="text" name="designation" className="form-control" />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">
                  Locality
                </label>
                <input type="text" name="locality" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">
                  Salary
                </label>
                <input type="text" name="salary" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
          
         
         
        </div>
      </div>
    </div>
  )
}

export default Employee