import Image from "next/image";

interface UserTypeProps {
	user: UserType;
}

const UserCard = ({ user }: UserTypeProps) => {
	return (
		<div
			key={user.label}
			className="flex justify-center gap-3 items-center user"
		>
			<div className={`${user.backgroundColor} rounded-full p-3`}>
				<Image
					src={user.icon}
					width={30}
					height={30}
					alt=""
					style={{
						filter:
							"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) brightness(100%) contrast(100%)",
					}}
				/>
			</div>
			<div className="flex flex-col items-center">
				<h2 className="capitalize text-sm font-medium text-gray-500">
					{user.label}
				</h2>
				<h1 className="text-2xl font-semibold">{user.total}</h1>
			</div>
		</div>
	);
};

export default UserCard;
