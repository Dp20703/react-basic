import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <center>
                <h1>About Page</h1>
                <Link to='/'>Home</Link><br />
                <Link to='/events'>Events</Link> <br />
                <Link to='/courses'>Courses</Link> <br />
            </center>
        </>
    );
}