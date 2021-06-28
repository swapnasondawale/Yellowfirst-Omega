import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    mainSection: {
        width: 'auto',
        height: '100%',
        padding: '60px 100px',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: 'auto',
            padding: '0px 10px',

        },
    },
    label1: {
        width: '526px',
        height: '84px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
        }
    },
    label: {
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: '-2.5px',
        lineHeight: '84px',
        [theme.breakpoints.down('xs')]: {
            color: '#19191B',
            fontFamily: 'circular-std-bold',
            fontSize: '40px',
        },
        [theme.breakpoints.up('xl')]: {
            margin: 'auto',
            color: '#19191B',
            fontFamily: 'circular-std-bold',
            fontSize: '80px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '84px',
        }
    },
    paraContainer: {
        width: '526px',
        height: '84px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: 'auto',
            textAlign: 'left',
        }
    },
    paraContent: {
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '39px',
        [theme.breakpoints.down('xs')]: {
            color: '#696871',
            fontFamily: 'circular-std-book',
            fontSize: '15px',
            fontWeight: '200',
            letterSpacing: '-0.66px',
            lineHeight: '25px',
        }
    }
}))
function SectionOne(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainSection}>
            <div className={classes.label1} >
                <Typography className={classes.label}>{props.title}</Typography>
            </div>
            <div className={classes.paraContainer}>
                <Typography className={classes.paraContent}>{props.content}</Typography>
            </div>
        </div>
    );
}

export default SectionOne;