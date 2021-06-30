import React from 'react';
import { Link } from '@material-ui/core';
import {CustomButton} from '../Shared/CustomButton/index';
import useStyles from './styles'
import { withRouter } from 'react-router';
function MainHeader(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainHeader}>
            <div className={classes.label}>Omega</div>
            <div className={classes.labelContainer}>
                <Link href="#" color='inherit' className={classes.pages} style={{ fontFamily: 'circular-std-book' }}>
                    Demos
                </Link>
                <Link href="#" color='inherit' className={classes.pages} style={{ fontFamily: 'circular-std-book' }}>
                    Pages
                </Link>
                <Link href="#" color='inherit' className={classes.support} style={{ fontFamily: 'circular-std-book' }}>
                    Support
                </Link>
            </div>
            <div>
                <CustomButton
                    color='#FFFFFF'
                    fontFamily="circular-std-medium'"
                    fontSize='16px'
                    fontWeight='500'
                    letterSpacing='-0.5px'
                    lineHeight='20px'
                    textAlign='center'
                    boxSizing='border-box'
                    height='46px'
                    width='142px'
                    border='1px solid #C31A12'
                    borderRadius='5px'
                    backgroundColor='#F04037'
                    textTransform='capitalize'
                    bgHover='#F04037'
                    click={() => {props.history.push('/signin')}}
                >Get Started
                    </CustomButton>
            </div>
            <div className={classes.emptyDiv}></div>
        </div>
    );
}

export default withRouter(MainHeader);