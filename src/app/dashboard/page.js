import Image from "next/image";
import SideBar from "../components/ui/SideBar";
import DashboardCard from "../components/ui/DashboardCard";
import LineChart from "../components/ui/LineChart";
import PiChart from "../components/ui/PiChart";
import { useEmployeeData } from "../hooks/useEmployeeData";
import { calculateEmployeeStats } from "../helper";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Dashboard() {
  const res = await useEmployeeData();
  const data = await res?.data?.sort((a, b) => a.employee_age - b.employee_age);
  const { totalEmployees, totalSalary, highestSalary, averageAge } =
    calculateEmployeeStats(data);
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex md:flex-row flex-col items-center md:items-start md:px-8 px-0 py-4 ">
      <SideBar />
      <main className="w-4/5 md:ml-10 flex flex-col   gap-6 my-2">
        <div className=" flex flex-col md:flex-row gap-3  md:gap-0 justify-between items-center">
          <h1 className="md:text-xl text-2xl font-bold">Dashboard</h1>
          <div className="flex  md:w-1/3 w-full justify-between items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-md w-40 px-2 caret-gray-400 bg-white focus:bg-[#edebeb] py-1 text-sm border-none focus:outline-none"
              />
              <Image
                src={"/search-icon.svg"}
                alt="search-icon"
                width={10}
                height={10}
                className="absolute top-2 right-2 w-auto h-auto"
              />
            </div>
            <Image
              alt="notification-icon"
              width={15}
              height={15}
              src={"/notification.svg"}
              className="cursor-pointer w-auto h-auto"
            />
            <div className="flex">
              <Image
                alt="profile-picture"
                width={20}
                height={20}
                src={session.user.image}
                className="cursor-pointer w-auto h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  justify-between md:gap-y-3 gap-3">
          <DashboardCard
            icon={"/total-revenue.svg"}
            cardName={"total salary"}
            data={totalSalary}
            classname="bg-[#DDEFE0]"
          />
          <DashboardCard
            icon={"/total-transaction.svg"}
            cardName={"highest salary"}
            data={highestSalary}
            classname="bg-[#F4ECDD]"
          />
          <DashboardCard
            icon={"/like.svg"}
            cardName={"average age "}
            data={averageAge}
            classname="bg-[#EFDADA]"
          />
          <DashboardCard
            icon={"/multi-user.svg"}
            cardName={"total employees"}
            data={totalEmployees}
            classname="bg-[#DEE0EF]"
          />
        </div>
        <div className="w-full  md:h-[300px] flex flex-col justify-around gap-3 p-6 bg-white rounded-xl">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-sm">Employee Salary</h1>
            <p className="text-xs relative  w-14 text-right">
              <span className="absolute h-2 w-2 left-0 top-1/2 transform -translate-y-1/2 bg-[#E9A0A0] rounded-full"></span>
              Salary
            </p>
          </div>
          <div className="h-5/6 w-[100%] flex justify-center">
            <LineChart data={data} />
          </div>
        </div>
        <div className=" flex md:flex-row flex-col gap-4 md:gap-0 justify-around">
          <div className="h-52 md:w-2/5 md:px-8 px-4 b flex flex-col justify-around bg-white rounded-xl">
            <div className="flex justify-between">
              <h1 className="font-bold md:text-base text-sm">Top Salaries</h1>
              <div className="text-xs text-[#858585]">Jan-July 2023</div>
            </div>
            <div className="flex  justify-around md:h-4/6 h-5/6">
              <div className="w-1/2">
                <PiChart data={data} />
              </div>
              <ul className="w-1/2 flex flex-col justify-around">
                <li className="font-bold md:text-sm text-xs   pl-3 relative">
                  <div className="w-2 h-2 rounded-full bg-[#98D89E] absolute left-0 top-[5px]"></div>
                  $200,000-250,000 <p className="text-xs text-[#858585]">%</p>
                </li>
                <li className="font-bold md:text-sm text-xs   pl-3 relative">
                  <div className="w-2 h-2 rounded-full bg-[#F6DC7D] absolute left-0 top-[5px]"></div>
                  $300,000-350,000 <p className="text-xs text-[#858585]">%</p>
                </li>
                <li className="font-bold md:text-sm text-xs   pl-3 relative">
                  <div className="w-2 h-2 rounded-full bg-[#EE8484] absolute left-0 top-[5px]"></div>
                  $400,000-550,000 <p className="text-xs text-[#858585]">%</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-52 md:w-2/5 md:px-8 px-4 flex flex-col justify-around bg-white rounded-xl">
            <div className="flex justify-between">
              <h1 className="font-bold md:text-base text-sm">
                Today's Schedule
              </h1>
              <div className="text-[#858585] cursor-pointer md:text-base text-sm">
                See All{" "}
              </div>
            </div>
            <div className="flex flex-col items-start md:gap-3 gap-2 md:h-4/6 h-5/6">
              <div className="text-sm border-l-4 border-[#9BDD7C] pl-2">
                <p className="text-[#666666] font-semibold ">
                  Meeting with suppliers from Kuta Bali
                </p>
                <p className="text-[#999999] text-xs">14.00-15.00</p>
                <p className="text-[#999999] text-xs">
                  at Sunset Road, Kuta, Bali{" "}
                </p>
              </div>
              <div className="text-sm border-l-4 border-[#6972C3] pl-2">
                <p className="text-[#666666] font-semibold ">
                  Check operation at Giga Factory 1
                </p>
                <p className="text-[#999999] text-xs">18.00-20.00</p>
                <p className="text-[#999999] text-xs">at Central Jakarta </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
