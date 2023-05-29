import React from "react";
import { PROFIILE_PARAMS } from "../profileUtils";

const ProfilePreview = ({ profile }) => {
    return (
        <tr>
            {PROFIILE_PARAMS.map(({ key }) => (
                <td> {profile[key]} </td>
            ))}
        </tr>
    );
};

export default ProfilePreview;
