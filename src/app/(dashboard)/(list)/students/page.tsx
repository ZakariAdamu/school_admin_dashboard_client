import AddButton from "@/components/AddButton";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import SearchField from "@/components/SearchField";
import SelectButton from "@/components/SelectButton";
import Table from "@/components/Table";
import TopBar from "@/components/TopBar";
// import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
	id: number;
	studentId: string;
	name: string;
	photo: string;
	class: string;
	icon: string;
	amount: string;
};

const columns = [
	{
		header: "Student Name",
		accessor: "studentName",
		className: "hidden",
	},
	{
		header: "Student ID",
		accessor: "studentId",
		className: "hidden",
	},
	{
		header: "Class",
		accessor: "class",
		className: "hidden",
	},
	{
		header: "Amount",
		accessor: "amount",
		className: "hidden",
	},
	{
		header: "Actions",
		accessor: "actions",
		className: "hidden",
	},
];

const StudentsListPage = () => {
	const renderRow = (item: Student) => (
		<tr
			key={item.id}
			className="text-sm hover:bg-aishubPurpleLight  rounded-3xl py-2 px-4 min-w-[300px]"
		>
			<td className="flex items-center gap-4 p-4">
				<Image
					src={item.photo}
					alt=""
					width={20}
					height={20}
					className="block w-10 h-10 rounded-full object-cover"
				/>
				<span className="font-semibold text-jodnaPurple1">{item.name}</span>
			</td>
			<td className="text-jodnaPurple1 px-2">{item.studentId}</td>
			<td className="flex items-center gap-4 px-5">
				<Image
					src={item.icon}
					alt=""
					width={10}
					height={10}
					className="w-8 h-8 rounded-full object-cover p-2 bg-jodnaRed text-white"
				/>
				<div className="flex flex-col -ml-2">
					<h3 className="font-semibold text-jodnaGray1">class</h3>
					<p className="text-xs text-gray-500">{item.class}</p>
				</div>
			</td>
			<td className="px-4">{item.amount}</td>
			<td className="px-2">
				{/* action buttons div */}
				<div className="flex items-center gap-2">
					<FormModal table="unpaidStudent" type="print" data={item} />
					{role === "admin" && (
						<FormModal table="unpaidStudent" type="more" id={item.id} />
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<>
			<div className="flex flex-col w-full h-full bg-[#e2eceb] gap-4">
				{/* TOP */}
				<div className="flex items-center mx-5 mt-[2px] justify-between">
					{/* Top Left */}
					<div className="flex flex-col items-start justify-center gap-4 mt-[18px] md:gap-8 md:mt-0 md:-mb-4">
						<h2 className="font-bold text-xl md:text-3xl text-jodnaPurple1">
							Students
						</h2>
						<div className="flex items-center bg-white justify-end gap-1 text-xs rounded-full ring-[1.5px] ring-white px-2">
							<SearchField />
						</div>
					</div>
					{/* Top Right */}
					<div className="flex flex-col items-end justify-center gap-4">
						<div className="hidden md:flex">
							<TopBar />
						</div>
						<div className="flex items-center gap-4 self-end">
							<SelectButton />

							{role === "admin" && (
								<div className="hidden md:flex">
									<AddButton />
								</div>
								// change FormModal component below to FormField
								// <FormModal table="student" type="create" />
							)}
						</div>
					</div>
				</div>
				<div className="bg-white p-4 rounded-md  mx-5 mt-4 min-w-[300px] w-[600px] overflow-scroll scrollbar-hide">
					{/* Next Section */}
					{/* LIST */}
					<Table columns={columns} renderRow={renderRow} data={studentsData} />
					{/* PAGINATION */}
					<Pagination />
				</div>
			</div>
		</>
	);
};

export default StudentsListPage;
