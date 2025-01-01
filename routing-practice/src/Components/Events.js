import { Link } from "react-router-dom";

export default function Events() {
    return (
        <>
            <center>
                <h1>Events Page</h1>
                <Link to='/'>Home</Link><br />
                <Link to='/about'>About</Link><br />
                <Link to='/courses'>Courses</Link> <br />
            </center>
        </>
    );
}