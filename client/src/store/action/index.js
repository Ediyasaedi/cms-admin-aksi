import axios from "axios"
import {
    IS_AUTHENTICATION,
    SET_PENULIS,
    SET_SISWA,
    SET_USER,
} from "./action-types"

const baseUrl = "http://localhost:3000"

export const setAuth = (payload) => {
    return {
        type: IS_AUTHENTICATION,
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
                console.log(data)
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
