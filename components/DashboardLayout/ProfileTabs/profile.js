import React from "react";
import Link from "next/link";

export function ProfileTab() {
  return (
    <div id="profileTab" className="tab-pane fade active show">
      <div className="pt-3">
        <div className="settings-form">
          <h4 className="text-primary">Account Setting</h4>
          <form>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Password</label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    disabled="true"
                    placeholder="***********"
                    className="form-control"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#passwordModal"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Password</label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    disabled="true"
                    placeholder="***********"
                    className="form-control"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#passwordModal"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                placeholder="1234 Main St"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address 2</label>
              <input
                type="text"
                placeholder="Apartment, studio, or floor"
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 col-md-4">
                <label className="form-label">State</label>
                <select
                  className="form-control default-select wide"
                  id="inputState"
                >
                  <option selected>Choose...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="mb-3 col-md-2">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check custom-checkbox">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="gridCheck"
                />
                <label
                  className="form-check-label form-label"
                  htmlFor="gridCheck"
                >
                  {" "}
                  Check me out
                </label>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="passwordModal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <form>
              <div className="mb-3  ">
                <label className="form-label">Password</label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    disabled="true"
                    placeholder="***********"
                    className="form-control"
                  />               
                </div>
                <div className="mb-3  ">
                <label className="form-label">Confirm Password</label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    disabled="true"
                    placeholder="***********"
                    className="form-control"
                  />
               
                </div>
              </div>
              </div>
              </form>
            </div>
            <div className="modal-footer">
              
              <button type="button" className="btn btn-primary">
               Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
