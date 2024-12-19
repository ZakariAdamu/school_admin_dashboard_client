"use client";

import Image from "next/image";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const weeklyPerformanceData = [
	{
		icon: "/white-ball.png",
		label: "This Week",
		total: "1,245",
		backgroundColor: "bg-jodnaYellow",
	},
	{
		icon: "/white-ball.png",
		label: "Last Week",
		total: "1,356",
		backgroundColor: "bg-jodnaRed",
	},
];

const data = [
	{
		name: "Jan",
		previous: 23,
		current: 4,
	},
	{
		name: "Feb",
		previous: 27,
		current: 40,
	},
	{
		name: "Mar",
		previous: 35,
		current: 85,
	},
	{
		name: "Apr",
		previous: 25,
		current: 30,
	},
	{
		name: "May",
		previous: 10,
		current: 0,
	},
	{
		name: "Jun",
		previous: 27,
		current: 17,
	},
	{
		name: "July",
		previous: 60,
		current: 52,
	},
	{
		name: "Aug",
		previous: 27,
		current: 30,
	},
	{
		name: "Sept",
		previous: 5,
		current: 25,
	},
	{
		name: "Oct",
		previous: 30,
		current: 38,
	},
	{
		name: "Nov",
		previous: 80,
		current: 60,
	},
	{
		name: "Dec",
		previous: 40,
		current: 51,
	},
];

const PerformanceChart = () => {
	return (
		<div className="bg-white rounded-xl w-full h-full pt-4 px-4 pb-10">
			{/* TITLE */}
			<div className="flex justify-between items-center mb-5">
				<h1 className="text-lg font-semibold text-jodnaPurple1">
					School Performance
				</h1>
				{/* Data Summary */}
				<div className="flex m-2 justify-between gap-5">
					{weeklyPerformanceData.map((week) => (
						<div
							key={week.label}
							className="flex flex-col justify-between items-center"
						>
							<div className="flex items-center justify-center gap-2">
								<Image
									src={week.icon}
									width={15}
									height={15}
									alt=""
									className={`${week.backgroundColor} p-1 rounded-full`}
								/>
								<h2 className="capitalize text-sm font-medium text-gray-500">
									{week.label}
								</h2>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-xl font-bold">{week.total}</h1>
							</div>
						</div>
					))}
				</div>
			</div>

			<ResponsiveContainer width="100%" height="90%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="1 1" horizontal={false} stroke="#ddd" />
					<XAxis
						dataKey="name"
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
						tickMargin={10}
					/>
					<YAxis
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
						tickMargin={20}
					/>
					<Tooltip />
					{/* <Legend
						align="center"
						verticalAlign="top"
						wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
					/> */}
					<Line
						type="monotone"
						dataKey="current"
						stroke="#FCC43E"
						strokeWidth={4}
					/>
					<Line
						type="monotone"
						dataKey="previous"
						stroke="#FF4550"
						strokeWidth={4}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PerformanceChart;
