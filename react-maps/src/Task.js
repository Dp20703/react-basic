import { retry } from "@reduxjs/toolkit/query";
import { Table } from "react-bootstrap";

function Task() {
    return (
        <>
            <Que1 />
            <Que2 />
            <Que3 />
        </>
    )
}
const newdata = {
    "states": ["Gujarat", "Rajasthan", "maharashtra"],
    "capital": ["Gandhinagar", "Jaipur", "mumbai"],
    "population": ["5 CR", "12 CR", "4 CR"]
};
function Que1() {
    return (
        <>
            {
                // <b>State: {`${newdata['states']} `}</b>
                newdata.states.map((name) => {
                    return <><br /><b>{name}</b></>
                })
            }
        </>
    );
}
function Que2() {
    return (
        <>
            <Table >
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>States</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newdata.states.map((elem, index) => {
                            return <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{elem}</td>
                                    <td>{newdata.capital[index]}</td>
                                    <td>{newdata.population[index]}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}
const practicedata = [
    { "name": "INFOLABZ", "city": "AHMEDABAD", "mobile": 8866662662, "email": "a@b.com" },
    { "name": "xyz", "city": "SURAT", "mobile": 8888888888, "email": "x@y.com" },
]

function Que3() {
    return (
        <>
            <Table bordered hover striped variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        practicedata.map((elem) => {
                            return <>
                                <tr>
                                    <td>{elem.name}</td>
                                    <td>{elem.city}</td>
                                    <td>{elem.mobile}</td>
                                    <td>{elem.email}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}


export default Task