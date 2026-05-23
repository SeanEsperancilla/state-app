import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InformationForm.css";

const EnrollmentForm: React.FC = () => {
  return (
    <div className="enrollment-page d-flex justify-content-center align-items-center py-5">
      <div className="enrollment-card shadow-lg">

        <div className="row g-0 header-section">

          <div className="col-md-3 logo-section d-flex flex-column justify-content-center align-items-center">
            <div className="logo-box mb-3">
              <span>SCA</span>
            </div>
            <h4 className="school-name">SCA University</h4>
          </div>

          <div className="col-md-9 title-section d-flex flex-column justify-content-center">
            <h1>College Information Form</h1>
            <p>Please complete the registration form carefully.</p>
          </div>
        </div>

        <div className="form-body p-4">

          <form>
            <div className="row mb-4 align-items-center">
              <label className="col-md-3 form-label">Full Name</label>

              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="First Name"
                />
              </div>

              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label">Address</label>

              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control custom-input mb-3"
                  placeholder="Street Address"
                />

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="City"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="State / Province"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-md-3 form-label">Birth Date</label>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Date"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Month"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Year"
                />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-md-3 form-label">Gender</label>

              <div className="col-md-9 d-flex gap-4 gender-group">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                  />
                  <label className="form-check-label">Male</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                  />
                  <label className="form-check-label">Female</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                  />
                  <label className="form-check-label">Other</label>
                </div>
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-md-3 form-label">
                Student Number
              </label>

              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Student ID"
                />
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <label className="col-md-3 form-label">
                Student Email
              </label>

              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-3 form-label">
                Additional Comments
              </label>

              <div className="col-md-9">
                <textarea
                  className="form-control custom-input"
                  rows={5}
                  placeholder="Write your comments here..."
                ></textarea>
              </div>
            </div>

            <div className="text-end">
              <button className="btn submit-btn px-5 py-2">
                Submit Form
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;