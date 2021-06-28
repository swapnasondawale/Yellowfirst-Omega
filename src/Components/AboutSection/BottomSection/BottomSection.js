import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Styles';
function BottomSection(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainBottomSec}>
            <Grid container className={classes.innerContainer}>
                <Grid item xs={12} className={classes.gridInner}>
                    <Typography className={classes.titleText}>{props.title}</Typography>
                    <Typography className={classes.contentText}>{props.content}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default BottomSection;