import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InformationForm.css";
import schoolLogo from "./assets/SCA_Univ.png"

const EnrollmentForm: React.FC = () => {
  return (
    <div className="enrollment-page d-flex justify-content-center align-items-center py-5">
      <div className="enrollment-card shadow-lg">

        <div className="row g-0 header-section">

          <div className="col-md-3 logo-section d-flex flex-column justify-content-center align-items-center">

            <div className="logo-box mb-3">
              <img
                src={schoolLogo}
                alt="School Logo"
                className="logo-image"
              />
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
            <div className="row mb-4 align-items-start">

              <label className="col-md-3 form-label">
                Full Name
              </label>

              <div className="col-md-4">
                <div className="d-flex flex-column">

                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    First Name
                  </label>

                </div>
              </div>

              <div className="col-md-5">
                <div className="d-flex flex-column">

                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    Last Name
                  </label>

                </div>
              </div>
            </div>

            <div className="row mb-4 align-items-start">
              <label className="col-md-3 form-label">
                Address
              </label>

              <div className="col-md-9">

                <div className="d-flex flex-column mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    Street Address
                  </label>
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <div className="d-flex flex-column">

                      <input
                        type="text"
                        className="form-control custom-input"
                      />

                      <label className="mt-1 text-start small">
                        City
                      </label>

                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-column">

                      <input
                        type="text"
                        className="form-control custom-input"
                      />

                      <label className="mt-1 text-start small">
                        State / Province
                      </label>

                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="row mb-4 align-items-start">
              <label className="col-md-3 form-label">
                Birth Date
              </label>

              <div className="col-md-3">
                <div className="d-flex flex-column">

                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    Date
                  </label>

                </div>
              </div>

              <div className="col-md-3">
                <div className="d-flex flex-column">

                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    Month
                  </label>

                </div>
              </div>

              <div className="col-md-3">
                <div className="d-flex flex-column">

                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    Year
                  </label>

                </div>
              </div>
            </div>


            <div className="row mb-4 align-items-start">
              <label className="col-md-3 form-label">
                Gender
              </label>

              <div className="col-md-9 d-flex gap-4 gender-group">

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                  />
                  <label className="form-check-label">
                    Male
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                  />
                  <label className="form-check-label">
                    Female
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                  />
                  <label className="form-check-label">
                    Other
                  </label>
                </div>

              </div>
            </div>


            <div className="row mb-4 align-items-start">
              <label className="col-md-3 form-label">
                Student Number
              </label>

              <div className="col-md-9">
                <div className="d-flex flex-column">

                  <input
                    type="text"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    Student ID
                  </label>

                </div>
              </div>
            </div>


            <div className="row mb-4 align-items-start">
              <label className="col-md-3 form-label">
                Student Email
              </label>

              <div className="col-md-9">
                <div className="d-flex flex-column">

                  <input
                    type="email"
                    className="form-control custom-input"
                  />

                  <label className="mt-1 text-start small">
                    example@gmail.com
                  </label>

                </div>
              </div>
            </div>


            <div className="row mb-4 align-items-start">
              <label className="col-md-3 form-label">
                Additional Comments
              </label>

              <div className="col-md-9">
                <div className="d-flex flex-column">

                  <textarea
                    className="form-control custom-input"
                    rows={5}
                  ></textarea>

                  <label className="mt-1 text-start small">
                  </label>

                </div>
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