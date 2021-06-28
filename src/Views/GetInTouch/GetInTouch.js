import React from 'react';
import GetInTouchSection from '../../Components/GetInTouchSection.js/GetInTouchSection';
import { LayoutWrapper } from '../../Layout/LayoutWrapper';
import useStyles from '../styles'
function GetInTouch() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <GetInTouchSection />
            </div>
        </LayoutWrapper>
    );
}

export default GetInTouch;