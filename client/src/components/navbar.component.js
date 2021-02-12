import React from 'react'
import { SearchBar, AvatarUser } from 'components'
import { BsGear as ConfigIcon } from 'react-icons/bs'

export default function Navbar() {
    return (
        <header className='navbar'>
            {/* View navigation section */}
            <nav className='navbar__container'>
                <SearchBar />
                <ConfigIcon fill='#FECB2E' size={24} />
                <div className='navbar__container--user'>
                    <AvatarUser />
                </div>
            </nav>
        </header>
    )
}
