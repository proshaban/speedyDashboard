import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 4000, sales: 2400 },
  { name: "Feb", users: 3000, sales: 1398 },
  { name: "Mar", users: 2000, sales: 9800 },
  { name: "Apr", users: 2780, sales: 3908 },
  { name: "May", users: 1890, sales: 4800 },
  { name: "Jun", users: 2390, sales: 3800 },
  { name: "Jul", users: 3490, sales: 4300 },
];

const GrowthChart = () => {

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-bold mb-4">User Growth & Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="sales" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
