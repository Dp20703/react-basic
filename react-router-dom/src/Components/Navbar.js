import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <center>
                <h1>Navbar</h1>
                <Link to={'/'}>Home</Link><br/>
                <Link to={'/about'}>About</Link><br/>
                <Link to={'/contact'}>Contact</Link><br/>
            </center>
        </>
    );

}