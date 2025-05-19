import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./paymentChart.css";

const data = [
  { day: "Sun", value: 70, secondary: 40 },
  { day: "Mon", value: 120, secondary: 90 },
  { day: "Tue", value: 80, secondary: 120 },
  { day: "Wed", value: 150, secondary: 90 },
  { day: "Thu", value: 510, secondary: 160 },
  { day: "Fri", value: 160, secondary: 130 },
  { day: "Sat", value: 160, secondary: 110 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="custom-tooltip">${payload[0].value}</div>;
  }
  return null;
};

const PaymentChart = () => {
  return (
    <div className="payment-card">
      <div className="header">
        <h4>Payment coverage</h4>
        <div className="dropdown">Weekly ▼</div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart className="lineChart" data={data}>
          <CartesianGrid vertical={false} stroke="#eee" />
          <XAxis dataKey="day" />
          <YAxis
            ticks={[10, 50, 150, 500, 1000]}
            domain={[0, 1000]}
            tickFormatter={(value) => (value >= 1000 ? "1k+" : value)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3EB0EF"
            strokeWidth={2}
            dot={{ stroke: "#3EB0EF", strokeWidth: 2, r: 4 }}
            activeDot={{ stroke: "#F9A825", strokeWidth: 2, r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="secondary"
            stroke="#D3DCE6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentChart;
