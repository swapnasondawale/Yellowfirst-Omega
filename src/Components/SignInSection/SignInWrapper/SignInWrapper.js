import React from 'react';
import { makeStyles } from '@material-ui/core';
import SignInCard from '../SignInCard/SignInCard';
import Label from '../../Shared/FormControls/Label/Label';
const useStyles = makeStyles((theme) => ({
    mainSignupWrapper: {
        display: 'grid',
        gridRowGap: '80px',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridRowGap: '20px',
        }
    }
}))
function SignInWrapper(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainSignupWrapper}>
            <div className={classes.labelWrapper}>
                <Label />
            </div>
            <div>
                <SignInCard />
            </div>
        </div>
    );
}

export default SignInWrapper;