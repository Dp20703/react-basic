import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <center>
                <h1>Home Page</h1>
                <Link to='/about'>About</Link><br />
                <Link to='/events'>Events</Link> <br />
                <Link to='/courses'>Courses</Link> <br />
                <Link to='/login'>Login</Link>  <br />
            </center>
        </>
    );
}