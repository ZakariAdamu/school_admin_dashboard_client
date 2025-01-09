import Image from "next/image";

const Pagination = () => {
	return (
		<div className="p-4 flex items-center gap-28 text-gray-500">
			<div className="flex">
				<small className="text-gray-300">
					Showing <span className="text-jodnaPurple2">1-5 </span>from{" "}
					<span className="text-jodnaPurple2">100 </span>data
				</small>
			</div>
			<div className="flex items-center gap-2 text-sm ">
				<button className="mr-2 ">
					<Image src="/arrow-left.png" width={15} height={15} alt="" />
				</button>
				<button className="border w-8 h-8 rounded-full bg-jodnaPurple1 text-white">
					1
				</button>
				<button className=" border mx-2 w-8 h-8 rounded-full">2</button>
				<button className="border mx-2 w-8 h-8 rounded-full">3</button>
				<button className="px-2 rounded-sm">
					<Image src="/arrow-right.png" width={15} height={15} alt="" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
