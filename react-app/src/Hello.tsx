import React from "react";
import PropTypes from 'prop-types';

// Props - means properties (component inputs)
interface HelloProps {
    username?: string;
    age?: number;
    location?: string;
    hobbies?: string[]
}

// Functional Component using TypeScript
const Hello: React.FC<HelloProps> = ({ username = "Guest", age = 18, location = "New Delhi", hobbies = [] }) => {
    return (
        <>
            {/* <h2>Hello World!</h2> */}
            {/* <h5>{username ? `Welcome ${username}!` : `Welcome Annonymous!`}</h5> */}
            <h2>Welcome, {username}!</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Hobbies: {hobbies.length > 0 ? hobbies.join(", ") : "Non Listed"}</p>
        </>
    )
}


Hello.propTypes = {
    username: PropTypes.string,
    age: PropTypes.number,
    location: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
} as any;

export default Hello;