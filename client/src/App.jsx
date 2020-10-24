import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
    Home,
    Users,
    About,
    Login,
    Wacana,
    Leaderboard,
    AddFormWacana,
    AddFormUser,
    DetailWacana,
} from "./pages"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/leaderboard">
                    <Leaderboard />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/wacana">
                    <Wacana />
                </Route>
                <Route path="/wacana/:id">
                    <DetailWacana />
                </Route>
                <Route path="/add-wacana">
                    <AddFormWacana />
                </Route>
                <Route path="/add-user">
                    <AddFormUser />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
