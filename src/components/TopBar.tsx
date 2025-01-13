import Image from "next/image";

const TopBar = () => {
	return (
		<>
			{/* ICONS AND USER */}
			<div className="hidden md:flex items-center min-w-[300px] justify-between mt-3 pt-2 overflow-scroll scrollbar-hide">
				<div className="bg-white rounded-full w-9 h-9 p-2 flex items-center ml-16 relative justify-center cursor-pointer">
					<Image
						src="/bell.png"
						alt="notification-icon"
						width={27}
						height={27}
					/>
					<div className="absolute top-0 right-1 w-2 h-2 flex items-center justify-center bg-jodnaPurple1 rounded-full text-xs"></div>
				</div>

				<div className="bg-white w-9 h-9 p-2 rounded-full ml-3 items-center justify-center cursor-pointer relative">
					<Image
						src="/settings.png"
						alt="settings-icon"
						width={25}
						height={25}
					/>{" "}
				</div>
				<div className="user-profile flex items-center gap-2 hover:cursor-pointer">
					<div className="flex flex-col items-end">
						<span className="text-xs leading-3 font-medium">Nabila A.</span>
						<span className="text-[10px] text-gray-500 pr-1">Admin</span>
					</div>
					<Image
						src="/user2.png"
						alt="user-avatar"
						width={45}
						height={45}
						className="rounded-full mr-6"
					/>
				</div>
			</div>
		</>
	);
};

export default TopBar;
