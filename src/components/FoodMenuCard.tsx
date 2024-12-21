import Image from "next/image";

interface FoodMenuCardProps {
	menu: FoodMenuType;
}

const FoodMenuCard = ({ menu }: FoodMenuCardProps) => {
	return (
		<>
			<div className="flex flex-col justify-between items-center my-5">
				<div className="rounded-lg w-full max-w-[270px] h-28 mb-1 bg-slate-300 p-3 -ml-3">
					{/* <Image
						src={menu.image}
						width={200}
						height={50}
						className="rounded-xl"
						alt="user avatar"
					/> */}
				</div>
				<div className="flex flex-col items-start justify-center -ml-3">
					<h2 className="capitalize text-lg font-semibold ">{menu.title}</h2>
					<h1 className="text-sm font-medium text-jodnaGray2">
						{menu.description}
					</h1>
				</div>
			</div>
		</>
	);
};

export default FoodMenuCard;
