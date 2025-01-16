"use client";
import AddButton from "@/components/AddButton";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import SearchField from "@/components/SearchField";
import SelectButton from "@/components/SelectButton";
import Table from "@/components/Table";
import TopBar from "@/components/TopBar";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Student = {
	id: number;
	studentId: string;
	checked: boolean;
	name: string;
	photo: string;
	class: string;
	city: string;
	contact: string;
	grade: string;
	icon: string;
	iconTwo?: string;
	action: string;
	amount: string;
	date: string;
	parentName: string;
	address: string;
	backgroundColor?: string;
};

const StudentsListPage = () => {
	// State to manage the table data
	const [tableData, setTableData] = useState(studentsData);

	// Function to handle row click
	const handleRowClick = (id: number) => {
		setTableData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			)
		);
	};

	// For the Column header
	// const [isChecked, setIsChecked] = useState(false);

	// const handleRowClick = () => {
	// 	setIsChecked((prev) => !prev); // Toggle the checkbox
	// };

	// Column headers
	const columns = [
		{
			header: (
				<td className="p-4">
					<input type="checkbox" />
				</td>
			),
			accessor: "studentRow",
			className: "hover:cursor-pointer",
		},
		{
			header: "Name",
			accessor: "studentName",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "ID",
			accessor: "studentId",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "Date",
			accessor: "class",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "Parent Name",
			accessor: "amount",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "City",
			accessor: "amount",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "Contact",
			accessor: "amount",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "Grade",
			accessor: "amount",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
		{
			header: "Action",
			accessor: "actions",
			className:
				"hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-jodnaPurple2 capitalize tracking-wider",
		},
	];

	const renderRow = (row: Student) => (
		<tr
			key={row.id}
			className=" hover:bg-aishubPurpleLight rounded-sm border-t odd:border-l-4 border-l-jodnaPurple2 odd:border-r"
			onClick={() => handleRowClick(row.id)}
		>
			<td className="px-6 py-4 whitespace-nowrap">
				<input
					type="checkbox"
					checked={row.checked}
					onChange={() => handleRowClick(row.id)}
				/>
			</td>
			<td className="px-3 mr-5 flex items-center gap-3 py-4 whitespace-nowrap">
				<Image
					src={row.photo}
					alt=""
					width={20}
					height={20}
					className=" w-10 h-10 rounded-full object-cover"
				/>
				<span className="font-bold text-sm text-jodnaPurple1">{row.name}</span>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm">{row.studentId}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm">
				<span>{row.date}</span>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm">{row.parentName}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm">{row.city}</td>

			<td className="px-6 py-4 whitespace-nowrap">
				{/* action buttons div for contact */}
				<div className="flex items-center gap-2">
					<button className="flex items-center justify-center w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full">
						<Image src={row.contact} width={16} height={16} alt="" />
					</button>
					<button className="flex items-center justify-center w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full">
						<Image src="/Email.png" width={16} height={16} alt="" />
					</button>
				</div>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<span
					className={`${row.backgroundColor} flex items-center justify-center w-7 h-7 bg-gray-200 text-white rounded-2xl text-xs px-7`}
				>
					{row.class}
				</span>
			</td>

			<td className="px-6 py-4 whitespace-nowrap">
				{/* action button div */}
				<div className="flex items-center gap-2">
					{role === "admin" && (
						<FormModal table="student" type="more" id={row.id} />
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<>
			<div className="flex flex-col w-full h-full bg-[#e2eceb] gap-4">
				{/* TOP */}
				<div className="flex items-center w-[94%] xl:w-[90%] 2xl:w-[87%] mx-5 lg:mx-auto mt-[2px] justify-between">
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
						<div className="hidden md:block -mr-3">
							<TopBar />
						</div>
						<div className="flex items-center gap-4">
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
				{/* Next Section */}
				{/* LIST */}
				<div className="bg-white p-4 rounded-md mt-4 min-w-[400px] w-[94%] lg:w-[98%] mx-auto 2xl:w-[96%] overflow-scroll scrollbar-hide">
					<Table
						columns={columns}
						renderRow={renderRow}
						tableData={tableData}
						handleRowClick={handleRowClick}
					/>
					{/* PAGINATION */}
					<Pagination />
				</div>
			</div>
		</>
	);
};

export default StudentsListPage;
