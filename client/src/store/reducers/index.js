import { combineReducers } from "redux"

import auth from "./auth"
import users from "./users"
import wacana from "./wacana"
import article from "./article"
import question from "./question"

export default combineReducers({ auth, users, wacana, article, question })
