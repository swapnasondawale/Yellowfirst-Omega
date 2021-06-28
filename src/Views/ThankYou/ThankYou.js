import React from 'react';
import ThankYouSection from '../../Components/ThankYouSection/ThankYouSection';
import { LayoutWrapper } from '../../Layout/LayoutWrapper';
import useStyles from '../styles'
function NotFound() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <ThankYouSection />
            </div>
        </LayoutWrapper>
    );
}

export default NotFound;