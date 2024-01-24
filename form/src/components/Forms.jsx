import React from 'react'

const Forms = () => {
  return (
    <div>
        <form action="" className="form col-md-12 mx-auto">
            <h1>Please fill out this form!</h1>
        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">First Name:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Last Name:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Age:</label>
          <input type="number" name="" id="" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="" className="form-label">Email:</label>
          <input type="email" name="" id="" className="form-control" />
        </div>

        <button className="btn btn-primary mt-3">Submit</button>
       </form>
 
    </div>
  )
}

export default Forms