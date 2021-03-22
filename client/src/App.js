import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './app/Header'
import { VerticalMenu } from './app/menu/Menu'
import { MainBodyForm } from './app/bodyFeatures/MainBodyForm'

import './app.css'

const App = () => {
    return (
        <div className="main">
            <Router>
                <VerticalMenu />
                <div className="headerAndBody">
                    <Header />
                    <Switch>
                        <Route path="/">
                            <MainBodyForm />
                        </Route>
                    </Switch>

                </div>
            </Router>

        </div>

    )
}

export default App