import Image from "next/image";

interface MessageCardProps {
	message: MessageListType;
}

const MessageCard = ({ message }: MessageCardProps) => {
	return (
		<>
			<div className="flex flex-col justify-center gap-6 w-full items-center my-3">
				<div className="flex w-full items-center justify-start">
					<div className="rounded-full mr-2">
						<Image
							src={message.avatar}
							width={40}
							height={40}
							className="rounded-full"
							alt="user avatar"
						/>
					</div>
					<h2 className="capitalize text-sm font-semibold -mt-4 mr-6 ">
						{message.fullName}
					</h2>
					<p className="text-xs text-jodnaGray2 -mt-4 flex-item-right">
						12:45 PM
					</p>
				</div>
				<div className="text-[10px] -mt-9 text-jodnaGray2">
					<p className="text-xs font-medium text-jodnaGray2">
						{message.messageBody}
					</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default MessageCard;
