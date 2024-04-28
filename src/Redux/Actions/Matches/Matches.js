import config from "./../../../config"
import { 
    GET_DATA_LAST_MATCHES,
    GET_DATA_MATCHES,
    SHOW_DATE_MATCHES_EM
} from "./../../../Constants/Matches/Matches"

export const GetDataLastMatchesReducer = (selid) => async (dispatch, getState) =>{

    await fetch(config.apiUrl + "matches/last-matches",
        {
            mode: "cors",
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-type":"application/json",
            },
            body : JSON.stringify({
                selid : selid
            })
        },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            dispatch({
                type : GET_DATA_LAST_MATCHES,
                payload : data.data
            })

        }
    })
    .catch((error) => {
        console.log(error)
    })
}

export const GetDataMatchesReducer = () => async (dispatch, getState) =>{

    await fetch(config.apiUrl + "matches/all",
        {
            mode: "cors",
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-type":"application/json",
            },
            body : JSON.stringify({
                tornid : localStorage.getItem('tornid')
            })
        },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            dispatch({
                type : GET_DATA_MATCHES,
                payload : data.data
            })

        }
    })
    .catch((error) => {
        console.log(error)
    })
}

export const ShowDateMatchReducer = (date) => async (dispatch, getState) =>{
    dispatch({
        type    : SHOW_DATE_MATCHES_EM,
        payload : date
    })
}