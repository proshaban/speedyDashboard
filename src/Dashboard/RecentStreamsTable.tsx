import { useState } from "react";

const initialData = [
  { "song": "Die With A Smile", "artist": "Lady Gaga ft. Bruno Mars" },
  { "song": "Blinding Lights", "artist": "The Weeknd" },
  { "song": "Bad Habits", "artist": "Ed Sheeran" },
  { "song": "Levitating", "artist": "Dua Lipa" },
  { "song": "Stay", "artist": "The Kid LAROI & Justin Bieber" },
  { "song": "Good 4 U", "artist": "Olivia Rodrigo" },
  { "song": "Montero (Call Me By Your Name)", "artist": "Lil Nas X" },
  { "song": "Peaches", "artist": "Justin Bieber ft. Daniel Caesar & Giveon" },
  { "song": "Save Your Tears", "artist": "The Weeknd" },
  { "song": "Kiss Me More", "artist": "Doja Cat ft. SZA" },
  { "song": "Industry Baby", "artist": "Lil Nas X & Jack Harlow" },
  { "song": "Heat Waves", "artist": "Glass Animals" },
  { "song": "Deja Vu", "artist": "Olivia Rodrigo" },
  { "song": "Shivers", "artist": "Ed Sheeran" },
  { "song": "Butter", "artist": "BTS" },
  { "song": "Happier Than Ever", "artist": "Billie Eilish" },
  { "song": "Drivers License", "artist": "Olivia Rodrigo" },
  { "song": "Smokin Out The Window", "artist": "Silk Sonic (Bruno Mars & Anderson .Paak)" },
  { "song": "Easy On Me", "artist": "Adele" },
  { "song": "Need To Know", "artist": "Doja Cat" },
  { "song": "My Universe", "artist": "Coldplay X BTS" },
  { "song": "Take My Breath", "artist": "The Weeknd" },
  { "song": "Essence", "artist": "Wizkid ft. Tems" },
  { "song": "Woman", "artist": "Doja Cat" },
  { "song": "Ghost", "artist": "Justin Bieber" },
  { "song": "You Right", "artist": "Doja Cat & The Weeknd" },
  { "song": "Love Nwantiti (Ah Ah Ah)", "artist": "CKay" },
  { "song": "Fancy Like", "artist": "Walker Hayes" },
  { "song": "Cold Heart (PNAU Remix)", "artist": "Elton John & Dua Lipa" },
  { "song": "Beggin'", "artist": "Måneskin" },
  { "song": "Leave The Door Open", "artist": "Silk Sonic (Bruno Mars & Anderson .Paak)" },
  { "song": "Thats What I Want", "artist": "Lil Nas X" },
  { "song": "Permission to Dance", "artist": "BTS" },
  { "song": "Save Your Tears (Remix)", "artist": "The Weeknd & Ariana Grande" },
  { "song": "Rapstar", "artist": "Polo G" },
  { "song": "Good Days", "artist": "SZA" },
  { "song": "For The Night", "artist": "Pop Smoke ft. Lil Baby & DaBaby" },
  { "song": "What You Know Bout Love", "artist": "Pop Smoke" },
  { "song": "Astronaut In The Ocean", "artist": "Masked Wolf" },
  { "song": "Mood", "artist": "24kGoldn ft. Iann Dior" },
  { "song": "Go Crazy", "artist": "Chris Brown & Young Thug" },
  { "song": "Laugh Now Cry Later", "artist": "Drake ft. Lil Durk" },
  { "song": "Dynamite", "artist": "BTS" },
  { "song": "WAP", "artist": "Cardi B ft. Megan Thee Stallion" },
  { "song": "Savage Love (Laxed - Siren Beat)", "artist": "Jawsh 685 x Jason Derulo" },
  { "song": "Rockstar", "artist": "DaBaby ft. Roddy Ricch" },
  { "song": "Watermelon Sugar", "artist": "Harry Styles" },
  { "song": "Circles", "artist": "Post Malone" },
  { "song": "Don't Start Now", "artist": "Dua Lipa" }
];
const RecentStreamsTable = () => {
  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setData(sortedData);
    setSortBy(key);
  };

  const filteredData = data.filter(
    (entry) => entry.song.toLowerCase().includes(filter.toLowerCase()) || entry.artist.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-bold mb-4">Recent Streams</h2>
      <input
        type="text"
        placeholder="Filter by song or artist..."
        className="border p-2 mb-4 w-full"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("song")}>Song Name</th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("artist")}>Artist</th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("date")}>Date Streamed</th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("streams")}>Stream Count</th>
            <th className="border p-2">User ID</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((entry, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{entry.song}</td>
              <td className="border p-2">{entry.artist}</td>
              <td className="border p-2">{entry.date}</td>
              <td className="border p-2">{entry.streams}</td>
              <td className="border p-2">{entry.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="p-2 border rounded-md"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="p-2 border rounded-md"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentStreamsTable;
