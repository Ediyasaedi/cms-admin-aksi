import axios from "axios"
import {
    IS_AUTHENTICATION,
    SET_PENULIS,
    SET_SISWA,
    SET_USER,
    SET_WACANAS,
    SET_WACANA,
    SET_ARTICLES,
    SET_ARTICLE,
    SET_QUESTION,
    SET_QUESTIONS,
} from "./action-types"

const baseUrl = "http://localhost:3000"

export const setAuth = (payload) => {
    return {
        type: IS_AUTHENTICATION,
        payload,
    }
}

export const setSiswa = (payload) => {
    return {
        type: SET_SISWA,
        payload,
    }
}

export const setPenulis = (payload) => {
    return {
        type: SET_PENULIS,
        payload,
    }
}

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    }
}

export const setWacanas = (payload) => {
    return {
        type: SET_WACANAS,
        payload,
    }
}

export const setWacana = (payload) => {
    return {
        type: SET_WACANA,
        payload,
    }
}

export const setArticles = (payload) => {
    return {
        type: SET_ARTICLES,
        payload,
    }
}

export const setArticle = (payload) => {
    return {
        type: SET_ARTICLE,
        payload,
    }
}

export const setQuestions = (payload) => {
    return {
        type: SET_QUESTIONS,
        payload,
    }
}

export const setQuestion = (payload) => {
    return {
        type: SET_QUESTION,
        payload,
    }
}

export const postLogin = (payload) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/login`, payload)
            .then(({ data }) => {
                localStorage.setItem("access_token", data.token)
                dispatch(setAuth(true))
            })
            .catch(console.log)
    }
}

export const getUsers = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/user/role/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                if (payload === "siswa") {
                    dispatch(setSiswa(data.users))
                } else {
                    dispatch(setPenulis(data.users))
                }
            })
            .catch(console.log)
    }
}

export const getOneUser = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/user/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setUser(data.user))
            })
            .catch(console.log)
    }
}

export const createdUser = (payload) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/admin/user`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const updatedUser = (payload) => {
    return (dispatch) => {
        axios
            .put(`${baseUrl}/admin/user/${payload.id}`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const deleteUser = (payload) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/admin/user/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(getUsers)
            })
            .catch(console.log)
    }
}

export const getWacanas = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/wacana`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setWacanas(data.wacanas))
            })
            .catch(console.log)
    }
}

export const getOneWacana = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/wacana/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setWacana(data.wacana[0]))
            })
            .catch(console.log)
    }
}

export const createdWacana = (payload) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/admin/wacana`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const updatedWacana = (payload) => {
    return (dispatch) => {
        axios
            .put(`${baseUrl}/admin/wacana/${payload.id}`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const deleteWacana = (payload) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/admin/wacana/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(getWacanas)
            })
            .catch(console.log)
    }
}

export const getArticles = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/article/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setArticles(data.article))
            })
            .catch(console.log)
    }
}

export const getOneArticle = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/article/detail/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setArticle(data.article))
            })
            .catch(console.log)
    }
}

export const createdArticle = (payload) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/admin/article`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const updatedArticle = (payload) => {
    return (dispatch) => {
        axios
            .put(`${baseUrl}/admin/article/${payload.idart}`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const deleteArticle = (payload) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/admin/article/${payload.articleid}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(getArticles(payload.wacanaid))
            })
            .catch(console.log)
    }
}

export const getQuestions = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/question/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setQuestions(data.question))
            })
            .catch(console.log)
    }
}

export const getOneSoal = (payload) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/admin/question/detail/${payload}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(setQuestion(data.question))
            })
            .catch(console.log)
    }
}

export const createdQuestion = (payload) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/admin/question`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const updatedQuestion = (payload) => {
    return (dispatch) => {
        axios
            .put(`${baseUrl}/admin/question/${payload.idquestion}`, payload, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(console.log)
    }
}

export const deleteQuestion = (payload) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/admin/question/${payload.questionid}`, {
                headers: { access_token: localStorage.getItem("access_token") },
            })
            .then(({ data }) => {
                dispatch(getQuestions(payload.wacanaid))
            })
            .catch(console.log)
    }
}
