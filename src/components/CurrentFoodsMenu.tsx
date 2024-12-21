import Image from "next/image";
import FoodMenuCard from "./FoodMenuCard";

const menuList = [
	{
		_id: "1",
		image: "/avatar2.png",
		title: "Beef Steak with Fried Potato",
		description: "Lorem ipsum dolor sit amet...",
	},
	{
		_id: "2",
		image: "/avatar2.png",
		title: "Pancake with Honey",
		description: "Lorem ipsum dolor sit amet...",
	},
	{
		_id: "3",
		image: "/avatar2.png",
		title: "Japanese Beef Ramen",
		description: "Lorem ipsum dolor sit amet...",
	},
];

const CurrentFoodsMenu = () => {
	return (
		<>
			{/* Current Foods Menu Section header */}
			<div className="bg-white p-4 rounded-md">
				<div className="flex justify-between items-center">
					<div className="flex flex-col items-start">
						<h2 className="capitalize font-bold text-xl text-jodnaPurpleText">
							Current Foods Menu
						</h2>
					</div>
				</div>

				{/* Food menu card */}
				<div className="mt-5">
					{menuList.map((menu: FoodMenuType) => (
						<FoodMenuCard key={menu._id} menu={menu} />
					))}
					<button className="block w-full max-w-[335px] mt-7 mx-auto capitalize text-lg font-bold text-jodnaPurpleText bg-jodnaBgButton px-2 py-4 rounded-full hover:bg-slate-300">
						view more
					</button>
				</div>
			</div>
		</>
	);
};

export default CurrentFoodsMenu;
