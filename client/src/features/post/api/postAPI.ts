import axiosClient from './axiosClient';

const postApi = {
    post: (params: any) => axiosClient.post("/post/product", params),
};

export default postApi;