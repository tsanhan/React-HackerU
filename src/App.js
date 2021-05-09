
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Signup from "./components/signup";
import Signin from "./components/signin";

import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />
            <header>
                <Navbar />
            </header>
            <main style={{ minHeight: 900 }}>
                <Switch>
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/about" component={About} />
                    <Route path="/" exact component={Home} />
                    {/*
                     exact is important (like pathMatch: 'full' in angular).
                     this will match the full route (otherwise all routes has '/')
                     to demostrate try using:
                     <Route path="/" component={Home} />
                     <Route path="/about" component={About} />

                     now all paths has"/" so all paths will navigate to Home
                     */}
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
}

export default App;