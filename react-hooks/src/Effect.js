import React, { useEffect, useState } from 'react'

const Effect = () => {
    return (
        <>
            <UpdateCount />
        </>
    )
}

const UpdateCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const counter = setInterval(
            () => {
                setCount((previous) => previous + 1)
            }, 2000);
        return () => clearInterval(counter);
    }, []);




    return (
        <>
            <h2>Updating count in every 2 sec</h2>
            <h5>Count:{count}</h5>
            <h5><button className='btn btn-danger m-2' onClick={
                () => {
                    setCount(0)
                }}>Stop Count</button></h5>
        </>
    );
}

export default Effect