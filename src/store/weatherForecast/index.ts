import { STATEWEATHERFORECAST, Types } from "./types";


//REDUCERS
const INITIAL_STATE: STATEWEATHERFORECAST = {
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATEWEATHERFORECAST => {
    switch (action.type) {
        case Types.CLEAN:
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators

export default STATE