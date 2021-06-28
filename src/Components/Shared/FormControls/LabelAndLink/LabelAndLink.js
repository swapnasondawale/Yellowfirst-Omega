import { Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    accountWrapper: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        padding: '10px 0px',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '5px 0px',
            display: 'flex',
        },
    },
    alreadyLabel: {
        padding: '0px',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
    },
    singInRoute: {
        padding: '0px 0px 0px 5px',
        color: '#FEDC5A',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'center',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
    },

}))
function LabelAndLink(props) {
    const classes = useStyles();
    const { labelLink, routeLink, handleClick } = props;
    return (
        <div className={classes.accountWrapper}>
            <Typography className={classes.alreadyLabel}>{labelLink}</Typography>
            <Link className={classes.singInRoute}
                onClick={ handleClick }
            >{routeLink}</Link>
        </div>
    );
}

export default LabelAndLink;