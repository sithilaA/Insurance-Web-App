import React from "react";
import "./alertCard.css";

const AlertCard = () => {
  return (
    <div className="alert-container">
      <h4 className="mb-3">Alert</h4>

      {/* Alert 1 */}
      <div className="card alert-card mb-3 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-start">
          <div>
            <h6 className="card-title alert-title mb-1">
              Hospitalization Payment Successful
            </h6>
            <p className="card-text alert-text mb-0">
              Your hospitalization reimbursement request has been successfully
              processed.
            </p>
          </div>
          <button className="close-btn" aria-label="Close">
            ×
          </button>
        </div>
      </div>

      {/* Alert 2 */}
      <div className="card alert-card mb-3 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-start">
          <div>
            <h6 className="card-title alert-title mb-1">
              Terms and Conditions Update
            </h6>
            <p className="card-text alert-text mb-2">
              To serve you better and ensure transparency, we've made changes to
              our Terms and Conditions. Please take a moment to review the
              updated terms.
            </p>
            <a href="#" className="learn-more fw-bold text-decoration-none">
              Learn More
            </a>
          </div>
          <button className="close-btn" aria-label="Close">
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
