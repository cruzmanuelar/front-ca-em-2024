import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import Selections from "./Selections/Selections"
import Top from "./Top/Top"
import Matches from "./Matches/Matches"
import Tournaments from "./Tournaments/Tournaments"


const createRootReducer = (history) => combineReducers({
    router      : connectRouter(history),
    selections  : Selections,
    top         : Top,
    matches     : Matches,
    tournaments : Tournaments
})

export default createRootReducer