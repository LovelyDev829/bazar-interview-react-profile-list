import React from 'react'
import Image from 'next/image';
import searchIcon from '../../assets/search.svg';


function Header({number, setNumber}) {
    return (
        <div className='Header'>
            <span>PROFILE LIST FOR REACT INTERVIEW TEST</span>
            <div className='search'>
                
                <Image
                    priority
                    src={searchIcon}
                    alt="S"
                />
                {/* <span>Count : </span> */}
                <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
            </div>
        </div>
    )
}

export default Header