import React from 'react'

export default function Practice1(props) {
    console.log(props);


    return (
        <>
            <div>
                {/* <p>{props.name}</p>
                <p>{props.email}</p>
                <p>{props.number}</p> */}
            </div>
            <button onClick={props.bg} className='border-2 border-black p-2 mt-3 mx-3'>Click Here</button>
        </>

    )
}
