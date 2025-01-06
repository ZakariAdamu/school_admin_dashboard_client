import React from "react";
import RecentStudents from "./RecentStudents";
import Messages from "./MessageList";
import CurrentFoodsMenu from "./CurrentFoodsMenu";

const Announcements = () => {
	return (
		<div className="">
			<RecentStudents />
			<Messages />
			<CurrentFoodsMenu />
		</div>
	);
};

export default Announcements;
