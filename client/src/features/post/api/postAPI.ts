import axiosClient from './axiosClient';

const postApi = {
    post: (params: any) => axiosClient.post("/post/exhibit", params),
};

export default postApi;