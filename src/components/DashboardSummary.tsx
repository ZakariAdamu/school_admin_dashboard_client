import Image from "next/image";
import UserCard from "./UserCard";

const usersData = [
	{
		_id: "1",
		icon: "/student.png",
		label: "Students",
		total: "932",
		backgroundColor: "bg-jodnaPurple1",
	},
	{
		_id: "2",
		icon: "/teacher.svg",
		label: "Teachers",
		total: "754",
		backgroundColor: "bg-jodnaRed",
	},
	{
		_id: "3",
		icon: "/event.svg",
		label: "Events",
		total: "40",
		backgroundColor: "bg-jodnaYellow",
	},
	{
		_id: "4",
		icon: "/food.svg",
		label: "Foods",
		total: "32k",
		backgroundColor: "bg-jodnaPurpleText",
	},
];

const DashboardSummary = () => {
	return (
		<div className="users rounded-2xl bg-white flex items-center justify-between py-10 flex-wrap px-4 gap-6">
			{usersData.map((user: UserType) => (
				<UserCard key={user._id} user={user} />
			))}
		</div>
	);
};

export default DashboardSummary;
