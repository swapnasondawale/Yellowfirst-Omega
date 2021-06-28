import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import BG from '../../../Assets/Images/Career/BG.png'
import SectionTwo from '../../Shared/Sections/SectionTwo/SectionTwo';
import useStyles from './styles'
function Features() {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>
            <Grid container>
                <SectionTwo
                    title='Watch how we work here.'
                    content='These companies release their own versions of the operating systems with minor changes, and yet always with the same bottom line.'
                />
            </Grid>
            <Grid container className={classes.imgWrapper}>
                <Grid item xs={12} className={classes.imgContainer}>
                    <img src={BG} alt='BG' className={classes.img} />
                </Grid>
            </Grid>
            <Grid container className={classes.featureContainer}>
                <div className={classes.featureRow}>
                    <div className={classes.featureCol}>
                        <div className={classes.featureCol1}>
                            <div className={classes.ovalPlain} style={{ backgroundColor: 'rgba(84,84,212,0.1)' }}></div>
                            <div className={classes.ovalColor} style={{ backgroundColor: '#5454D4' }}></div>
                        </div>
                        <div className={classes.featureCol2}>
                            <Typography className={classes.headCol}>Work from anywhere</Typography>
                            <Typography className={classes.headCol2}>Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!</Typography>
                        </div>
                    </div>
                    <div className={classes.featureCol}>
                        <div className={classes.featureCol1}>
                            <div className={classes.ovalPlain} style={{ backgroundColor: 'rgba(240,64,55,0.1)' }}></div>
                            <div className={classes.ovalColor} style={{ backgroundColor: '#F04037' }}></div>
                        </div>
                        <div className={classes.featureCol2}>
                            <Typography className={classes.headCol}>Flexible hours</Typography>
                            <Typography className={classes.headCol2}>Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!</Typography>
                        </div>
                    </div>
                    <div className={classes.featureCol}>
                        <div className={classes.featureCol1}>
                            <div className={classes.ovalPlain} style={{ backgroundColor: 'rgba(254,220,90,0.1)' }}></div>
                            <div className={classes.ovalColor} style={{ backgroundColor: '#FEDC5A' }}></div>
                        </div>
                        <div className={classes.featureCol2}>
                            <Typography className={classes.headCol}>Work and travel</Typography>
                            <Typography className={classes.headCol2}>Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.featureRow}>
                    <div className={classes.featureCol}>
                        <div className={classes.featureCol1}>
                            <div className={classes.ovalPlain} style={{ backgroundColor: 'rgba(119,191,65,0.1)' }}></div>
                            <div className={classes.ovalColor} style={{ backgroundColor: '#77BF41' }}></div>
                        </div>
                        <div className={classes.featureCol2}>
                            <Typography className={classes.headCol}>Paid parental leave</Typography>
                            <Typography className={classes.headCol2}>Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!</Typography>
                        </div>
                    </div>
                    <div className={classes.featureCol}>
                        <div className={classes.featureCol1}>
                            <div className={classes.ovalPlain} style={{ backgroundColor: 'rgba(65,62,101,0.1)' }}></div>
                            <div className={classes.ovalColor} style={{ backgroundColor: '#413E65' }}></div>
                        </div>
                        <div className={classes.featureCol2}>
                            <Typography className={classes.headCol}>Yearly bonuses</Typography>
                            <Typography className={classes.headCol2}>Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!</Typography>
                        </div>

                    </div>
                    <div className={classes.featureCol}>
                        <div className={classes.featureCol1}>
                            <div className={classes.ovalPlain} style={{ backgroundColor: 'rgba(84,84,212,0.1)' }}></div>
                            <div className={classes.ovalColor} style={{ backgroundColor: '#5454D4' }}></div>
                        </div>
                        <div className={classes.featureCol2}>
                            <Typography className={classes.headCol}>Smart salary</Typography>
                            <Typography className={classes.headCol2}>Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!</Typography>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default Features;