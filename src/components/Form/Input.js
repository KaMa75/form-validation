import React from 'react';

function Input({name, type, placeholder, onChange, value, isValid}) {
    return (
        <input
            className={(value || isValid) ? "" : "warn-border"}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}

export default Input;
