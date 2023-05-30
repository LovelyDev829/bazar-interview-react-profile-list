import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";

const ProfilePreview = ({ profile, detail, setModalFlag, setModalData }) => {
    return (
        <tr>
            {PROFIILE_PARAMS.map(({ key }, index) => (
                <td key={index} onClick={()=>{
                    setModalFlag(true)
                    setModalData(detail)
                }}> {profile[key]} </td>
            ))}
        </tr>
    );
};

export default ProfilePreview;
