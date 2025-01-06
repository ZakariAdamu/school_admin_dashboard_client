import Announcements from "@/components/Announcements";
import FinanceChart from "@/components/FinanceChart";
// import CountChart from "@/components/CountChart";
import SchoolCalendar from "@/components/SchoolCalendar";
import PerformanceChart from "@/components/PerformanceChart";
import UserCard from "@/components/DashboardSummary";
import Image from "next/image";
import React from "react";
import TopBar from "@/components/TopBar";

const AdminPage = () => {
	return (
		// <div className="p-4 w-full flex gap-4 flex-col md:flex-row">
		<div className="p-4 w-full flex gap-4 flex-col md:flex-row">
			{/*** LEFT ***/}
			<div className="w-full lg:w-2/3 flex flex-col bg-[#e2eceb] bg-cover -mt-4 -ml-4 pt-9 p-4 gap-8">
				{/** HEADERS **/}
				<div className="flex justify-between">
					{/* Page Title */}
					<div className="md:flex items-center font-bold text-3xl text-jodnaPurple1 px-2">
						<h2>Dashboard</h2>
					</div>
					{/* Search Bar*/}
					<div className="hidden md:flex items-center bg-white justify-end gap-2 ml-[7rem] text-xs rounded-full ring-[1.5px] ring-white px-2">
						<Image src="/search.png" alt="search-icon" width={14} height={14} />
						<input
							type="text"
							placeholder="Search here..."
							className="w-[200px] p-2 outline-none"
						/>
					</div>
				</div>
				{/* MIDDLE: First row */}
				{/* User Cards */}
				{/* <div className="flex gap-2 justify-between flex-wrap"> */}
				<UserCard />
				{/* </div> */}

				{/* MIDDLE: Second row */}
				{/* School performance Charts */}
				<div className="w-full h-[500px]">
					<PerformanceChart />
				</div>

				{/* MIDDLE: Third row - holds 2 charts*/}
				{/* Middle Charts -  */}
				<div className="flex gap-4 flex-col lg:flex-row">
					{/* Calendar Chart */}
					<div className="w-full lg:w-1/2 h-[450px]">
						<SchoolCalendar />
					</div>
					{/* Finance Chart */}
					<div className="w-full lg:w-1/2 h-[450px]">
						<FinanceChart />
					</div>
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full lg:w-1/3 flex flex-col gap-8 bg-white ">
				<TopBar />
				<Announcements />
			</div>
		</div>
	);
};

export default AdminPage;
