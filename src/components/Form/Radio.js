import React from 'react';

function Radio({name, id, label, onChange, value, selected}) {
    return (
        <>
            <input
                name={name}
                id={id}
                type="radio"
                value={value}
                checked={selected === value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}{selected === value}</label>
        </>
    );
}

export default Radio;
