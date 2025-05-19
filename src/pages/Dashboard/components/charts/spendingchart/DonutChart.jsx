import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./donutChart.css";

const data = [
  { name: "Doctor", value: 47 },
  { name: "Tests", value: 40 },
  { name: "Treatment", value: 23 },
  { name: "Hospital", value: 20 },
];

const COLORS = ["#F4A950", "#50BFE6", "#A586FF", "#F28EDC"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={13}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${Math.round(percent * 100)}%`}
    </text>
  );
};

const DonutChart = () => {
  return (
    <div className="donut-container">
      <h3 className="donut-title">Your Spending</h3>
      <div className="donut-chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="center-label">
          <p>Total balance</p>
          <h2>$3,250.00</h2>
        </div>
      </div>

      <div className="legend">
        {data.map((entry, index) => (
          <div key={index}>
            <span className="dot" style={{ background: COLORS[index] }}></span>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
