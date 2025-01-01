import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <>
            <center>
                {/* <Navbar/> */}
                <h1>Home page</h1>
                <Link to={'/'}>Home</Link><br />
                <Link to={'/about'}>About</Link><br />
                <Link to={'/contact'}>Contact</Link><br /></center>
        </>
    );

}