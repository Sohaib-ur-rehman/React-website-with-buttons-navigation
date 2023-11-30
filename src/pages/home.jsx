import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
    </ol>

    <div className="header">
      <h1 className="display-3">Control Panel</h1>
    </div>
    <button type="button" className="btn btn-secondary">
      Living Room
    </button>
    <hr></hr>

    <div className="row">
      <button type="button" className="btn btn-secondary">
        Light No1
      </button>
      <button type="button" className="btn btn-secondary">
        Light no2
      </button>
      <button type="button" className="btn btn-secondary">
        Fan no1
      </button>
      <button type="button" className="btn btn-secondary">
        Fan no2
      </button>
    </div>
    <hr></hr>
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      Bed Room
    </button>
    <hr></hr>

    <div className="row">
      <button type="button" className="btn btn-secondary">
        Light No1
      </button>

      <button type="button" className="btn btn-secondary">
        Fan no2
      </button>
    </div>
    <hr></hr>
    <hr></hr>
    <button type="button" className="btn btn-secondary">
      living Room
    </button>
    <hr></hr>

    <div className="row">
      <button type="button" className="btn btn-secondary">
        Light No1
      </button>

      <button type="button" className="btn btn-secondary">
        Fan no2
      </button>
    </div>
  </Fragment>
);
