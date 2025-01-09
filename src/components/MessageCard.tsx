import Image from "next/image";

interface MessageCardProps {
	message: MessageListType;
}

const MessageCard = ({ message }: MessageCardProps) => {
	return (
		<>
			<div className="flex justify-between items-center my-3">
				<div className="flex">
					<div className="rounded-full mr-2">
						<Image
							src={message.avatar}
							width={40}
							height={40}
							className="rounded-full"
							alt="user avatar"
						/>
					</div>
					<div className="flex flex-col items-start justify-center mt-4 gap-4">
						<h2 className="capitalize text-sm font-semibold -mt-4 mr-6 ">
							{message.fullName}
						</h2>
						<p className="text-xs text-jodnaGray2 -mt-4 flex-item-right">
							{/* 12:45 PM */}
							{message.messageBody}
						</p>
					</div>
				</div>
				<div className="text-[10px] -mt-5 text-jodnaGray2">
					<p className="text-xs font-medium text-jodnaGray2">
						{/* {message.messageBody} */}
						12:45 PM
					</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default MessageCard;
