import Image from "next/image";
import FoodMenuCard from "./FoodMenuCard";
import CTAButton from "./CTAButton";

const menuList = [
	{
		_id: "1",
		image:
			"https://res.cloudinary.com/dy6llpr3y/image/upload/v1736424429/pexels-nicu-cobasnean-860727842-19748954_pzvoca.jpg",
		title: "Beef Steak with Fried Potato",
		description: "Lorem ipsum dolor sit amet...",
	},
	{
		_id: "2",
		image:
			"https://res.cloudinary.com/dy6llpr3y/image/upload/v1736429257/Pngtree_pancakes_with_honey_composition_15099972_oxaah3.png",
		title: "Pancake with Honey",
		description: "Lorem ipsum dolor sit amet...",
	},
	{
		_id: "3",
		image:
			"https://res.cloudinary.com/dy6llpr3y/image/upload/v1736430282/close-up-view-delicious-ramen-concept_xjjq0d.jpg",
		title: "Japanese Beef Ramen",
		description: "Lorem ipsum dolor sit amet...",
	},
];

const CurrentFoodsMenu = () => {
	return (
		<>
			{/* Current Foods Menu Section header */}
			<div className="bg-white p-4 md:rounded-md flex flex-col items-center mx-auto min-w-[300px] mt-3 border-t-2 md:border-0">
				<h2 className="capitalize font-bold text-xl text-jodnaPurpleText min-w-fit w-[350px] mx-auto mb-2">
					Current Foods Menu
				</h2>

				{/* Food menu card */}
				<div className="mt-1">
					{menuList.map((menu: FoodMenuType) => (
						<FoodMenuCard key={menu._id} menu={menu} />
					))}
					<CTAButton />
				</div>
			</div>
		</>
	);
};

export default CurrentFoodsMenu;
