import axios from 'axios'

const url = process.env.REACT_APP_SERVER_DEV

export const getAllPhones = () => {
    try{ 
        return axios.get(`${url}api/phones`)
    }
    catch(error) {
        return error
    }
}

export const updatePhone = (id, phone) => {
    console.log(phone)
    try {
        return axios.put(`${url}api/phones/${id}`, phone)
    } catch (error) {
        return error
    }
}

export const addPhone = (phone) => {
    try {
        return axios.post(`${url}api/phones/`, phone)
    } catch (error) {
        return error
    }
}

export const deletePhone = (id) => { 
    try {
        return axios.delete(`${url}api/phones/${id}`)
    } catch (error) {
        return error
    }
}