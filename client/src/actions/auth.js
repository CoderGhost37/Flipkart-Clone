import * as api from '../api/index';

export const signUp = async (formData) => {
    try {
        return await api.signUp(formData);
    } catch (error) {
        console.log(error.message);
    }
}

export const signIn = async (formData) => {
    try {
        return await api.signIn(formData);
    } catch (error) {
        console.log(error.message);
    }
}