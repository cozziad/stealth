import { GET_CONTACT_INFO, UPDATE_CONTACT_INFO } from "../actions/types.js"

const initialState = {
    contactInfo: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACT_INFO:
            return {
                ...state,
                contactInfo: action.payload
            }
        case UPDATE_CONTACT_INFO:
            return {
                ...state,
                contactInfo: [...state.contactInfo, action.payload]
            }
        default:
            return state;
    }
}
