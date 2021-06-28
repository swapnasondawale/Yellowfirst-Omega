import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import {CustomButton} from '../../Shared/CustomButton/index';
import BottomSection from '../BottomSection/BottomSection';
import { withRouter } from 'react-router';
import useStyles from './styles'
function JobRequirement(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainJobReq}>
            <Grid container className={classes.jobReqContainer}>
                <div className={classes.headContent}>
                    <BottomSection
                        style={{ color: 'color: rgba(255,255,255,0.7)' }}
                        title='Want to join?'
                        content='Are you interested to join our team? Check out our job openings and apply on your suitable role.'
                    />
                </div>
                <div className={classes.btnContent}>
                    <CustomButton
                        height='61px'
                        width='251px'
                        color='#FFFFFF'
                        textAlign='center'
                        boxSizing='border-box'
                        border='1px solid #C31A12'
                        borderRadius='10px'
                        backgroundColor='#F04037'
                        bgHover='#F04037'
                        // click= {() => {props.history.push('/career')}}
                    >
                        <Typography className={classes.btnLabel}> Check Job Openings</Typography>
                    </CustomButton>
                </div>
            </Grid>
        </div>
    );
}

export default withRouter(JobRequirement);