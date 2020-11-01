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
    EditFormUser,
    EditFormWacana,
    EditArtikelForm,
} from "./pages"
import GuardedRoute from "./routes/GuardedRoute"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <GuardedRoute path="/about">
                    <About />
                </GuardedRoute>
                <GuardedRoute path="/leaderboard">
                    <Leaderboard />
                </GuardedRoute>
                <GuardedRoute path="/users">
                    <Users />
                </GuardedRoute>
                <GuardedRoute exact path="/wacana">
                    <Wacana />
                </GuardedRoute>
                <GuardedRoute exact path="/wacana/:id/add-artikel">
                    <AddArtikelForm />
                </GuardedRoute>
                <GuardedRoute exact path="/wacana/:id/add-soal">
                    <AddSoalForm />
                </GuardedRoute>
                <GuardedRoute exact path="/wacana/:id">
                    <DetailWacana />
                </GuardedRoute>
                <GuardedRoute path="/add-wacana">
                    <AddFormWacana />
                </GuardedRoute>
                <GuardedRoute path="/add-user">
                    <AddFormUser />
                </GuardedRoute>
                <GuardedRoute path="/edit-user/:id">
                    <EditFormUser />
                </GuardedRoute>
                <GuardedRoute path="/edit-wacana/:id">
                    <EditFormWacana />
                </GuardedRoute>
                <GuardedRoute path="/edit-article/:idwacana/:idarticle">
                    <EditArtikelForm />
                </GuardedRoute>
                <GuardedRoute path="/">
                    <Home />
                </GuardedRoute>
            </Switch>
        </Router>
    )
}

export default App
