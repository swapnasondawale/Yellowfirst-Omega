import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import useStyles from './styles'
function JobOpening() {
    const classes = useStyles();
    return (
        <div className={classes.mainJobDesc}>
            <Grid container className={classes.secFourContainer}>
                <div className={classes.secFourRow}>
                    <div className={classes.secFourCol}>
                        <div className={classes.secFourCol1}>
                            <div ><RoomIcon className={classes.locIcon} /></div>
                            <div className={classes.addLabel} >South Haven, USA</div>
                            <div className={classes.btnContainer} style={{ backgroundColor: 'rgba(84,84,212,0.1)' }}>
                                <Button className={classes.btnCs} style={{ color: '#5454D4' }}>part-time</Button>
                            </div>
                        </div>
                        <div className={classes.secFourCol2}>
                            <Typography className={classes.secFourHead}>Senior UX Designer</Typography>
                        </div>
                    </div>
                    <div className={classes.secFourCol}>
                        <div className={classes.secFourCol1}>
                            <div ><RoomIcon className={classes.locIcon} /></div>
                            <div className={classes.addLabel} >Paucekchester, UK</div>
                            <div className={classes.btnContainer} style={{ backgroundColor: 'rgba(240,64,55,0.1)' }} >
                                <Button className={classes.btnCs} style={{ color: '#F04037' }}>part-time</Button>
                            </div>
                        </div>
                        <div className={classes.secFourCol2}>
                            <Typography className={classes.secFourHead}>Marketing Manager</Typography>
                        </div>
                    </div>
                    <div className={classes.secFourCol}>
                        <div className={classes.secFourCol1}>
                            <div ><RoomIcon className={classes.locIcon} /></div>
                            <div className={classes.addLabel} >Noemieport, Norway</div>
                            <div className={classes.btnContainer} style={{ backgroundColor: 'rgba(240,64,55,0.1)' }}>
                                <Button className={classes.btnCs} style={{ color: '#F04037' }}>part-time</Button>
                            </div>
                        </div>
                        <div className={classes.secFourCol2}>
                            <Typography className={classes.secFourHead}>Junior Call Support</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.secFourRow}>
                    <div className={classes.secFourCol}>
                        <div className={classes.secFourCol1}>
                            <div ><RoomIcon className={classes.locIcon} /></div>
                            <div className={classes.addLabel} >Mooreville, Canada</div>
                            <div className={classes.btnContainer} style={{ backgroundColor: 'rgba(240,64,55,0.1)' }}>
                                <Button className={classes.btnCs} style={{ color: '#F04037' }}>part-time</Button>
                            </div>
                        </div>
                        <div className={classes.secFourCol2}>
                            <Typography className={classes.secFourHead}>Project Manager</Typography>
                        </div>
                    </div>
                    <div className={classes.secFourCol}>
                        <div className={classes.secFourCol1}>
                            <div  ><RoomIcon className={classes.locIcon} /></div>
                            <div className={classes.addLabel} >Anywhere</div>
                            <div className={classes.btnContainer} style={{ backgroundColor: 'rgba(119,191,65,0.1)' }}>
                                <Button className={classes.btnCs} style={{ color: '#77BF41' }}>Remote</Button>
                            </div>
                        </div>
                        <div className={classes.secFourCol2}>
                            <Typography className={classes.secFourHead}>Senior Software Engineer</Typography>
                        </div>

                    </div>
                    <div className={classes.secFourCol}>
                        <div className={classes.secFourCol1}>
                            <div><RoomIcon className={classes.locIcon} /></div>
                            <div className={classes.addLabel} >Vonstad, Spain</div>
                            <div className={classes.btnContainer} style={{ backgroundColor: 'rgba(84,84,212,0.1)' }}>
                                <Button className={classes.btnCs} style={{ color: '#5454D4' }}>Full-time</Button>
                            </div>
                        </div>
                        <div className={classes.secFourCol2}>
                            <Typography className={classes.secFourHead}>Marketing Director</Typography>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default JobOpening;