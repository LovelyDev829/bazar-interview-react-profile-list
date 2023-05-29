import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";
import ReactDragListView from "react-drag-listview";

const ProfileList = ({ profiles, setProfiles }) => {
    const onDragEnd = (fromIndex, toIndex) => {
        console.log(fromIndex, toIndex)
        let tempProfiles = profiles
        const item = tempProfiles.splice(fromIndex - 1, 1)[0];
        tempProfiles.splice(toIndex - 1, 0, item);
        setProfiles([...tempProfiles])
    };
    return (
        <div>
            <ReactDragListView.DragColumn
                onDragEnd={onDragEnd}
                nodeSelector='th'
                handleSelector='.dragHandler'
                ignoreSelector='react-resizable-handle'
            >
                <table style={{ width: '80%', margin: 'auto' }}>
                    <thead>
                        <tr>
                        {PROFIILE_PARAMS.map(({ columnTitle }) => (
                            <th className="title" style={{userSelect: 'none'}}> {columnTitle} </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {profiles.map((prof) => (
                            <ProfilePreview profile={prof} />
                        ))}
                    </tbody>
                </table>
            </ReactDragListView.DragColumn>
        </div>
    );
};

export default ProfileList;
