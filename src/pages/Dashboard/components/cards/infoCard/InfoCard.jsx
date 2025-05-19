import React, { useState, useEffect } from "react";
import "./infoCard.css";

const InfoCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time and date
  const timeString = currentTime.toLocaleTimeString();
  const dateString = currentTime.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="info-card shadow p-4">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-brightness-high icon-sun"></i>
        <div className="ms-3">
          <h2 className="mb-0 time">{timeString}</h2>
          <p className="realtime-text mb-0">Realtime Insight</p>
        </div>
      </div>
      <div className="card-body p-0">
        <p className="mb-2">
          <strong>Today:</strong>
          <br />
          {dateString}
        </p>
        <p className="mb-2">
          <strong>Account Type:</strong>
          <br />
          Life Insurance
        </p>
        <p>
          <strong>Account Number:</strong>
          <br />
          012478912390
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
