import config from "./../../../config"
import { 
    GET_DATA_TOURNAMENTS
} from "./../../../Constants/Tournaments/Tournaments"


export const GetDataTournamentsReducer = () => async (dispatch, getState) =>{

    await fetch(config.apiUrl + "tournaments/all",
        {
            mode: "cors",
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-type":"application/json",
            },
        },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            dispatch({
                type : GET_DATA_TOURNAMENTS,
                payload : data.data
            })

        }
    })
    .catch((error) => {
        console.log(error)
    })
}