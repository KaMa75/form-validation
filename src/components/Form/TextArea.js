import React from 'react';

function TextArea({name, placeholder, onChange, value}) {
    return (
        <textarea
            className="warn-border"
            name={name}
            placeholder={placeholder}
            rows="5"
            onChange={onChange}
            value={value}
        />
    );
}

export default TextArea;
