import React, { useEffect, useRef } from "react";
import "./dashboard.css";
import PaymentChart from "./components/charts/paymentchart/PaymentChart";
import InfoCard from "./components/cards/infoCard/InfoCard";
import DonutChart from "./components/charts/spendingchart/DonutChart";
import AlertCard from "./components/cards/alert/alertCard";
import RequestCard from "./components/cards/requestCard/RequestCard";

function Dashboard() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      scrollContainer.style.cursor = "default";
    };

    const onMouseUp = () => {
      isDragging.current = false;
      scrollContainer.style.cursor = "default";
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Scroll sensitivity
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    scrollContainer.addEventListener("mousedown", onMouseDown);
    scrollContainer.addEventListener("mouseleave", onMouseLeave);
    scrollContainer.addEventListener("mouseup", onMouseUp);
    scrollContainer.addEventListener("mousemove", onMouseMove);

    return () => {
      scrollContainer.removeEventListener("mousedown", onMouseDown);
      scrollContainer.removeEventListener("mouseleave", onMouseLeave);
      scrollContainer.removeEventListener("mouseup", onMouseUp);
      scrollContainer.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="container-fluid page-content position-absolute z-3">
      <h3 className="section-title fw-semibold mb-3">Dashboard</h3>

      <div ref={scrollRef} className="scroll-row">
        <div className="flex-shrink-0" style={{ minWidth: "250px" }}>
          <InfoCard />
        </div>
        <div className="flex-shrink-0" style={{ minWidth: "500px" }}>
          <PaymentChart />
        </div>
        <div className="flex-shrink-0" style={{ minWidth: "200px" }}>
          <DonutChart />
        </div>
        <div className="flex-shrink-0" style={{ minWidth: "400px" }}>
          <AlertCard />
        </div>
      </div>

      <div className="row g-3 my-2">
        <h3 className="fw-semibold">Latest Requests</h3>
        <div className="col-md-3 p-1">
          <RequestCard />
        </div>
        <div className="col-md-3 p-1">
          <RequestCard />
        </div>
        <div className="col-md-3 p-1">
          <RequestCard />
        </div>
        <div className="col-md-3 p-1">
          <RequestCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
