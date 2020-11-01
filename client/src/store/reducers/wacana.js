import { SET_WACANAS, SET_WACANA } from "../action/action-types"

const initState = {
    wacanas: [],
    wacana: {},
}

export default function wacanaState(state = initState, action) {
    switch (action.type) {
        case SET_WACANAS:
            return (state = { ...state, wacanas: action.payload })
        case SET_WACANA:
            return (state = { ...state, wacana: action.payload })
        default:
            return state
    }
}
