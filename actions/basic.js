import axios from 'axios';
// const baseURL = "http://localhost:5000";
export const baseURL = "https://back.europa777.com";

export const Axios = (meth , suburl, data) => {
    return axios({
        method: meth,
        url: `${baseURL+suburl}`,
        data: data
    });
}