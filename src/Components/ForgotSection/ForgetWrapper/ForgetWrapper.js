import React from 'react';
import { makeStyles } from '@material-ui/core';
import ForgetCard from '../ForgetCard/ForgetCard'
import Label from '../../Shared/FormControls/Label/Label';
const useStyles = makeStyles((theme) => ({
    mainSignupWrapper: {
        display: 'grid',
        gridRowGap: '120px',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridRowGap: '100px',
        }
    }
}))
function ForgetWrapper(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainSignupWrapper}>
            <div className={classes.labelWrapper}>
                <Label />
            </div>
            <div>
                <ForgetCard />
            </div>
        </div>
    );
}

export default ForgetWrapper;