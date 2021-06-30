import React from 'react';
import './BackgroundImage.css'
function BackgroundImage({ children, ...props }) {
    return (
        <div
            className='bgImage'
            style={{
                // width: '100vw',
                // height: '100vh',
                backgroundImage: `url(${props.background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#19191B',
                position: 'relative',
            }}
        >
            {children}
        </div>
    );
}

export default BackgroundImage;