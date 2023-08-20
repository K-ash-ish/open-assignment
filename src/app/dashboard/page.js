import Image from "next/image";
import SideBar from "../components/ui/SideBar";
import DashboardCard from "../components/ui/DashboardCard";

function Dashboard() {
  return (
    <div className="bg-[#f5f5f5] h-screen flex md:flex-row flex-col p-8 ">
      <SideBar />
      <main className="w-4/5 md:ml-10 flex flex-col  md:gap-8 gap-6">
        <div className=" flex flex-col md:flex-row gap-3  md:gap-0 justify-between items-center">
          <h1 className="md:text-xl font-bold">Dashboard</h1>
          <div className="flex  md:w-1/3 w-full justify-around">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-md w-40 px-2 caret-gray-400 bg-white focus:bg-[#edebeb] py-1 text-sm border-none focus:outline-none"
              />
              <Image
                src={"/search-icon.svg"}
                width={10}
                height={10}
                className="absolute top-2 right-2"
              />
            </div>
            <Image
              width={15}
              height={15}
              src={"/notification.svg"}
              className="cursor-pointer"
            />
            <Image
              width={20}
              height={20}
              src={"/profile-pic.svg"}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-wrap  justify-around md:gap-0 gap-3">
          <DashboardCard
            icon={"/total-revenue.svg"}
            cardName={"total revenues"}
            data="$2,129,430"
            classname="bg-[#DDEFE0]"
          />
          <DashboardCard
            icon={"/total-transaction.svg"}
            cardName={"total transactions"}
            data="$1,520"
            classname="bg-[#F4ECDD]"
          />
          <DashboardCard
            icon={"/like.svg"}
            cardName={"total likes"}
            data="$9,721"
            classname="bg-[#EFDADA]"
          />
          <DashboardCard
            icon={"/multi-user.svg"}
            cardName={"total users"}
            data="$892"
            classname="bg-[#DEE0EF]"
          />
        </div>
        <div className="w-full border-2 h-80">chartjs</div>
        <div>
          <div className="h-40 w-40 border-2">pi chart</div>
          <div className="h-40 w-40 border-2">meeting link</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
