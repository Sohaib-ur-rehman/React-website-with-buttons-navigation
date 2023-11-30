import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>
    <div className="header">
      <h1 className="display-3">TEMPERATURE</h1>
    </div>
    <button type="button" className="btn btn-secondary">
      Living Room
    </button>
    <hr></hr>
    <div className="row">
      <button type="button" className="btn btn-secondary">
        HOT
      </button>
      <button type="button" className="btn btn-secondary">
        COLD
      </button>
      <button type="button" className="btn btn-secondary">
        MILD
      </button>
    </div>
    <hr></hr>
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      Set temperature manually
    </button>
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      16 degrees
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      20 degrees
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      25 degrees
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      30 degrees
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      35 degrees
    </button>
  </Fragment>
);
