import axiosClient from './axiosClient';

const productsApi = {
    post: (params: any) => axiosClient.post("/product/exhibit", params),
    getAllProducts: () => axiosClient.get("/product/getAllProducts"),
    getLoginUserProducts: () => axiosClient.get("/product/getLoginUserProducts"),
    getOneProduct: (id: any) => axiosClient.get(`/product/${id}`),
};

export default productsApi;