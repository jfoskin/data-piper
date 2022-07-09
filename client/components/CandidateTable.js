import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { Filter } from './Filter';

export function CandidateTable(props) {
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
				? Object.keys(candidates[0]).map((key) => {
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
			<table {...getTableProps()} style={{ border: 'solid 1px blue', padding: '0.5rem' }}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									style={{
										borderBottom: 'solid 3px #52A8ff',
										background: 'aliceblue',
										color: 'black',
										fontWeight: 'bold',
										
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
											border: 'solid 1px navy',
											background: '#40404008',
											
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
