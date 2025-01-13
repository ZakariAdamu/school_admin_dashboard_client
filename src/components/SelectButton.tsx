"use client";
import Image from "next/image";
import { useState } from "react";

export default function SelectButton() {
	const [selectedOption, setSelectedOption] = useState("Newest");

	const handleChange = (option: string) => {
		setSelectedOption(option);
	};
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative inline-block text-left">
			<button
				className="flex justify-center items-center gap-4 w-[150px] px-2 py-[3px] mt-14 md:mt-0 mr-2 md:mr-0 md:py-[6px] bg-transparent text-jodnaPurple1 border-2 border-jodnaPurple1 font-medium rounded-3xl shadow hover:opacity-70 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedOption}
				<Image src="/dropdown.svg" alt="" width={20} height={20} />
			</button>
			{isOpen && (
				<div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
					<div
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
						onClick={() => {
							setSelectedOption("Newest");
							setIsOpen(false);
						}}
					>
						Newest
					</div>
					<div
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
						onClick={() => {
							setSelectedOption("Oldest");
							setIsOpen(false);
						}}
					>
						Oldest
					</div>
				</div>
			)}
		</div>
	);
}
