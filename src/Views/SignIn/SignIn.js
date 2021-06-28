import React from 'react';
import useStyles from '../styles'
import BgImage from '../../Assets/Images/SignIn/BgImage.png';
import BackgroundImage from '../../Components/Shared/BackgroundImage/BackgroundImage'
import SignInWrapper from '../../Components/SignInSection/SignInWrapper/SignInWrapper';
function SignIn() {
    const classes = useStyles();
    return (
        <BackgroundImage
            minHeight='100vh'
            background={BgImage}
        >
            <div className={classes.mainDiv}>
                <SignInWrapper />
            </div>
        </BackgroundImage>
    );
}

export default SignIn;