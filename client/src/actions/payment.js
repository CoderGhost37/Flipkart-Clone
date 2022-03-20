import * as api from '../api/index';


export const payUsingPaytm = async (data) => {
    try {
        const response = await api.payUsingPaytm(data);
        return response.data;
    } catch (error) {
        console.log("Error while calling api", error);
    }
}