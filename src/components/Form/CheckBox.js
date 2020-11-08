import React from 'react';

function CheckBox({name, id, onChange, label, value}) {
    return (
        <>
            <input
                name={name}
                id={id}
                type="checkbox"
                onChange={onChange}
                checked={value}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
}

export default CheckBox;
