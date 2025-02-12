import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { "name": "Blinding Lights", "artist": "The Weeknd", "streams": 4701 },
  { "name": "Shape of You", "artist": "Ed Sheeran", "streams": 4215 },
  { "name": "Someone You Loved", "artist": "Lewis Capaldi", "streams": 3792 },
  { "name": "As It Was", "artist": "Harry Styles", "streams": 3754 },
  { "name": "Starboy", "artist": "The Weeknd", "streams": 3736 }
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
