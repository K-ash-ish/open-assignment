import Image from "next/image";
import SideBar from "../components/ui/SideBar";
import DashboardCard from "../components/ui/DashboardCard";

function Dashboard() {
  return (
    <div className="bg-[#f5f5f5] h-screen flex md:flex-row p-8">
      <SideBar />
      <main className="border-2 border-red-400">
        <div>
          <h1>Dashboard</h1>
          <div>
            <input type="text" placeholder="search" />
            <p>noti</p>
            <Image width={20} height={20} className="border-2 rounded-xl" />
          </div>
        </div>
        <div>
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <div className="w-1/2 border-2 h-80">chartjs</div>
        <div>
          <div className="h-40 w-40 border-2">pi chart</div>
          <div className="h-40 w-40 border-2">meeting link</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
