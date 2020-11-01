import { SET_QUESTION, SET_QUESTIONS } from "../action/action-types"

const initState = {
    questions: [],
    question: {},
}

export default function questionState(state = initState, action) {
    switch (action.type) {
        case SET_QUESTIONS:
            return (state = { ...state, questions: action.payload })
        case SET_QUESTION:
            return (state = { ...state, question: action.payload })
        default:
            return state
    }
}
