import Image from "next/image";
import MessageCard from "./MessageCard";
import CTAButton from "./CTAButton";

const messageList = [
	{
		_id: "1",
		avatar: "/avatar2.png",
		fullName: "Samantha William",
		messageBody: "Lorem ipsum dolor sit amet...",
		time: "/mail-button.png",
	},
	{
		_id: "2",
		avatar: "/avatar2.png",
		fullName: "Tony Soap",
		messageBody: "Lorem ipsum dolor sit amet...",
		time: "/mail-button.png",
	},
	{
		_id: "4",
		avatar: "/avatar2.png",
		fullName: "Jordan Nico",
		messageBody: "Lorem ipsum dolor sit amet...",
		time: "/mail-button.png",
	},
	{
		_id: "5",
		avatar: "/avatar2.png",
		fullName: "Nadila Adja",
		messageBody: "Lorem ipsum dolor sit amet...",
		time: "/mail-button.png",
	},
];

const MessageList = () => {
	return (
		<>
			{/* Message List Section header */}
			<div className="bg-white p-4 rounded-md min-w-[300px]">
				<div className="flex justify-between items-center">
					<div className="-mb-2">
						<h2 className="capitalize font-bold text-xl text-jodnaPurpleText">
							Messages
						</h2>
					</div>
				</div>

				{/* Message Card */}
				<div className="mt-8">
					{messageList.map((message: MessageListType) => (
						<MessageCard key={message._id} message={message} />
					))}
					<CTAButton />
				</div>
			</div>
		</>
	);
};

export default MessageList;
