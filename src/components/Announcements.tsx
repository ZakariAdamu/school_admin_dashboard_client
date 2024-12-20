import React from "react";
import RecentStudents from "./RecentStudents";
import Messages from "./MessageList";
import CurrentFoodsMenu from "./CurrentFoodsMenu";

const Announcements = () => {
	return (
		<>
			<RecentStudents />
			<Messages />
			<CurrentFoodsMenu />
		</>
	);
};

export default Announcements;
