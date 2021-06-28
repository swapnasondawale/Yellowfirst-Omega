import React from 'react';
import TermsWrapper from '../../Components/TermsConditionSection/TermsWrapper.js/TermsWrapper';
import { LayoutWrapper } from '../../Layout/LayoutWrapper';
import useStyles from '../styles'
function TermsAndCondition(props) {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <TermsWrapper/>
            </div>
        </LayoutWrapper>
    );
}

export default TermsAndCondition;