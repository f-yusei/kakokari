import axiosClient from './axiosClient';

const authApi = {
    register: (params: any) => axiosClient.post('/auth/register', params),
    login: (params: any) => axiosClient.post('/auth/login', params),
};

export default authApi;