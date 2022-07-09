import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export function Filter({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 300);
	return (
		<div className='tableSearch'>
			<label id='searchlabel'>Search:</label>
			<input
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
			/>
		</div>
	);
}
