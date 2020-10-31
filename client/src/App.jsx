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
    AddArtikelForm,
    AddSoalForm,
} from "./pages"
import { useSelector } from "react-redux"
import GuardedRoute from "./routes/GuardedRoute"

function App() {
    const isAutheticated = useSelector((state) => state.auth)
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <GuardedRoute path="/about" component={About} isAutheticated />
                <GuardedRoute
                    path="/leaderboard"
                    component={Leaderboard}
                    isAutheticated
                />
                <GuardedRoute path="/users" component={Users} isAutheticated />
                <GuardedRoute
                    exact
                    path="/wacana"
                    component={Wacana}
                    auth
                    isAutheticated
                />
                <Route exact path="/wacana/:id/add-artikel">
                    <AddArtikelForm />
                </Route>
                <Route exact path="/wacana/:id/add-soal">
                    <AddSoalForm />
                </Route>
                <Route exact path="/wacana/:id">
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
