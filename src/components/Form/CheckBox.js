import React from 'react';

function CheckBox({name, id, onChange}) {
    return (
        <>
            <input
                name={name}
                id={id}
                type="checkbox"
                onChange={onChange}
            />
            <label htmlFor={id}>label</label>
        </>
    );
}

export default CheckBox;
