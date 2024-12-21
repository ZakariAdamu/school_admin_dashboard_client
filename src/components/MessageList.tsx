import Image from "next/image";
import MessageCard from "./MessageCard";

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
			<div className="bg-white p-4 rounded-md">
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
					<button className="block w-full max-w-[335px] mt-7 mx-auto capitalize text-lg font-bold text-jodnaPurpleText bg-jodnaBgButton px-2 py-4 rounded-full hover:bg-slate-300">
						view more
					</button>
				</div>
			</div>
		</>
	);
};

export default MessageList;
