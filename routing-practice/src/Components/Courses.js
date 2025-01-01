import { Link } from "react-router-dom";

export default function Courses() {
    return (
        <>
            <center>
                <h1>Courses Page</h1>
                <Link to='/'>Home</Link><br />
                <Link to='/about'>About</Link><br />
                <Link to='/events'>Events</Link> <br />
            </center>
        </>
    );
}