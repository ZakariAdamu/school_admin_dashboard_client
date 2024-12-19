import React from "react";
import RecentStudents from "./RecentStudents";
import Messages from "./Messages";
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
