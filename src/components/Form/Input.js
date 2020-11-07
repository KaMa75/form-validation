import React from 'react';

function Input({name, type, placeholder, onChange, value}) {
    return (
        <input
            className="warn-border"
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}

export default Input;
