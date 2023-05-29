/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateProfile } from "../lib/profileUtils";
import ProfileList from "../lib/components/ProfileList";

const Home = () => {
    const [profiles, setProfiles] = useState();

    useEffect(() => {
        axios
            .get("https://randomuser.me/api?results=20")
            .then((res) => {
                setProfiles(res.data.results.map(generateProfile));
            })
            .catch((err) => {
                console.error(err);
                alert("Profile request failed");
            });
    }, []);

    if (!profiles) return <div className="loading-container"></div>;

    return <ProfileList profiles={profiles} setProfiles={setProfiles}/>;
};

export default Home;
