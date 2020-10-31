import React from "react"
import { Route, Redirect } from "react-router-dom"

const GuardedRoute = ({ children, ...rest }) => {
    const isAuthenticated = localStorage.getItem("access_token")
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: location } }}
                    />
                )
            }
        />
    )
}

export default GuardedRoute
