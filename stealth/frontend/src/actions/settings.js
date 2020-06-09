import axios from "axios";
import { GET_CONTACT_INFO, UPDATE_CONTACT_INFO } from "./types";

// GET CONTACT INFO
export const getContactInfo = () => dispatch => {
    axios.get('api/contactInfo/')
        .then(res => {
            dispatch({
                type: GET_CONTACT_INFO,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

export const updateContactInfo = (contactInfo, id) => dispatch => {
    axios.put('api/contactInfo/1/', contactInfo)
        .then(res => {
            dispatch({
                type: UPDATE_CONTACT_INFO,
                payload: res.data
            });
        }).catch(err => console.log(err));
}
