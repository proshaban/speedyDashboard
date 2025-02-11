import { ArrowDown } from "lucide-react";
import { useState } from "react";

const initialData = [
  {'song': 'Die With A Smile',
    'artist': 'Lady Gaga ft. Bruno Mars',
    'dateStream': '2025-02-09',
    'streams': 11663,
    'userId': 'U104'},
   {'song': 'Blinding Lights',
    'artist': 'The Weeknd',
    'dateStream': '2025-02-09',
    'streams': 8265,
    'userId': 'U102'},
   {'song': 'Bad Habits',
    'artist': 'Ed Sheeran',
    'dateStream': '2025-02-09',
    'streams': 9781,
    'userId': 'U105'},
   {'song': 'Levitating',
    'artist': 'Dua Lipa',
    'dateStream': '2025-02-10',
    'streams': 11984,
    'userId': 'U104'},
   {'song': 'Stay',
    'artist': 'The Kid LAROI & Justin Bieber',
    'dateStream': '2025-02-09',
    'streams': 9146,
    'userId': 'U102'},
   {'song': 'Good 4 U',
    'artist': 'Olivia Rodrigo',
    'dateStream': '2025-02-10',
    'streams': 9609,
    'userId': 'U103'},
   {'song': 'Montero (Call Me By Your Name)',
    'artist': 'Lil Nas X',
    'dateStream': '2025-02-09',
    'streams': 14985,
    'userId': 'U101'},
   {'song': 'Peaches',
    'artist': 'Justin Bieber ft. Daniel Caesar & Giveon',
    'dateStream': '2025-02-09',
    'streams': 15548,
    'userId': 'U105'},
   {'song': 'Save Your Tears',
    'artist': 'The Weeknd',
    'dateStream': '2025-02-10',
    'streams': 8110,
    'userId': 'U103'},
   {'song': 'Kiss Me More',
    'artist': 'Doja Cat ft. SZA',
    'dateStream': '2025-02-11',
    'streams': 6545,
    'userId': 'U103'},
   {'song': 'Industry Baby',
    'artist': 'Lil Nas X & Jack Harlow',
    'dateStream': '2025-02-10',
    'streams': 18077,
    'userId': 'U101'},
   {'song': 'Heat Waves',
    'artist': 'Glass Animals',
    'dateStream': '2025-02-10',
    'streams': 15782,
    'userId': 'U105'},
   {'song': 'Deja Vu',
    'artist': 'Olivia Rodrigo',
    'dateStream': '2025-02-11',
    'streams': 17851,
    'userId': 'U103'},
   {'song': 'Shivers',
    'artist': 'Ed Sheeran',
    'dateStream': '2025-02-11',
    'streams': 17533,
    'userId': 'U102'},
   {'song': 'Butter',
    'artist': 'BTS',
    'dateStream': '2025-02-10',
    'streams': 11466,
    'userId': 'U104'},
   {'song': 'Happier Than Ever',
    'artist': 'Billie Eilish',
    'dateStream': '2025-02-11',
    'streams': 13848,
    'userId': 'U102'},
   {'song': 'Drivers License',
    'artist': 'Olivia Rodrigo',
    'dateStream': '2025-02-11',
    'streams': 17487,
    'userId': 'U104'},
   {'song': 'Smokin Out The Window',
    'artist': 'Silk Sonic (Bruno Mars & Anderson .Paak)',
    'dateStream': '2025-02-09',
    'streams': 13031,
    'userId': 'U102'},
   {'song': 'Easy On Me',
    'artist': 'Adele',
    'dateStream': '2025-02-11',
    'streams': 17399,
    'userId': 'U104'},
   {'song': 'Need To Know',
    'artist': 'Doja Cat',
    'dateStream': '2025-02-10',
    'streams': 6334,
    'userId': 'U104'},
   {'song': 'My Universe',
    'artist': 'Coldplay X BTS',
    'dateStream': '2025-02-11',
    'streams': 8565,
    'userId': 'U101'},
   {'song': 'Take My Breath',
    'artist': 'The Weeknd',
    'dateStream': '2025-02-11',
    'streams': 11985,
    'userId': 'U104'},
   {'song': 'Essence',
    'artist': 'Wizkid ft. Tems',
    'dateStream': '2025-02-11',
    'streams': 18487,
    'userId': 'U101'},
   {'song': 'Woman',
    'artist': 'Doja Cat',
    'dateStream': '2025-02-11',
    'streams': 10070,
    'userId': 'U105'},
   {'song': 'Ghost',
    'artist': 'Justin Bieber',
    'dateStream': '2025-02-11',
    'streams': 6056,
    'userId': 'U103'},
   {'song': 'You Right',
    'artist': 'Doja Cat & The Weeknd',
    'dateStream': '2025-02-10',
    'streams': 14304,
    'userId': 'U101'},
   {'song': 'Love Nwantiti (Ah Ah Ah)',
    'artist': 'CKay',
    'dateStream': '2025-02-10',
    'streams': 13376,
    'userId': 'U101'},
   {'song': 'Fancy Like',
    'artist': 'Walker Hayes',
    'dateStream': '2025-02-10',
    'streams': 12698,
    'userId': 'U102'},
   {'song': 'Cold Heart (PNAU Remix)',
    'artist': 'Elton John & Dua Lipa',
    'dateStream': '2025-02-09',
    'streams': 17014,
    'userId': 'U104'},
   {'song': "Beggin'",
    'artist': 'Måneskin',
    'dateStream': '2025-02-10',
    'streams': 7968,
    'userId': 'U102'},
   {'song': 'Leave The Door Open',
    'artist': 'Silk Sonic (Bruno Mars & Anderson .Paak)',
    'dateStream': '2025-02-09',
    'streams': 19303,
    'userId': 'U103'},
   {'song': 'Thats What I Want',
    'artist': 'Lil Nas X',
    'dateStream': '2025-02-11',
    'streams': 6436,
    'userId': 'U104'},
   {'song': 'Permission to Dance',
    'artist': 'BTS',
    'dateStream': '2025-02-10',
    'streams': 5985,
    'userId': 'U104'},
   {'song': 'Save Your Tears (Remix)',
    'artist': 'The Weeknd & Ariana Grande',
    'dateStream': '2025-02-09',
    'streams': 13968,
    'userId': 'U105'},
   {'song': 'Rapstar',
    'artist': 'Polo G',
    'dateStream': '2025-02-10',
    'streams': 19296,
    'userId': 'U105'},
   {'song': 'Good Days',
    'artist': 'SZA',
    'dateStream': '2025-02-10',
    'streams': 5422,
    'userId': 'U101'},
   {'song': 'For The Night',
    'artist': 'Pop Smoke ft. Lil Baby & DaBaby',
    'dateStream': '2025-02-10',
    'streams': 9442,
    'userId': 'U104'},
   {'song': 'What You Know Bout Love',
    'artist': 'Pop Smoke',
    'dateStream': '2025-02-11',
    'streams': 5220,
    'userId': 'U105'},
   {'song': 'Astronaut In The Ocean',
    'artist': 'Masked Wolf',
    'dateStream': '2025-02-11',
    'streams': 17365,
    'userId': 'U105'},
   {'song': 'Mood',
    'artist': '24kGoldn ft. Iann Dior',
    'dateStream': '2025-02-10',
    'streams': 9267,
    'userId': 'U104'},
   {'song': 'Go Crazy',
    'artist': 'Chris Brown & Young Thug',
    'dateStream': '2025-02-10',
    'streams': 16104,
    'userId': 'U105'},
   {'song': 'Laugh Now Cry Later',
    'artist': 'Drake ft. Lil Durk',
    'dateStream': '2025-02-11',
    'streams': 13971,
    'userId': 'U101'},
   {'song': 'Dynamite',
    'artist': 'BTS',
    'dateStream': '2025-02-09',
    'streams': 13789,
    'userId': 'U102'},
   {'song': 'WAP',
    'artist': 'Cardi B ft. Megan Thee Stallion',
    'dateStream': '2025-02-09',
    'streams': 9908,
    'userId': 'U104'},
   {'song': 'Savage Love (Laxed - Siren Beat)',
    'artist': 'Jawsh 685 x Jason Derulo',
    'dateStream': '2025-02-11',
    'streams': 12444,
    'userId': 'U102'},
   {'song': 'Rockstar',
    'artist': 'DaBaby ft. Roddy Ricch',
    'dateStream': '2025-02-11',
    'streams': 15245,
    'userId': 'U102'},
   {'song': 'Watermelon Sugar',
    'artist': 'Harry Styles',
    'dateStream': '2025-02-11',
    'streams': 7321,
    'userId': 'U105'},
   {'song': 'Circles',
    'artist': 'Post Malone',
    'dateStream': '2025-02-09',
    'streams': 17858,
    'userId': 'U103'},
   {'song': "Don't Start Now",
    'artist': 'Dua Lipa',
    'dateStream': '2025-02-11',
    'streams': 13961,
    'userId': 'U101'}
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
    (entry) =>
      entry.song.toLowerCase().includes(filter.toLowerCase()) ||
      entry.artist.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
            <th className="border w-1/4 p-2 cursor-pointer" onClick={() => handleSort("song")}>
              Song Name
            </th>
            <th className="border w-1/4 p-2 cursor-pointer" onClick={() => handleSort("artist")}>
              Artist
            </th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("dateStream")}>
              Date Streamed
            </th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("streams")}>
              Stream Count
            </th>
            <th className="border p-2">User ID</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((entry, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{entry.song}</td>
              <td className="border p-2">{entry.artist}</td>
              <td className="border p-2">{entry.dateStream}</td>
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
        <span>
          Page {currentPage} of {totalPages}
        </span>
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
