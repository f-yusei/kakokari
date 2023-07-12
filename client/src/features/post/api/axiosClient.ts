import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3300/api/v1";

const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({
    baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    } as InternalAxiosRequestConfig;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        throw error.response;
    }
);

export default axiosClient;
