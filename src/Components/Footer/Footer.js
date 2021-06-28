import { Link, Typography } from '@material-ui/core';
import React from 'react';
import SocialMediaList from '../SocialMediaList/SocialMedialList';
import useStyles from './styles'
function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <div className={classes.rowContainer}>
                <div className={classes.column}>
                    <Typography className={classes.label} >Omega</Typography>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.title} >About</Typography>
                    <Link href="#" className={classes.linkList}>Our Mission</Link>
                    <Link href="#" className={classes.linkList}>Our Story</Link>
                    <Link href="#" className={classes.linkList}>Team Members</Link>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.title}> Learn</Typography>
                    <Link href="#" className={classes.linkList}>Tutorials</Link>
                    <Link href="#" className={classes.linkList}>How it works</Link>
                    <Link href="#" className={classes.linkList}>F.A.Q</Link>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.title}>Stories</Typography>
                    <Link href="#" className={classes.linkList}>Blog</Link>
                    <Link href="#" className={classes.linkList}>Tech stories</Link>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.title}>Hire</Typography>
                    <Link href="#" className={classes.linkList}>Career</Link>
                    <Link href="#" className={classes.linkList}>Freelancers</Link>
                    <Link href="#" className={classes.linkList}>Trainee</Link>
                </div>

            </div>
            <hr />
            <div className={classes.bottomContainer}>
                <div >
                    <p className={classes.dateContainer}>
                        &copy;{new Date().getFullYear()} UXTheme, All Rights Researved
                    </p>
                </div>
                <div className={classes.socialIcon}>
                    <SocialMediaList />
                </div>
            </div>
        </div>
    );
}

export default Footer;