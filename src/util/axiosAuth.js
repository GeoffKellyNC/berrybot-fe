import axios from 'axios';


export const axiosWithAuth = () => {
    const unx_id = JSON.parse(localStorage.getItem('userData')).unx_id;
    
    return axios.create({
        withCredentials: true,
        headers: {
            unx_id: unx_id,
        },
    });
};
