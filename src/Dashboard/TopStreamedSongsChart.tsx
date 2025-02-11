import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Song A", streams: 5000 },
  { name: "Song B", streams: 4200 },
  { name: "Song C", streams: 3800 },
  { name: "Song D", streams: 3500 },
  { name: "Song E", streams: 3100 },
];

const TopStreamedSongsChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-bold mb-4">Top 5 Streamed Songs</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="streams" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopStreamedSongsChart;
