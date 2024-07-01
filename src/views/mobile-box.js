import React from 'react';

function MobileBox({ children }) {
    return (
        <div className="mobile-box">
            <div className="mobile-background"></div>
            <div className="mobile-content">
                {children}
            </div>
        </div>
    )
}

export default MobileBox;