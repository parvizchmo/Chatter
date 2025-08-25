import {createContext, useEffect} from "react";
import {useAuth} from "@clerk/clerk-react"
import {axiosInstance} from "../lib/axios.js";
import toast from "react-hot-toast"

const AuthContext = createContext({})

export default function AuthProvide({children}) {

    const {getToken} = useAuth()

    useEffect(() => {
//setup axios
        const interceptor = axiosInstance.interceptors.request.use(
            async (response) => {
                try {
                    const token = await getToken()
                    if (token) {
                        response.headers.Authorization = `Bearer ${token}`
                    }
                } catch (err) {
                    if (err.message?.includes("auth") || err.message?.includes("token")) {
                        toast.error("Authentication failed. Please log in ")
                    }
                    console.log(err, "error getting token")
                }
            },
            (error) => {
                console.log("AXIOS request error:", error)
                return Promise.reject(error)
            }

        );

        return () => axiosInstance.interceptors.request.eject(interceptor);
    }, [getToken]);

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
    //cleanup func


}