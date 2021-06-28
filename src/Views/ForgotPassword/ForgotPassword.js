import React from 'react';
import BgForgot from '../../Assets/Images/Forgot/BgForgot.png'
import BackgroundImage from '../../Components/Shared/BackgroundImage/BackgroundImage';
import ForgetWrapper from '../../Components/ForgotSection/ForgetWrapper/ForgetWrapper';
function ForgotPassword(props) {
    return (
        <BackgroundImage
            background={BgForgot}
        >
            <ForgetWrapper />
        </BackgroundImage>
    );
}

export default ForgotPassword;