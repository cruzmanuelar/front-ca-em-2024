import { 
    GET_DATA_POSITIONS_USERS
} from "../../../Constants/Users/Users"

const INIT_STATE = {
    rex_data_positions_users    : []
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_DATA_POSITIONS_USERS:
            return {
                ...state,
                rex_data_positions_users : action.payload
        }
        default:
            return state
    }
}