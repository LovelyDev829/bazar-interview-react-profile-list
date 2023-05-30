import React, { useState } from 'react'
import Image from 'next/image';
import menuIcon from '../../assets/menu.svg';

function LeftBar({genderFilter, setGenderFilter, ageFilter, setAgeFilter}) {
    const [leftBarFlag, setLeftBarFlag] = useState(false)
    const ages = [
        '01 - 30',
        '31 - 60',
        '61 - 90',
        '91 - ',
    ]
    return (
        <div className={leftBarFlag? 'LeftBar' : 'LeftBar slide-hide'}>
            <div className='button'>
                <Image
                    priority
                    src={menuIcon}
                    alt="MENU"
                    onClick={()=>setLeftBarFlag(!leftBarFlag)}
                />
            </div>
            <h4>Filter</h4>
            <div className='filter-item'>
                <span>Gender</span>
                <div className='item'>
                    <span>male</span>
                    <input type='checkbox' checked={genderFilter[0]} onChange={()=>setGenderFilter([!genderFilter[0], genderFilter[1]])}/>
                </div>
                <div className='item'>
                    <span>female</span>
                    <input type='checkbox' checked={genderFilter[1]} onChange={()=>setGenderFilter([genderFilter[0], !genderFilter[1]])}/>
                </div>
            </div>
            <div className='filter-item'>
                <span>Age</span>
                {
                    ages.map((age, index)=>{ return(
                        <div className='item' key={index}>
                            <span>{age}</span>
                            <input type='checkbox' checked={ageFilter[index]} onChange={()=>{
                                let tempAgeFilter = ageFilter
                                tempAgeFilter[index] = !tempAgeFilter[index]
                                setAgeFilter([...tempAgeFilter])
                            }}/>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default LeftBar