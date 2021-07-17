import './App.css';
import Home from "./Home";
// import Products from './Products';
// import Privacy from './Privacy';
import NavBar from './NavBar';

import {Route, Link, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Route exact path={"/"} component={Home} />
        </BrowserRouter>
    );
}

export default App;
