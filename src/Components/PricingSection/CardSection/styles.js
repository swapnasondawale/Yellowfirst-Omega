import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        padding: '10px 10px',
    },
    paperContainer: {
        width: '100%',
        height: 'auto',
        padding: '30px 0px',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#413E65',
            cursor: 'pointer'
        },
    },
    planTitle: {
        height: '100%',
        width: '100%',
        padding: '5px 0px',
    },
    firstLabel: {
        height: '100%',
        width: '100%',
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '18px',
        fontWeight: '300',
        letterSpacing: '-0.56px',
        lineHeight: '28px',
        textAlign: 'center',
    },
    firstLabelHover: {
        height: '100%',
        width: '100%',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '18px',
        fontWeight: '300',
        letterSpacing: '-0.56px',
        lineHeight: '28px',
        textAlign: 'center',
    },
    planPrice: {
        height: '100%',
        width: '100%',
        padding: '5px 0px',
    },
    priceHead: {
        height: '100%',
        width: '100%',
        color: '#1D293F',
        fontFamily: 'circular-std-bold',
        fontSize: '60px',
        fontWeight: 'bold',
        letterSpacing: '-1.03px',
        lineHeight: '56px',
        textAlign: 'center',
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
    },
    priceHeadHover: {
        height: '100%',
        width: '100%',
        color: '#FFFFFF',
        fontFamily: 'circular-std-bold',
        fontSize: '60px',
        fontWeight: 'bold',
        letterSpacing: '-1.03px',
        lineHeight: '56px',
        textAlign: 'center',
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
    },
    providedServices: {
        height: '100%',
        width: '100%',
        padding: '15px 0px',
    },
    services: {
        height: '100%',
        width: '100%',
        color: '#696871',
        fontFamily: "circular-std-book",
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '50px',
        textAlign: 'center',
        // [theme.breakpoints.between('sm', 'md')]: {
        //     fontSize: '40px',
        // },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    servicesHover: {
        height: '100%',
        width: '100%',
        color: '#FFFFFF',
        fontFamily: "circular-std-book",
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '50px',
        textAlign: 'center',
        // [theme.breakpoints.between('sm', 'md')]: {
        //     fontSize: '40px',
        // },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    planStartedBtn: {
        height: '100%',
        width: '80%',
        margin: 'auto',
        padding: '10px 0px'
    }
}))
export default useStyles;