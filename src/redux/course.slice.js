import {createSlice} from '@reduxjs/toolkit'
import { MdCastForEducation } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const infoData = [
    {
        icon:IoBookSharp,
        title:"Choose Your Course",
        content:"Select your course, All courses are job oriented you can Log in to download our courses."
    },
    { 
        icon:MdCastForEducation,
        title:"Free Courses",
        content:"Our course is provided Online and Offline both for Oflline visit our center.",
    },
    {
        icon:FaFacebook,
        title:"Our Hiring Parterns",
        content:"Provide Mentroship From Top Leadings IT Companies.",
    },
    {
        icon:GrCertificate,
        title:"Certifications",
        content:"We are ISO Certified and Experienced Teachers from Top Leading Universities.",
    },
    {
        icon:FaNetworkWired,
        title:"Campus Drive",
        content:"Associated with many top leading coporate compines.",
    },
    
]

const courseSlice = createSlice({
    name:"course",
    initialState:{
        infoData
    },
    reducers:{},
    extraReducers:() =>{}
})

export default courseSlice.reducer