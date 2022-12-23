import { CREATE_PETS, FETCH_PETS } from "../Constants"

const initialState = {
    items:[],
    item:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case CREATE_PETS:
        return{
            ...state,
            item: action.payload
        }
        case FETCH_PETS: return{
            ...state,
            items: action.payload
        }
        default: return state;
    }
}