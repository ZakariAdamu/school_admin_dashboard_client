"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
	{
		icon: "/Home.png",
		label: "Dashboard",
		href: "/admin",
		visible: ["admin", "teacher", "student"],
	},
	{
		icon: "/student.png",
		label: "Students",
		href: "/students",
		visible: ["admin", "teacher"],
	},
	{
		icon: "/teacher.svg",
		label: "Teachers",
		href: "/teachers",
		visible: ["admin", "teacher"],
	},

	{
		icon: "/event.svg",
		label: "Event",
		href: "/event",
		visible: ["admin", "teacher"],
	},
	{
		icon: "/finance.svg",
		label: "Finance",
		href: "/finance",
		visible: ["admin", "teacher"],
	},
	{
		icon: "/food.svg",
		label: "Food",
		href: "/food",
		visible: ["admin", "teacher", "student"],
	},
	{
		icon: "/user.svg",
		label: "User",
		href: "/user",
		visible: ["admin", "teacher", "student"],
	},
	{
		icon: "/chat.svg",
		label: "Chat",
		href: "/chat",
		visible: ["admin", "teacher", "student"],
	},
	{
		icon: "/activity.svg",
		label: "Latest Activity",
		href: "/activity",
		visible: ["admin", "teacher", "student"],
	},
];

const Menu = () => {
	const pathname = usePathname();

	return (
		<div className="mt-7 flex flex-col text-sm ml-8">
			{menuItems.map((item) => (
				<Link
					href={item.href}
					key={item.label}
					className={`flex items-center justify-center menu-item lg:justify-start gap-4 hover:bg-white hover:rounded-l-full hover:text-jodnaPurple1 -ml-3 my-3 py-2 md:px-2 ${
						pathname === item.href && "active rounded rounded-l-full"
					} `}
				>
					<Image
						src={item.icon}
						alt="menu-icon"
						width={20}
						height={20}
						className="icon"
					/>
					<span className="hidden text-slate-400 lg:block">{item.label}</span>
				</Link>
			))}
		</div>
	);
};

export default Menu;
