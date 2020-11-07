import React from 'react';

function Input({children, className}) {
    return (
        <>
            <div className={className}>
                {children}
            </div>
            <p className="warning">
                Pole wymagane
            </p>
        </>
    );
}

export default Input;
