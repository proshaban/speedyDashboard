import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Subscriptions", value: 5643 },
  { name: "Ads", value: 2345 },
  { name: "APIs", value: 3456 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RevenuePieChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-bold mb-4">Revenue Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenuePieChart;
