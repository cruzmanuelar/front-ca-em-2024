import { 
    GET_DATA_TOURNAMENTS
} from "../../../Constants/Tournaments/Tournaments"

const INIT_STATE = {
    rex_data_tournaments    : [],
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_DATA_TOURNAMENTS:
            return {
                ...state,
                rex_data_tournaments: action.payload
        }
        default:
            return state
    }
}