import { SET_SISWA, SET_PENULIS, SET_USER } from "../action/action-types"

const initState = {
    siswas: [],
    penulis: [],
    user: {},
}

export default function usersState(state = initState, action) {
    switch (action.type) {
        case SET_SISWA:
            return (state = { ...state, siswas: action.payload })
        case SET_PENULIS:
            return (state = { ...state, penulis: action.payload })
        case SET_USER:
            return (state = { ...state, user: action.payload })
        default:
            return state
    }
}
