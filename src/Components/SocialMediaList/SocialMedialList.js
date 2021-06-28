import React from 'react';
import { makeStyles } from '@material-ui/core';
import fbLogo from '../../Assets/Images/Footer/logo-fb-simple@2x.png';
import twitLogo from '../../Assets/Images/Footer/logo-twitter@2x.png';
import gogLogo from '../../Assets/Images/Footer/google@2x.png'
const useStyles = makeStyles((theme) => ({
    socialContainer: {
        width: '86px',
        height: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        color: '#fff',
    }
}))
function SocialMediaList() {
    const classes = useStyles();
    return (
        <div className={classes.socialContainer}>
            <a href='https://www.linkedin.com/company/yellowfirstuxui/' className='twitter-social'>
                <img src={twitLogo} alt='twit'/>
            </a>
            <a href='https://www.linkedin.com/company/yellowfirstuxui/' className='facebook-social'>
            <img src={fbLogo} alt='twit'/>
            </a>
            <a href='https://www.linkedin.com/company/yellowfirstuxui/' className='google-social'>
                <img src={gogLogo} alt='twit'/>
            </a>
        </div>
    );
}
export default SocialMediaList;