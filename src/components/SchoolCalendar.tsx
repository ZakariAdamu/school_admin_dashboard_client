"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const SchoolCalendar = () => {
	const [value, onChange] = useState<Value>(new Date());
	return (
		<div className="bg-white rounded-lg px-5 py-6 h-full">
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">School Calendar</h1>
			</div>
			<Calendar onChange={onChange} value={value} />
		</div>
	);
};

export default SchoolCalendar;
