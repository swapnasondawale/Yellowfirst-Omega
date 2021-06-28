import React from 'react';
import ErrorSection from '../../Components/ErrorSection/ErrorSection';
import { LayoutWrapper } from '../../Layout/LayoutWrapper';
import useStyles from '../styles'
function NotFound() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <ErrorSection />
            </div>
        </LayoutWrapper>
    );
}

export default NotFound;