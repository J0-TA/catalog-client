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