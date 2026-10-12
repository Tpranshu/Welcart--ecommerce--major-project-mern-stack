import { CREATE_WHISLIST, DELETE_WHISLIST, GET_WHISLIST, UPDATE_WHISLIST } from "../Constants"



export function createWhislist(data){
        return{
            type: CREATE_WHISLIST,
            payload: data,
        }
}

export function getWhislist(){
        return{
            type: GET_WHISLIST,
        }
}

export function updateWhislist(data){
        return{
            type: UPDATE_WHISLIST,
            payload: data,
        }
}

export function deleteWhislist(data){
        return{
            type: DELETE_WHISLIST,
            payload: data,
        }
}