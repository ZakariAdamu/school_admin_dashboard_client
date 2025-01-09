import Image from "next/image";

interface FoodMenuCardProps {
	menu: FoodMenuType;
}

const FoodMenuCard = ({ menu }: FoodMenuCardProps) => {
	return (
		<>
			<div className="flex flex-col gap-2 mb-5">
				<Image
					src={menu.image}
					width={350}
					height={200}
					className="h-[160px] shadow-md hover:shadow-xl hover:transform hover:scale-110 ease-in-out transition duration-300 rounded-lg object-cover"
					alt="food menu image"
				/>
				<div className="flex flex-col items-start justify-center w-full">
					<h2 className="capitalize text-sm font-semibold ">{menu.title}</h2>
					<p className="text-xs font-medium text-jodnaGray2">
						{menu.description}
					</p>
				</div>
			</div>
		</>
	);
};

export default FoodMenuCard;
