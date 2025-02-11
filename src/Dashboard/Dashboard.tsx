import GrowthChart from "./GrowthChart";
import RecentStreamsTable from "./RecentStreamsTable";
import RevenuePieChart from "./RevenuePieChart";
import TopStreamedSongsChart from "./TopStreamedSongsChart";

const matricsData = [
    {
        name: "Total Users",
        value: "2.5 B"
    },
    {
        name: "Active Users",
        value: "636 M"
    },
    {
        name: "Total Streams",
        value: "123 M"
    },
    {
        name: "Revenue",
        value: "€13.24 B"
    },
    {
        name: "Top Artist",
        value: "Taylor Swift"
    }
]

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {
                    matricsData.map((item, key) =>
                    (
                        <div key={key} className="p-4 bg-white shadow-md rounded-lg">
                            <h2 className="font-bold">{item.name}</h2>
                            <p className="text-xl font-semibold">{item.value}</p>
                        </div>
                    ))
                }
            </div>
            {/* data visualisation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <GrowthChart />
                <RevenuePieChart />
                <TopStreamedSongsChart />
            </div>

            {/* Table */}
            <RecentStreamsTable />

        </div>
    )
}

export default Dashboard;