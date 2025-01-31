import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
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
// Hide column headers in this component
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

const UnpaidStudentTuition = () => {
	const renderRow = (row: Student) => (
		<tr
			key={row.id}
			className="text-sm hover:bg-aishubPurpleLight  rounded-3xl py-2 px-4 min-w-[300px]"
		>
			<td className="flex items-center gap-4 p-4">
				<Image
					src={row.photo}
					alt=""
					width={20}
					height={20}
					className="block w-10 h-10 rounded-full object-cover"
				/>
				<span className="font-semibold text-jodnaPurple1">{row.name}</span>
			</td>
			<td className="text-jodnaPurple1 px-2">{row.studentId}</td>
			<td className="flex items-center gap-4 px-5">
				<Image
					src={row.icon}
					alt=""
					width={10}
					height={10}
					className="w-8 h-8 rounded-full object-cover p-2 bg-jodnaRed text-white"
				/>
				<div className="flex flex-col -ml-2">
					<h3 className="font-semibold text-jodnaGray1">class</h3>
					<p className="text-xs text-gray-500">{row.class}</p>
				</div>
			</td>
			<td className="px-4">{row.amount}</td>
			<td className="px-2">
				{/* action buttons div */}
				<div className="flex items-center gap-2">
					<FormModal table="unpaidStudent" type="print" data={row} />
					{role === "admin" && (
						<FormModal table="unpaidStudent" type="more" id={row.id} />
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<div className="bg-white p-4 flex flex-col items-center mx-auto min-w-[300px] overflow-scroll scrollbar-hide  rounded-md">
			{/* TOP */}
			<h2 className="text-jodnaPurple1 text-lg font-bold min-w-fit w-[550px] mx-auto mt-2">
				Unpaid Student in Tuition
			</h2>
			{/* LIST */}
			<div className="mt-4 min-w-[300px] w-[600px] overflow-scroll scrollbar-hide mx-auto">
				<Table
					columns={columns}
					renderRow={renderRow}
					tableData={studentsData}
				/>
				{/* PAGINATION */}
				<Pagination />
			</div>
		</div>
	);
};

export default UnpaidStudentTuition;
