import config from "./../../../config"
import { 
    DATA_FORM_QUINELA,
    GET_DATA_NEXT_MATCHES,
    SHOW_MODAL_FORM_QUINELA
} from "./../../../Constants/Home/Home"

export const ShowModalFormQuinelaReducer = ( state ) => async (dispatch, getState) => {

    const { rex_data_next_matches } = getState().home;

    dispatch({
        type    : SHOW_MODAL_FORM_QUINELA,
        payload : state
    })

    const dataQuinela = [].concat(rex_data_next_matches)
    
    dispatch({
        type    : DATA_FORM_QUINELA,
        payload : dataQuinela
    })
}

export const EditDataFormQuinelaReducer = ( goals, id, name ) => async (dispatch, getState) => {

    const { rex_data_form_quinela } = getState().home;

    rex_data_form_quinela.map(mat => {
        if(mat.partid == id){
            mat[name] = goals
            mat['edit'] = true
        }
    })

    console.log(rex_data_form_quinela)

    dispatch({
        type    : DATA_FORM_QUINELA,
        payload : rex_data_form_quinela
    })
}


export const GetDataNextMatchesReducer = (changeTor = false) => async (dispatch, getState) => {

    const currentTornid = localStorage.getItem('tornid')

    const tornid = changeTor 
                    ? currentTornid == 1
                        ? 2
                        : 1
                    : currentTornid
    
    await fetch(config.apiUrl + "matches/next-matches",
        {
            mode: "cors",
            method : "POST",
            headers : {
                "Accept": "application/json",
                "Content-type":"application/json",
                "usutoken" : localStorage.getItem('usutoken'),

            },
            body : JSON.stringify({
                tornid : tornid
            })
        },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            dispatch({
                type : GET_DATA_NEXT_MATCHES,
                payload : data.data
            })
            dispatch({
                type : DATA_FORM_QUINELA,
                payload : data.data
            })
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

export const SendFormQuinelaReducer = ( ) => async (dispatch, getState) => {

    const { rex_data_form_quinela } = getState().home;

    const dataEdited = rex_data_form_quinela.filter(dat => dat.edit == true)

    await fetch(config.apiUrl + "quinela/edit-quinela",
    {
        mode: "cors",
        method : "POST",
        headers : {
            "Accept": "application/json",
            "Content-type":"application/json",
            "usutoken" : localStorage.getItem('usutoken'),

        },
        body : JSON.stringify({
            formQuinela : dataEdited
        })
    },
    )
    .then( res => res.json())
    .then(async data => {
        if(data.response){
            console.log("editado")
            dispatch(GetDataNextMatchesReducer())
        }
    })
    .catch((error) => {
        console.log(error)
    })
}