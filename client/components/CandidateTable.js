import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { Filter } from './Filter';

function CandidateTable(props) {
	const [candidates, setCandidates] = useState([]);

	const getCandidates = async () => {
		const response = await axios
			.get('/api/candidate')
			.catch((err) => console.log(err));

		if (response) {
			const allCandidates = response.data;

			console.log(' All Candidates: ', allCandidates);
			setCandidates(allCandidates);
		}
	};

	const candidatesData = useMemo(() => [...candidates], [candidates]);

	const candidatesColumns = useMemo(
		() =>
			candidates[0]
				? Object.keys(candidates[0]).filter((key) => key !== "id" && key !== "createdAt" && key !== "updatedAt").map((key) => {
						return { Header: key, accessor: key };
				  })
				: [],
		[candidates]
	);

	const tableInstance = useTable(
		{ columns: candidatesColumns, data: candidatesData },
		useGlobalFilter,
		useSortBy
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		preGlobalFilteredRows,
		setGlobalFilter,
		state
	} = tableInstance;

	useEffect(() => {
		getCandidates();
	}, []);

	return (
		<>
			<Filter
				preGlobalFilteredRows={preGlobalFilteredRows}
				setGlobalFilter={setGlobalFilter}
				globalFilter={state.globalFilter}
			/>
			<table {...getTableProps()} style={{ border: 'solid 1px blue', padding: '0.5rem', marginLeft: '3rem', marginRight: '3rem' }}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									style={{
										borderBottom: 'solid 3px #52A8ff',
										color: '#ff9800',
										fontWeight: 'bold',
										background: '#f4f4f4c7',
										padding: '7px',
										
									}}
								>
									{column.render('Header')}
									{column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, idx) => {
						prepareRow(row);

						return (
							<tr
								{...row.getRowProps()}
								// className={isEven(idx) ? 'bg-green-400 bg-opacity-30' : ''}
							>
								{row.cells.map((cell, idx) => (
									<td
										{...cell.getCellProps()}
										style={{
											padding: '20px',
											background: '#f4f4f466',
											
										}}
									>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default CandidateTable;