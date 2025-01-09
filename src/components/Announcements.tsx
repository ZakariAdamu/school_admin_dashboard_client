import RecentStudents from "./RecentStudents";
import Messages from "./MessageList";
import CurrentFoodsMenu from "./CurrentFoodsMenu";

const Announcements = () => {
	return (
		<div className="min-w-[300px]">
			<RecentStudents />
			<Messages />
			<CurrentFoodsMenu />
		</div>
	);
};

export default Announcements;
