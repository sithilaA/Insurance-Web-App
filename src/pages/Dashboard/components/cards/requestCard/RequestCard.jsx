import React from "react";
import "./requestCard.css"; // include the styles below

const RequestCard = () => {
  return (
    <div className="card request-card p-3">
      <h6 className="text-muted mb-1">Hospitalization Reimbursement</h6>
      <p className="mb-2 text-body">
        To claim expenses for in-patient treatment or surgery during a hospital
        stay.
      </p>

      <p className="mb-1 fw-semibold">Files</p>
      <div className="d-flex gap-2 mb-3">
        <div className="file-icon jpg-icon">
          <i className="bi bi-file-earmark-image"></i>
          <span>.JPG</span>
        </div>
        <div className="file-icon pdf-icon">
          <i className="bi bi-file-earmark-pdf"></i>
          <span>.PDF</span>
        </div>
      </div>

      <div className="text-success fw-semibold text-end">
        accepted <span className="opacity-75">75%</span>
      </div>
    </div>
  );
};

export default RequestCard;
