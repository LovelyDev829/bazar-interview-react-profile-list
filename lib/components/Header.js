import React from 'react'
import Image from 'next/image';
import searchIcon from '../../assets/search.svg';

function Header() {
    return (
        <div className='Header'>
            <span>PROFILE LIST FOR REACT INTERVIEW TEST</span>
            <div className='search'>
                <input />
                <Image
                    priority
                    src={searchIcon}
                    alt="Follow us on Twitter"
                />
                
            </div>
        </div>
    )
}

export default Header