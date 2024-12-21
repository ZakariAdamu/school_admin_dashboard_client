import Image from "next/image";
import React from "react";

const TopBar = () => {
	return (
		<>
			{/* ICONS AND USER */}
			<div className="flex items-center w-full justify-center mt-3 pt-2">
				<div className="bg-white rounded-full w-7 h-7 flex items-center mr-18 relative justify-center cursor-pointer">
					<Image
						src="/notification-bell.png"
						alt="notification-icon"
						width={30}
						height={30}
					/>
					<div className="absolute -top-1 right-0 w-2 h-2 flex items-center justify-center bg-jodnaPurple1 text-white rounded-full text-xs"></div>
				</div>

				<div className="bg-white rounded-full w-7 h-7 flex mx-9 items-center justify-center cursor-pointer relative">
					<Image
						src="/setting.png"
						alt="settings-icon"
						width={30}
						height={30}
					/>{" "}
				</div>
				<div className="flex flex-col items-end mr-5">
					<span className="text-xs leading-3 font-medium">Nabila A.</span>
					<span className="text-[10px] text-gray-500 pr-1">Admin</span>
				</div>
				<Image
					src="/avatar2.png"
					alt="user-avatar"
					width={45}
					height={45}
					className="rounded-full -mr-5"
				/>
			</div>
		</>
	);
};

export default TopBar;
