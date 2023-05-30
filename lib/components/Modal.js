import React from 'react'
import Image from 'next/image';

function Modal({ modalFlag, modalData, setModalFlag }) {
    console.log("modalData", modalData)
    return (
        <div className={modalFlag? 'Modal' : 'hidden'} onClick={()=>setModalFlag(false)}>
            <div className='modal-box'>
                <div className='avatar'>
                    <img src={modalData?.picture?.large} alt='AVATAR'/>
                </div>
                <div className='detail-item'>
                    <span>Name</span>
                    <span>{modalData?.name?.first} {modalData?.name?.last}</span>
                </div>
                <div className='detail-item'>
                    <span>Gender</span>
                    <span>{modalData?.gender}</span>
                </div>
                <div className='detail-item'>
                    <span>Age</span>
                    <span>{modalData?.dob?.age}</span>
                </div>

                <div className='detail-item'>
                    <span>Location</span>
                    <span>{modalData?.location?.city}, {modalData?.location?.state}, {modalData?.location?.country}</span>
                </div>
                <div className='detail-item'>
                    <span>Postcode</span>
                    <span>{modalData?.location?.postcode}</span>
                </div>
                <div className='detail-item'>
                    <span>Timezone</span>
                    <span>{modalData?.location?.timezone?.description}</span>
                </div>
                <div className='detail-item'>
                    <span>Nationality</span>
                    <span>{modalData?.nat}</span>
                </div>
                <div className='detail-item'>
                    <span>Phone</span>
                    <span>{modalData?.phone}</span>
                </div>
                <div className='detail-item'>
                    <span>Cell</span>
                    <span>{modalData?.cell}</span>
                </div>
                <div className='detail-item'>
                    <span>Email</span>
                    <span>{modalData?.email}</span>
                </div>
                <div className='detail-item'>
                    <span>Resistered Date</span>
                    <span>{modalData?.registered?.date}</span>
                </div>                
            </div>
        </div>
    )
}

export default Modal