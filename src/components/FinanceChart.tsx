"use client";

import Image from "next/image";
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const weeklyFinanceData = [
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
		name: "Mon",
		currentWeek: 98,
		previousWeek: 78,
	},
	{
		name: "Tues",
		currentWeek: 45,
		previousWeek: 50,
	},
	{
		name: "Wed",
		currentWeek: 39,
		previousWeek: 31,
	},
	{
		name: "Thurs",
		currentWeek: 50,
		previousWeek: 39,
	},
	{
		name: "Fri",
		currentWeek: 31,
		previousWeek: 20,
	},
	{
		name: "Sat",
		currentWeek: 87,
		previousWeek: 65,
	},
	{
		name: "Sun",
		currentWeek: 75,
		previousWeek: 56,
	},
];

// const getIntroOfPage = (label: string) => {
// 	if (label === "Page A") {
// 		return "Page A is about men's clothing";
// 	}
// 	if (label === "Page B") {
// 		return "Page B is about women's dress";
// 	}
// 	if (label === "Page C") {
// 		return "Page C is about women's bag";
// 	}
// 	return "";
// };

const CustomTooltip = ({
	active,
	payload,
	label,
}: {
	active?: boolean;
	payload?: any[];
	label?: string;
}) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip rounded-2xl w-[150px] h-[100px] flex flex-col bg-jodnaPurple1 text-white items-center justify-center p-2 gap-3 mb-10 flex-1">
				<p className="label font-bold text-xl">{`42%`}</p>
				{/* <p className="intro">{getIntroOfPage(label)}</p> */}
				<p className="desc">982 Income</p>
			</div>
		);
	}

	return null;
};

const FinanceChart = () => {
	return (
		<div className="bg-white rounded-lg py-6 h-full">
			<div className="flex justify-between px-2 items-center">
				<h1 className="text-lg -mt-6 pl-2 font-semibold">School Finance</h1>
				{/* Weekly Finance Data Summary at the top, this is not the chart */}
				<div className="flex justify-between gap-4">
					{weeklyFinanceData.map((week) => (
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
								<h3 className="capitalize flex text-sm font-medium text-gray-500">
									{week.label}
								</h3>
							</div>
							<div className="flex flex-col items-center">
								<h1 className="text-lg font-bold">{week.total}</h1>
							</div>
						</div>
					))}
				</div>{" "}
			</div>
			<ResponsiveContainer width="100%" height="90%">
				<BarChart
					width={500}
					height={300}
					data={data}
					barSize={13}
					margin={{
						right: 10,
					}}
					barCategoryGap={10} // Spacing between bar categories
					barGap={3} // Spacing between bars in the same group
				>
					<CartesianGrid strokeDasharray="1 1" vertical={true} stroke="#ddd" />
					<XAxis
						dataKey="name"
						axisLine={false}
						tick={{ fill: "#d1d5db" }}
						tickLine={false}
					/>
					<YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
					{/* <Tooltip
						contentStyle={{
							borderRadius: "10px",
							borderColor: "lightgray",
						}}
					/> */}
					<Tooltip content={<CustomTooltip />} />
					{/* <Legend
						align="left"
						verticalAlign="top"
						wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
					/> */}
					<Bar
						dataKey="previousWeek"
						fill="#FB7D5B"
						legendType="circle"
						radius={[5, 5, 0, 0]}
					/>
					<Bar
						dataKey="currentWeek"
						fill="#FCC43E"
						legendType="circle"
						radius={[5, 5, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;
