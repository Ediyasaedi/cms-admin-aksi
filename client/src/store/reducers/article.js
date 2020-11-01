import { SET_ARTICLES, SET_ARTICLE } from "../action/action-types"

const initState = {
    articles: [],
    article: {},
}

export default function articleState(state = initState, action) {
    switch (action.type) {
        case SET_ARTICLES:
            return (state = { ...state, articles: action.payload })
        case SET_ARTICLE:
            return (state = { ...state, article: action.payload })
        default:
            return state
    }
}
