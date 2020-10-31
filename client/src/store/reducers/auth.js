import { IS_AUTHENTICATION } from "../action/action-types"

export default function isAuth(state = false, action) {
    switch (action.type) {
        case IS_AUTHENTICATION:
            return (state = action.payload)
        default:
            return state
    }
}
