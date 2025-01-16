const Table = ({
	columns,
	renderRow,
	tableData,
	handleRowClick,
}: {
	columns: {
		header: string | React.ReactNode;
		accessor: string;
		className?: string;
	}[];
	renderRow: (item: any) => React.ReactNode;
	tableData: any[];
	handleRowClick?: (id: number) => void;
}) => {
	return (
		<table className="xl:mx-3 table">
			<thead className="">
				<tr>
					{columns.map((col) => (
						<th key={col.accessor} className={col.className}>
							{col.header}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="">{tableData.map((row) => renderRow(row))}</tbody>
		</table>
	);
};

export default Table;
