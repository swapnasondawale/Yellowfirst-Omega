import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import JobOpening from '../JobOpening/JobOpening';
import useStyles from './styles'
function OpenRoleSec() {
    const classes = useStyles();
    return (
        <div className={classes.mainJobs}>
            <Grid container className={classes.jobContent}>
                <Grid item xs={12} className={classes.openRoleContainer}>
                    <Typography className={classes.openRoles}>Open roles</Typography>
                    <Typography className={classes.openText}>These companies release their own versions of the operating<br /> systems with minor changes, and yet always.</Typography>
                </Grid>
                <Grid item xs={12} className={classes.secFourDiv}>
                    <JobOpening />
                </Grid>
            </Grid>
        </div>
    );
}

export default OpenRoleSec;