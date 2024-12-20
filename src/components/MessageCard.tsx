import Image from "next/image";

interface MessageCardProps {
	message: MessageListType;
}

const MessageCard = ({ message }: MessageCardProps) => {
	return (
		<>
			<div className="flex justify-between items-center my-3">
				<div className="rounded-full p-3 -ml-3">
					<Image
						src={message.avatar}
						width={45}
						height={40}
						className="rounded-full"
						alt="user avatar"
					/>
				</div>
				<div className="flex flex-col items-start justify-center -ml-3">
					<h2 className="capitalize text-lg font-semibold ">
						{message.fullName}
					</h2>
					<h1 className="text-sm font-medium text-jodnaGray2">
						{message.messageBody}
					</h1>
				</div>
				<div className="pr-1 -mt-7 text-jodnaGray2">
					<p className="">12:45 PM</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default MessageCard;
