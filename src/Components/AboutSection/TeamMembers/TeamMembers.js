import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import memberOne from '../../../Assets/Images/About/TeamMembers/Louise.png'
import memberTwo from '../../../Assets/Images/About/TeamMembers/Trevor.png'
import memberThree from '../../../Assets/Images/About/TeamMembers/Raymond.png'
import memberFour from '../../../Assets/Images/About/TeamMembers/George.png'
import memberFive from '../../../Assets/Images/About/TeamMembers/Daisy.png'
import memberSix from '../../../Assets/Images/About/TeamMembers/Todd.png'
import useStyles from './styles'
function TeamMembers() {
    const classes = useStyles();
    return (
        <div className={classes.mainTeamMem}>
            <Grid container className={classes.memberContainer}>
                <div className={classes.memberRow}>
                    <div className={classes.memberCol}>
                        <div className={classes.memberImg}>
                            <img src={memberOne} alt='memOne' />
                        </div>
                        <div className={classes.memberName}>
                            <Typography className={classes.name}>Louise Elliott </Typography>
                            <Typography className={classes.designation}>Founder and CEO</Typography>
                        </div>
                    </div>
                    <div className={classes.memberCol}>
                        <div className={classes.memberImg}>
                            <img src={memberTwo} alt='memOne' />
                        </div>
                        <div className={classes.memberName}>
                            <Typography className={classes.name}>Trevor Fleming</Typography>
                            <Typography className={classes.designation}>CTO</Typography>
                        </div>
                    </div>
                    <div className={classes.memberCol}>
                        <div className={classes.memberImg}>
                            <img src={memberThree} alt='memOne' />
                        </div>
                        <div className={classes.memberName}>
                            <Typography className={classes.name}>Raymond Baker</Typography>
                            <Typography className={classes.designation}>Software Engineer</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.memberRow}>
                    <div className={classes.memberCol}>
                        <div className={classes.memberImg}>
                            <img src={memberFour} alt='memOne' />
                        </div>
                        <div className={classes.memberName}>
                            <Typography className={classes.name}>George Torres</Typography>
                            <Typography className={classes.designation}>UX Designer</Typography>
                        </div>
                    </div>
                    <div className={classes.memberCol}>
                        <div className={classes.memberImg}>
                            <img src={memberFive} alt='memOne' />
                        </div>
                        <div className={classes.memberName}>
                            <Typography className={classes.name}>Daisy Ferguson</Typography>
                            <Typography className={classes.designation}>Content Writer</Typography>
                        </div>
                    </div>
                    <div className={classes.memberCol}>
                        <div className={classes.memberImg}>
                            <img src={memberSix} alt='memOne' />
                        </div>
                        <div className={classes.memberName}>
                            <Typography className={classes.name}>Todd Summers</Typography>
                            <Typography className={classes.designation}>Digital Marketer</Typography>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default TeamMembers;