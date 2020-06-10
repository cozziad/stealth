import axios from "axios";
import { GET_CONTACT_INFO, UPDATE_CONTACT_INFO, GET_ERRORS } from "./types";

import { createMessage } from "./messages";

// GET CONTACT INFO
export const getContactInfo = () => dispatch => {
    axios.get('api/contactInfo/')
        .then(res => {
            dispatch(createMessage({ contactInfoRetrieved: "Retrieved Contact Info" }));
            dispatch({
                type: GET_CONTACT_INFO,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

export const updateContactInfo = (contactInfo, id) => dispatch => {
    axios.put('api/contactInfo/1/', contactInfo)
        .then(res => {
            dispatch(createMessage({ contactInfoUpdated: "Updated Contact Info" }));
            dispatch({
                type: UPDATE_CONTACT_INFO,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
}
