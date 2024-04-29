import { COLORS, pieCharts } from "../../data/data";
import "./PieCharts.css";
import { PieChart, Pie, Cell } from "recharts";

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  // innerRadius,
  outerRadius,
  percent,
  // index,
  payload,
}) => {
  const radius = outerRadius + 10; // Position labels outside the slices
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {payload.name} ({(percent * 100).toFixed(0)}%)
    </text>
  );
};

const PieCharts = () => {
  return (
    <div className="grid-on-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Social Media Users</h3>
      </div>
      <div className="pie-chart">
        <PieChart width={450} height={200}>
          <Pie
            data={pieCharts}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieCharts.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default PieCharts;
