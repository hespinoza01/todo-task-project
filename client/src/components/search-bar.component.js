import React from 'react'
import { MdSearch as SearchIcon } from 'react-icons/md'

export default function SearchBar() {
    return (
        <div className='search-bar'>
            <input
                type='text'
                className='search-bar__input'
                placeholder='Buscar Hash'
            />
            <SearchIcon className='search-bar__icon' size={24} />
        </div>
    )
}
