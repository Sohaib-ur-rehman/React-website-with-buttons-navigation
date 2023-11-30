import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>
    <div className="header">
      <h1 className="display-3">GV CAM VIEW</h1>
    </div>
    <button type="button" className="btn btn-secondary">
      HOME
    </button>
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      GARAGE CAM
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      GARAGE CAM 1
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      DOOR CAM 2
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      GARAGE CAM 3
    </button>{" "}
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      GARAGE CAM 4
    </button>
  </Fragment>
);
