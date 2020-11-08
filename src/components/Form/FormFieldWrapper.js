import React from 'react';

function Input({children, className, hideWarning}) {
    return (
        <>
            <div className={className}>
                {children}
            </div>
            {!hideWarning && (<p className="warning">
                Pole wymagane
            </p>)}
        </>
    );
}

export default Input;
