import React from 'react';

function Radio({name, id, label, onChange}) {
    return (
        <>
            <input
                name={name}
                id={id}
                type="radio"
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
}

export default Radio;
