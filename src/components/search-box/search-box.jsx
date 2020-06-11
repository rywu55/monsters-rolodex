import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeH, handleChange}) => {
    return(
        <input 
            className = 'search'
            type= 'search'
            placeholder = { placeH }
            onChange = {handleChange}
        />
    )
}