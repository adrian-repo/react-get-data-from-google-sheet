import React from 'react';


const SearchBox = ({ searchChange  }) =>{
    return (

        <div className='pa2'>
            <input 
                className='ma3 pa3 ba b--blue bg-lightest-blue' 
                type='search' 
                placeholder='Search blog' 
                onChange={searchChange}
            />
        </div>
    );

}

export default SearchBox;