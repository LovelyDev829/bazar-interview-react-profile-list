import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";
import ReactDragListView from "react-drag-listview";

const ProfileList = ({ profiles, genderFilter, ageFilter, totalData, setModalFlag, setModalData }) => {
    const onDragEnd = (fromIndex, toIndex) => {
        // console.log(fromIndex, toIndex)
        // let tempProfiles = profiles
        // const item = tempProfiles.splice(fromIndex - 1, 1)[0];
        // tempProfiles.splice(toIndex - 1, 0, item);
        // setProfiles([...tempProfiles])
    };
    return (
        <div className="ProfileList">
            <ReactDragListView.DragColumn
                onDragEnd={onDragEnd}
                nodeSelector='th'
                handleSelector='.dragHandler'
                ignoreSelector='react-resizable-handle'
            >
                <table style={{ width: '80%', margin: 'auto' }}>
                    <thead>
                        <tr>
                        {PROFIILE_PARAMS.map(({ columnTitle }, index) => (
                            <th className='dragHandler' style={{userSelect: 'none'}} key={index}> {columnTitle} </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {profiles.map((prof, index) => 
                        {
                            let firstflag = false, secondFlag = false

                            if(prof?.gender === 'male' && genderFilter[0]) firstflag = true
                            else if(prof?.gender === 'female' && genderFilter[1]) firstflag = true
                            
                            if(prof?.age <= 30 && ageFilter[0]) secondFlag = true
                            else if(30 < prof?.age && prof?.age <= 60 && ageFilter[1]) secondFlag = true
                            else if(60 < prof?.age && prof?.age <= 90 && ageFilter[2]) secondFlag = true
                            else if(90 < prof?.age && ageFilter[3]) secondFlag = true

                            
                            return firstflag && secondFlag ? (
                                <ProfilePreview profile={prof} detail={totalData[index]} setModalFlag={setModalFlag} setModalData={setModalData} key={index}/>
                            ):(<></>)
                        }
                        )}
                    </tbody>
                </table>
            </ReactDragListView.DragColumn>
        </div>
    );
};

export default ProfileList;
