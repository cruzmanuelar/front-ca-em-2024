import { 
    GET_DATA_SELECTIONS
} from "../../../Constants/Selections/Selections"

const INIT_STATE = {
    rex_data_selections    : [],
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_DATA_SELECTIONS:
            return {
                ...state,
                rex_data_selections: action.payload
        }
        default:
            return state
    }
}