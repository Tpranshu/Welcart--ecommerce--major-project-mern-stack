import { CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants";

export default function MaincategoryReducer(state = [], action) {  //yaha state = [] hi dena hai paramter me as a defult value
    let index
    switch (action.type) {
        case CREATE_MAINCATEGORY_RED: {
            return [...state, action.payload]
        }
        case GET_MAINCATEGORY_RED: {
            return action.payload
        }
        case UPDATE_MAINCATEGORY_RED: {
            index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state
        }
        case DELETE_MAINCATEGORY_RED: {
            return state.filter(x => x.id !== action.payload.id)
        }
        default: {
            return state
        }

    }
    /*
    notes --
    find() → ek element return karta hai (jo condition ko first satisfy kare). Nahi mila to undefined.
    filter() → ek array return karta hai (condition satisfy karne wale saare elements). Nahi mile to [].
    */

}