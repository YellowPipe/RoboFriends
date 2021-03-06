import React from 'react';

const SearchBox = ({ searchfield, searchChange} ) => {
	return (
		<div className='pa2'>
			<input
			aria-label='Search robots'
			className='pa3 yellow ba b--green bg-mid-gray'
			type='search'
			placeholder='search robots'
			onChange={searchChange}
			 />
		</div>
	);
}
export default SearchBox