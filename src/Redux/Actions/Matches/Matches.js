import config from "./../../../config"
import { 
    GET_DATA_LAST_MATCHES,
    GET_DATA_MATCHES,
    SHOW_DATE_MATCHES_EM
} from "./../../../Constants/Matches/Matches"
import { notifyAlert, notifySuccess } from '../../../Functions/notifications';
import { GetDataNextMatchesReducer } from "../Home/Home";

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

export const EditCloseMatchReducer = (goal, match, value) => async (dispatch, getState) =>{
    const { rex_data_next_matches } = getState().home;
    console.log(match)
    rex_data_next_matches.map(dat => {
        if(match.partid == dat.partid){
            dat[goal] = parseInt(value)
        }
    })
}

export const CloseMatchReducer = (partid) => async (dispatch, getState) =>{

    const { rex_data_next_matches } = getState().home;
    const matchUpdate = rex_data_next_matches.find(par => par.partid == partid)

    if ((!("req_pargoalaway" in matchUpdate) || (isNaN(matchUpdate.req_pargoalaway))) 
        || (!("req_pargoalhome" in matchUpdate) || (isNaN(matchUpdate.req_pargoalhome)) )) {
            notifyAlert("Los goles no son validos")
        return false
    }

    await fetch(config.apiUrl + "quinela/close-match",
        {
            mode: "cors",
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-type":"application/json",
            },
            body : JSON.stringify({
                req_partid      : partid,
                req_selhome     : matchUpdate.parlocalsel.selid,
                req_selaway     : matchUpdate.parvisitasel.selid,
                req_pargoalhome : matchUpdate.req_pargoalhome,
                req_pargoalaway : matchUpdate.req_pargoalaway
            })
        },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            notifySuccess(data.message)
        }else{
            notifyAlert(data.message)
        }
        dispatch(GetDataNextMatchesReducer())
    })
    .catch((error) => {
        console.log(error)
    })
}

export const DisableMatchReducer = (partid) => async (dispatch, getState) =>{
    await fetch(config.apiUrl + "matches/disable-match",
        {
            mode: "cors",
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-type":"application/json",
            },
            body : JSON.stringify({
                req_partid : partid
            })
        },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            notifySuccess(data.message)
        }else{
            notifyAlert(data.message)
        }
        dispatch(GetDataNextMatchesReducer())
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