import React from 'react';

function TextArea({name, placeholder, onChange, value, isValid}) {
    return (
        <textarea
            className={(value || isValid) ? "" : "warn-border"}
            name={name}
            placeholder={placeholder}
            rows="5"
            onChange={onChange}
            value={value}
        />
    );
}

export default TextArea;
