import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello, this is {props.name}'s component! </p>
            <p>My username is {props.username}</p>
        </div>
    )
};

export default userOutput;