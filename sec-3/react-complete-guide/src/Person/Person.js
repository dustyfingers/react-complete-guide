import React from 'react';

const person = () => {
    return (
        <p>`I'm a person component and I am {Math.floor(Math.random() * 30)} years old!`</p>
    );
};

export default person;