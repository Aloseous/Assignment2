import * as api from '../api';

export const getUserData = async () =>{
    console.log('getUserData')
    try {       
        const {data} = await api.getUser()
        return data;                
    } catch (error) {
        console.log(error);
    }
}

export const postUserData = async (userData) =>{
    try {       
        const {data} = await api.postUser(userData)
        return data;                
    } catch (error) {
        console.log(error);
    }
}