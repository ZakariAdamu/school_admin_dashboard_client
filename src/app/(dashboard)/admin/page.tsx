import Announcements from "@/components/Announcements";
import FinanceChart from "@/components/FinanceChart";
// import CountChart from "@/components/CountChart";
import SchoolCalendar from "@/components/SchoolCalendar";
import PerformanceChart from "@/components/PerformanceChart";
import UserCard from "@/components/DashboardSummary";
import Image from "next/image";
import React from "react";
import TopBar from "@/components/TopBar";
import UnpaidStudentTuition from "../(list)/students/UnpaidStudentInTuition";
import SearchField from "@/components/SearchField";

const AdminPage = () => {
	return (
		<div className="w-full bg-[#e2eceb]  flex gap-4 flex-col md:flex-row">
			{/*** LEFT ***/}
			<div className="w-full lg:w-2/3 flex flex-col bg-cover -mt-4 mx-auto pt-9 px-5 pl-7 gap-8">
				{/** HEADERS **/}
				<div className="flex justify-between">
					{/* Page Title */}
					<div className="font-bold text-3xl text-jodnaPurple1 px-2">
						<h2>Dashboard</h2>
					</div>
					{/* Search Bar*/}
					<div className="flex items-center bg-white justify-end gap-2 md:ml-[7rem]  text-xs rounded-full ring-[1.5px] ring-white px-2">
						<SearchField />
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
				{/* MIDDLE: Fourth row*/}
				<div className="">
					<UnpaidStudentTuition />
				</div>
			</div>
			{/* RIGHT */}
			<div className="md:w-fit lg:w-1/3 flex flex-col gap-8 bg-white min-w-[370px] mx-7  overflow-scroll px-5 md:mx-0 scrollbar-hide rounded-lg md:rounded-none">
				<TopBar />
				<Announcements />
			</div>
		</div>
	);
};

export default AdminPage;
