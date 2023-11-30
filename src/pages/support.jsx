import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>

    <div className="header">
      <h1 className="display-3">SUPPORT</h1>
    </div>
    <button type="button" className="btn btn-secondary">
      PROBLEM
    </button>
    <hr></hr>
    <button type="button">
      <textarea
        cl
        ass="form-control"
        placeholder="ENTER OUR COMPLAIN....."
        id="exampleFormControlTextarea1"
        rows={3}
        defaultValue={""}
      />
    </button>
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      SUBMIT
    </button>
    <hr></hr>
  </Fragment>
);
