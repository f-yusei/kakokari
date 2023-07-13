import axiosClient from './axiosClient';

const productsApi = {
    post: (params: any) => axiosClient.post("/post/exhibit", params),
    getAllProducts: () => axiosClient.get("/post/getAllProducts"),
    getLoginUserProducts: () => axiosClient.get("/post/getLoginUserProducts"),
};

export default productsApi;