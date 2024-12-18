import React from "react";

const Announcements = () => {
	return (
		<div className="bg-white p-4 rounded-md">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Recent Students</h1>
				<span className="text-xs text-gray-400">+ Add student</span>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<div className="bg-aishubSkyLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">Samantha William</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">
							Message icon
						</span>
					</div>
					<p className="text-sm text-gray-400 mt-1">Class VII A</p>
				</div>
				<div className="bg-white rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium"> Tony Soap</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">
							Message icon
						</span>
					</div>
					<p className="text-sm text-gray-400  mt-1">Class VII A</p>
				</div>
				<div className="bg-white rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">Karen Hope</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">
							Message icon
						</span>
					</div>
					<p className="text-sm text-gray-400 mt-1">Class VII A</p>
				</div>
			</div>
		</div>
	);
};

export default Announcements;
