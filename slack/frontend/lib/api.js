import {axiosInstance} from "./axios.js";

export const getStreamToken = async()=>{
    const response = await axiosInstance.get("/chat/token")
     return response.data;
}