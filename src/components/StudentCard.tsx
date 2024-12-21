import Image from "next/image";

interface StudentCardProps {
	student: StudentType;
}

const StudentCard = ({ student }: StudentCardProps) => {
	return (
		<div className="flex justify-between items-center my-3">
			<div className="flex">
				<div className="rounded-full p-3">
					<Image
						src={student.avatar}
						width={40}
						height={40}
						className="rounded-full"
						alt="student avatar"
					/>
				</div>
				<div className="flex flex-col items-start justify-center">
					<h2 className="capitalize text-sm font-semibold ">
						{student.fullName}
					</h2>
					<h1 className="text-xs font-medium text-jodnaGray2">
						{student.class}
					</h1>
				</div>
			</div>
			<div className="">
				<Image src={student.icon} width={40} height={40} alt="mail icon" />
			</div>
		</div>
	);
};

export default StudentCard;
