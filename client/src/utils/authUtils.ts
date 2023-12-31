import authApi from "../features/auth/api/authApi";

const authUtils = {
    isAuthenticated: async () => {
        const token = localStorage.getItem('token');
        if (!token) return false;

        try {
            const res = await authApi.verifyToken();
            return res.data;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
};

export default authUtils;