import React from 'react';
import useStyles from '../styles'
import BackgroundImage from '../../Components/Shared/BackgroundImage/BackgroundImage';
import bgImage from '../../Assets/Images/SignUp/BgOriginal.png'
import SignUpWrapper from '../../Components/SignUpSection/SignUpWrapper/SignUpWrapper';
function SignUp(props) {
    const classes = useStyles();
    return (
        <BackgroundImage
            background={bgImage}
        >
            <div className={classes.mainDiv}>
                <SignUpWrapper />
            </div>
        </BackgroundImage>
    );
}

export default SignUp;