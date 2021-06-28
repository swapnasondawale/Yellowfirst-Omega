import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles(() => ({
    labelWrapper: {
        width: '100%',
        height: 'auto',        
    },
    label: {
        margin: 'auto',
        height: '30px',
        width: '79px',
        padding: '10px 0px',
        color: '#FFFFFF',
        fontFamily: 'circular-std-black',
        fontSize: '24px',
        fontWeight: '900',
        letterSpacing: '-0.75px',
        lineHeight: '30px',
    }
}))
function Label(props) {
    const classes = useStyles()
    return (
        <div className={classes.labelWrapper}>
            <Typography className={classes.label}>Omega</Typography>
        </div>
    );
}

export default Label;