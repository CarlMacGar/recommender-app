import axios from "axios";
import { apiUrl } from "./env.service.js";

const url = `${apiUrl}`;

export const getRecomendations = async (jobId)=>{
    return await axios.get(`${url}/recommend/${jobId}`)
}

export const getJobById = async (jobId)=>{
    return await axios.get(`${url}/job/${jobId}`)
}

export const searchJobsTitle = async (jobTitle)=>{
    return await axios.get(`${url}/jobs/${jobTitle}`)
}

export const getFirstJobs = async ()=>{
    return await axios.get(`${url}/jobs`)
}