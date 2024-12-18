import Image from "next/image";

const userData = [
	{
		icon: "/student.png",
		label: "Students",
		total: "932",
		backgroundColor: "bg-jodnaPurple1",
	},
	{
		icon: "/teacher.svg",
		label: "Teachers",
		total: "754",
		backgroundColor: "bg-jodnaRed",
	},
	{
		icon: "/event.svg",
		label: "Events",
		total: "40",
		backgroundColor: "bg-jodnaYellow",
	},
	{
		icon: "/food.svg",
		label: "Foods",
		total: "32k",
		backgroundColor: "bg-jodnaPurpleText",
	},
];

const UserCard = () => {
	return (
		<div className="users rounded-2xl bg-white flex items-center justify-evenly py-10 flex-1 p-4">
			{userData.map((user) => (
				<div
					key={user.label}
					className="flex justify-center gap-3 items-center"
				>
					<div className={`${user.backgroundColor} rounded-full p-3`}>
						<Image
							src={user.icon}
							width={30}
							height={30}
							alt=""
							style={{
								filter:
									"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) brightness(100%) contrast(100%)",
							}}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h2 className="capitalize text-sm font-medium text-gray-500">
							{user.label}
							<h1 className="text-2xl font-semibold">{user.total}</h1>
						</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserCard;
