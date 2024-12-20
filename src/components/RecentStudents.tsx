import Image from "next/image";
import StudentCard from "./StudentCard";

let viewedProfile;
const recentStudents = [
	{
		_id: "1",
		avatar: "/avatar2.png",
		fullName: "Samantha William",
		class: "Class VII A",
		icon: "/mail-button.png",
		backgroundColor: viewedProfile ? "bg-white" : "bg-jodnaPurple1", // state variable: viewedProfile
	},
	{
		_id: "2",
		avatar: "/avatar2.png",
		fullName: "Tony Soap",
		class: "Class VII A",
		icon: "/mail-button.png",
		backgroundColor: viewedProfile ? "bg-white" : "bg-jodnaPurple1", // state variable: viewedProfile
	},
	{
		_id: "3",
		avatar: "/avatar2.png",
		fullName: "Karen Hope",
		class: "Class VII A",
		icon: "/mail-button.png",
		backgroundColor: viewedProfile ? "bg-white" : "bg-jodnaPurple1", // state variable: viewedProfile
	},
	{
		_id: "4",
		avatar: "/avatar2.png",
		fullName: "Jordan Nico",
		class: "Class VII B",
		icon: "/mail-button.png",
		backgroundColor: viewedProfile ? "bg-white" : "bg-jodnaPurple1", // state variable: viewedProfile
	},
	{
		_id: "5",
		avatar: "/avatar2.png",
		fullName: "Nadila Adja",
		class: "Class VII A",
		icon: "/mail-button.png",
		backgroundColor: viewedProfile ? "bg-white" : "bg-jodnaPurple1", // state variable: viewedProfile
	},
];

const RecentStudents = () => {
	return (
		<>
			{/* Recent Students section header */}
			<div className="bg-white p-4 rounded-md">
				<div className="flex justify-between items-center">
					<div className="flex flex-col items-start">
						<h2 className="capitalize font-bold text-2xl text-jodnaPurpleText">
							Recent Students
						</h2>
						<p className="text-sm font-semibold student-total">
							You have 456 students
						</p>
					</div>
					<button className="rounded-full p-4 bg-jodnaPurple2">
						<Image src="/white-plus.png" width={12} height={12} alt="" />
					</button>
				</div>

				{/* Students Card */}
				<div className="mt-8">
					{recentStudents.map((student: StudentType) => (
						<StudentCard key={student._id} student={student} />
					))}
					<button className="block w-full max-w-[335px] mt-7 mx-auto capitalize text-lg font-bold text-jodnaPurpleText bg-jodnaBgButton px-2 py-4 rounded-full hover:bg-slate-300">
						view more
					</button>
				</div>
			</div>
		</>
	);
};

export default RecentStudents;
