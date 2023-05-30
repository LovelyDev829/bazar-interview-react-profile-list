/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateProfile } from "../lib/profileUtils";
import ProfileList from "../lib/components/ProfileList";
import Header from "../lib/components/Header";
import Footer from "../lib/components/Footer";
import LeftBar from "../lib/components/LeftBar";
import Modal from "../lib/components/Modal";

const Home = () => {
    const [profiles, setProfiles] = useState();
    const [totalData, setTotalData] = useState({})
    const [number, setNumber] = useState(20)
    const [genderFilter, setGenderFilter] = useState([true, true])
    const [ageFilter, setAgeFilter] = useState([true, true, true, true])
    const [modalFlag, setModalFlag] = useState(false)
    const [modalData, setModalData] = useState({})

    useEffect(() => {
        axios
            .get(`https://randomuser.me/api?results=${number}`)
            .then((res) => {
                setProfiles(res.data.results.map(generateProfile));
                setTotalData(res.data.results)
            })
            .catch((err) => {
                console.error(err);
                alert("Profile request failed");
            });
    }, [number]);

    return(
        <>
            <Modal modalFlag={modalFlag} modalData={modalData} setModalFlag={setModalFlag}/>
            <LeftBar genderFilter={genderFilter} setGenderFilter={setGenderFilter} ageFilter={ageFilter} setAgeFilter={setAgeFilter}/>
            <Header number={number} setNumber={setNumber} />
            {
                !profiles?
                <div className="loading-container"></div>
                :
                <ProfileList profiles={profiles} genderFilter={genderFilter} ageFilter={ageFilter}
                totalData={totalData} setModalFlag={setModalFlag} setModalData={setModalData}/>
            }
            <Footer/>
        </>
    )
};

export default Home;
