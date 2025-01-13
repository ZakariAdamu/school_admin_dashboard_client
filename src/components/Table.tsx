const Table = ({
	columns,
	renderRow,
	data,
}: {
	columns: { header: string; accessor: string; className?: string }[];
	renderRow: (item: any) => React.ReactNode;
	data: any[];
}) => {
	return (
		<table className="">
			<thead>
				<tr className="text-left text-gray-500 text-sm">
					{columns.map((col) => (
						<th key={col.accessor} className={col.className}>
							{col.header}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="">{data.map((item) => renderRow(item))}</tbody>
		</table>
	);
};

export default Table;