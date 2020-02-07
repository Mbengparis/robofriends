import React from 'react';


const SearchBox = ({searchChange}) => {
    return(
        <div >
  <input 
  type ='search' 
  placeholder='search robots' 
  className='bg-washed-blue h2 pa3 ma3 w-50 h2 br-pill'
  onChange ={searchChange}
  />
</div>
    )
}

export default SearchBox;