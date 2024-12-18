import Announcements from "@/components/Announcements";
import FinanceChart from "@/components/FinanceChart";
// import CountChart from "@/components/CountChart";
import SchoolCalendar from "@/components/SchoolCalendar";
import PerformanceChart from "@/components/PerformanceChart";
import UserCard from "@/components/UserCard";
import Image from "next/image";
import React from "react";

const AdminPage = () => {
	return (
		<div className="p-4 w-full flex gap-4 flex-col md:flex-row ">
			{/*** LEFT ***/}
			<div className="w-full lg:w-2/3 flex flex-col bg-[#e2eceb] bg-cover -mt-4 -ml-4 pt-9 p-4 gap-8">
				{/** HEADERS **/}
				<div className="flex justify-between items-center">
					{/* Page Title */}
					<div className="hidden md:flex items-center font-bold text-3xl text-jodnaPurple1 px-2">
						<h2>Dashboard</h2>
					</div>
					{/* Search Bar*/}
					<div className="hidden md:flex items-center bg-white justify-end gap-2 ml-[10rem] text-xs rounded-full ring-[1.5px] ring-white px-2">
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
				<div className="flex gap-2 justify-between">
					<UserCard />
				</div>

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
			<div className="w-full lg:w-1/3 flex flex-col gap-8 bg-white">
				{/* ICONS AND USER */}
				<div className="flex items-center w-full justify-end">
					<div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
						<Image src="/message.png" alt="chat-icon" width={20} height={20} />{" "}
					</div>

					<div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
						<Image
							src="/announcement.png"
							alt="chat-icon"
							width={20}
							height={20}
						/>{" "}
						<div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
							1
						</div>
					</div>
					<div className="flex flex-col">
						<span className="text-xs leading-3 font-medium">John Doe</span>
						<span className="text-[10px] text-gray-500 text-right">Admin</span>
					</div>
					<Image
						src="/avatar.png"
						alt="user-avatar"
						width={36}
						height={36}
						className="rounded-full"
					/>
				</div>
				{/* <EventCalendar /> */}
				<Announcements />
			</div>
		</div>
	);
};

export default AdminPage;
