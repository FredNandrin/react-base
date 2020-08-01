import {Route, Switch} from "react-router-dom";
import {ReactComponent as ReactLogo} from "../logo.svg";
import React from "react";
import Form from './form1';

function Router() {
    return (

        <Switch>
            {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
            <Route path="/about">
                <p>About</p>
            </Route>

            {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
            <Route path="/contact/:id">
                <Form/>
            </Route>
            <Route path="/contact">
                <p>AllContact</p>
            </Route>

            {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
            <Route path="/">
                <header className="App-header">
                    <ReactLogo/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </Route>
        </Switch>
    )
}
export default Router;