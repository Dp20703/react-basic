import React, { useState } from 'react'
import { Card, CardTitle, Container, Table } from 'react-bootstrap';

const Task = () => {
    return (
        <>
            <RegistrationForm />
        </>
    )
}

const RegistrationForm = () => {
    const [userdata, setUserdata] = useState({
        username: '',
        useremail: '',
        userpassword: '',
        userphone: '',
        usergender: '',
        useraddress: '',
        usercountry: '',
    })
    const [tcChecked, setTcChecked] = useState(false);
    const [formData, setFormData] = useState(null);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setUserdata(
            (data) => ({
                ...data,
                [name]: value
            })
        );
    }
    console.log(userdata);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tcChecked) {
            alert('Please agree to terms and conditions');
        } else {
            alert('Form submitted successfully');
            setUserdata({
                username: '',
                useremail: '',
                userpassword: '',
                userphone: '',
                usergender: '',
                useraddress: '',
                usercountry: '',
            })
            // setTcChecked(false);
            setFormData(userdata);
            console.log(formData);
        }

    }
    return (
        <Container className='' style={{ height: "auto", width: "70%" }} >
            <Card className='mt-2 text-bg-info m-auto' style={{ height: "100%", width: "100%" }} >
                <Card.Header>
                    <CardTitle className='text-center'>Registration Form</CardTitle>
                </Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit} >
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name</label>
                            <input required onChange={handlechange} value={userdata.username} type='text' name='username' className='form-control' placeholder='Enter your name' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input required onChange={handlechange} value={userdata.useremail} type='email' name='useremail' className='form-control' placeholder='Enter your email' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Password</label>
                            <input required onChange={handlechange} value={userdata.userpassword} type='password' name='userpassword' className='form-control' placeholder='Enter your password' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Phone</label>
                            <input required onChange={handlechange} value={userdata.userphone} type='number' name='userphone' className='form-control' placeholder='Enter your phone no' />
                        </div>
                        <div className='form-group mb-2 ' required>
                            <label className='form-check-label form-check-inline  mb-2 '>Gender</label><br />
                            <input onChange={handlechange} type='radio' value="male" name='usergender' className=' form-check-input form-check-inline  ' />Male&nbsp;&nbsp;
                            <input onChange={handlechange} type="radio" value='female' name='usergender' className='form-check-inline form-check-input ' />Female
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Address</label>
                            <textarea onChange={handlechange} value={userdata.useraddress} name='useraddress' className='form-control' placeholder='Enter your address' />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="" className='mb-2 form-label'>Country</label>
                            <select onChange={handlechange} value={userdata.usercountry} name='usercountry' className='form-control'>
                                <option value=''>Select your Country</option>
                                <option value='India'>India</option>
                                <option value='Uk'>Uk</option>
                                <option value='Russia'>Russia</option>
                            </select>
                        </div>
                        <div className='form-group mb-2'>
                            <input onClick={() => {
                                setTcChecked(true);
                            }} value={tcChecked} onChange={handlechange} name='tccheck' checked={tcChecked} type='checkbox' className='form-check-input' />&nbsp;&nbsp;
                            <label className='form-label mb-2'>Agree to terms and conditions</label>
                        </div>
                        <div className='mb-2'>
                            <input required type='submit' className='btn btn-danger form-control' />
                        </div>
                    </form>
                </Card.Body>
            </Card>
            <Table variant='dark' className='mb-2 mt-3' style={{ width: "100%" }} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody >

                    {tcChecked && formData ? (
                        <tr>
                            <td className='text-bg-success'>{formData.username}</td>
                            <td className='text-bg-success'>{formData.useremail}</td>
                            <td className='text-bg-success'>{formData.userpassword}</td>
                            <td className='text-bg-success'>{formData.userphone}</td>
                            <td className='text-bg-success'>{formData.usergender}</td>
                            <td className='text-bg-success'>{formData.useraddress}</td>
                            <td className='text-bg-success'>{formData.usercountry}</td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-bg-danger text-center">
                                Please accept the terms and conditions
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container >
    );


}


export default Task