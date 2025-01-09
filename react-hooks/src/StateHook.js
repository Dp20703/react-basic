import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
export default function StateHook() {
    return (

        <>

            <h1 className='text-center'>UseState react</h1>
            {/* <UpdateData /> */}
            {/* <ToggleTheme /> */}
            <FormObject />

        </>
    )
}


function UpdateData() {
    const [data, setData] = useState('Old Data')
    return (
        <>
            <h3>Updating Data Using hooks:</h3>
            <h2>{data}</h2>
            <button className='btn btn-primary' onClick={() => setData("New Data")}>Update Data</button>
        </>
    );

}



function ToggleTheme() {
    const [theme, setTheme] = useState('');
    return (
        <>
            <h3>Togglling Theme</h3>
            <div className={theme}>
                <h2>Demo State</h2>
                <h2>Demo State</h2>
                <h2>Demo State</h2>
            </div>
            <button className="btn btn-primary m-2" onClick={() => setTheme('text-bg-dark')}>Dark</button>
            <button className="btn btn-primary m-2" onClick={() => setTheme('text-bg-white')}>Light</button>
        </>
    );

}

function FormObject() {
    const [formData, setFormdata] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((data) => (
            {
                ...data,
                [name]: value
            }
        )
        )

    }
    console.log(formData)
    return (
        <>
            <Container>
                <Card className='text-bg-danger p-2 '>
                    <Card.Header>
                        <Card.Title><h5 className='text-center'>Form to Ojbect Using useState</h5></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <form >
                            <div className="form-group mb-2 ">
                                <label htmlFor="" className="form-label">Name:</label>
                                <input type="text" name='userName' value={formData.userName} onChange={handleChange} className="form-control" placeholder='Enter name' />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Email:</label>
                                <input type="email" name='userEmail' value={formData.userEmail} className="form-control" placeholder='Enter email' onChange={handleChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Phone:</label>
                                <input type="tel" className="form-control" value={formData.userPhone} placeholder='Enter phone number' onChange={handleChange} name='userPhone' />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="message" className="form-label ">Message:</label>
                                <textarea name='message' className="form-control" value={formData.message} placeholder='Enter message' onChange={handleChange} />
                            </div>

                            <input type="submit" className='btn btn-primary form-control mt-3' />
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}