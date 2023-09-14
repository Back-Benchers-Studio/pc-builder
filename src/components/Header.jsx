import { Link } from "react-router-dom";

function Header (){
    return(
        <header>
            <h1>React</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </header>
    )
}

export default Header;