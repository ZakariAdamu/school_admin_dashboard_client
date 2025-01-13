"use client";
import Image from "next/image";
export default function AddButton() {
	return (
		<div className="relative inline-block text-left">
			<button className="flex justify-center items-center gap-2 w-[150px] px-2 py-[8px] bg-jodnaPurple1 rounded-3xl shadow hover:opacity-75 focus:outline-none font-normal">
				<Image src="/white-plus.png" alt="" width={12} height={12} />
				<span className="text-white ">New Student</span>
			</button>
		</div>
	);
}
