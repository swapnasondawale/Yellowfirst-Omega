import React from 'react';
// import useStyles from '../../SignInSection/SignInWrapper/styles'
import Label from '../../Shared/FormControls/Label/Label';
import SignUpCard from '../SignUpCard/SignUpCard'
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainSignupWrapper: {
        display: 'grid',
        gridRowGap: '120px',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridRowGap: '80px',
        }
    }
}))
function SignUpWrapper(props) {
    const classes = useStyles();

    return (
        <div className={classes.mainSignupWrapper}>
            <div className={classes.labelWrapper}>
                <Label />
            </div>
            <div>
                <SignUpCard />
            </div>
        </div>
    );
}

export default withRouter(SignUpWrapper);