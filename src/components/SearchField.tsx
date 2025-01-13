import Image from "next/image";

const SearchField = () => {
	return (
		<>
			<Image src="/search.png" alt="search-icon" width={14} height={14} />
			<input
				type="text"
				placeholder="Search here..."
				className="flex flex-1 w-[120px] md:w-[200px] p-2 outline-none"
			/>
		</>
	);
};

export default SearchField;
