import { CREATE_WHISLIST_RED, DELETE_WHISLIST_RED, GET_WHISLIST_RED, UPDATE_WHISLIST_RED } from "../Constants";

export default function WhislistReducer(state = [], action) {  
    let index
    switch (action.type) {
        case CREATE_WHISLIST_RED: {
            return [...state, action.payload]
        }
        case GET_WHISLIST_RED: {
            return action.payload
        }
        case UPDATE_WHISLIST_RED: {
            index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state
        }
        case DELETE_WHISLIST_RED: {
            return state.filter(x => x.id !== action.payload.id)
        }
        default: {
            return state
        }

    }
    

}