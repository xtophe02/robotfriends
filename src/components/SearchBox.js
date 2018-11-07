import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return(
    <div className='pa2'>
      <input onChange={searchChange} className='pa3 ba b--blue bg-lightest-blue' type="search" placeholder="Search a Robot"/>
    </div>

  );
}

export default SearchBox;
