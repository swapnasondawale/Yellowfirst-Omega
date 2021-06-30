import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    mainFormHead: {
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 'auto'
        }
    },
    headLabel: {
        padding: '10px 0px',
        color: '#FFFFFF',
        fontFamily: 'circular-std-bold',
        fontSize: props => props.fontSize,
        fontWeight: 'bold',
        letterSpacing: '-1.03px',
        lineHeight: '56px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
            padding: '0px 0px',
        }
    },
    headContent: {
        padding: '0px 0px 20px 0px',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '39px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
            padding: '0px 0px 10px 0px',
            fontWeight: '300',
            letterSpacing: '-0.66px',
            lineHeight: '29px',
        }
    }
}))
function FormHead(props) {
    const {mainFormHead,headLabel, headContent } = useStyles(props);
    return (
        <div className={`${mainFormHead}`}>
            <Typography className={`${headLabel}`}>{props.headLabel}</Typography>
            <Typography className={`${headContent}`}>{props.headContent}</Typography>
        </div>
    );
}

export default FormHead;