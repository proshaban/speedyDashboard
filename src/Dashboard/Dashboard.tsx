import GrowthChart from "./GrowthChart";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-bold">Total Users</h2>
                    <p className="text-xl font-semibold">1,250</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-bold">Active Users</h2>
                    <p className="text-xl font-semibold">$34,200</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-bold">Total Streams</h2>
                    <p className="text-xl font-semibold">$98,000</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-bold">Revenue</h2>
                    <p className="text-xl font-semibold">$98,000</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h2 className="font-bold">Top Artist</h2>
                    <p className="text-xl font-semibold">$98,000</p>
                </div>
            </div>
        {/* data visualisation */}
        <div className="flex gap-4">
            <GrowthChart />
        </div>
        </div>
    )
}

export default Dashboard;