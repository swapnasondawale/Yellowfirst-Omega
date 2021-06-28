import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainJobDesc: {
        width: 'auto',
        height: '100%',
    },

    secFourContainer: {
        width: 'auto',
        height: 'auto',
        [theme.breakpoints.up('xs')]: {
            width: 'auto',
            height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            height: '100%',
        },
    },
    secFourRow: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        padding: '10px 0px',
        justifyContent: 'space-between',
        // position: 'absolute',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: 'auto',
            display: 'grid',
            justifyContent: 'center',
            padding: '0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: 'auto',
            display: 'contents',
            justifyContent: 'space-between',
            padding: '10px 10px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
        },
    },

    secFourCol: {
        margin: '20px 0px 0px 0px',
        height: '155px',
        width: '400px',
        display: 'grid',
        justifyContent: 'center',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 52px 54px 0 rgba(65,62,101,0.3)',

        [theme.breakpoints.between('xs', 'sm')]: {
            height: '155px',
            width: '250px',
            margin: '10px 0px',
            display: 'grid',
            justifyContent: 'center',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '10px 10px 0px 10px',
            height: '155px',
            width: '255px',
            display: 'grid',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('xl')]: {
            margin: '10px 0px 0px 10px',
            height: '155px',
            width: '775px',
            display: 'grid',
            justifyContent: 'center',
        },
    },
    secFourCol1: {
        width: '100%',
        height: '28px',
        display: 'flex',
        padding: '20px 0px',
        justifyContent: 'space-between',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    addLabel: {
        height: '28px',
        // width: '132px',
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'left'
    },
    locIcon: {
        boxSizing: 'border-box',
        height: '20px',
        width: '20px',
        marginTop: '2px',
        // border: '2px solid #CDCCD9',
        color: '#CDCCD9'
    },
    btnContainer: {
        height: '30px',
        // width: '76px',
        borderRadius: '5px',
        marginLeft: '5px',
        backgroundColor: 'rgba(84,84,212,0.1)',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5px'
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginLeft: '15px'
        }
    },
    btnCs: {
        color: '#5454D4',
        fontFamily: 'circular-std-book',
        fontSize: '13px',
        fontWeight: '300',
        lineHeight: '16px',
        textTransform: 'capitalize',

    },
    secFourCol2: {
        height: '28px',
        width: '231px',
        textAlign: 'left',
        marginBottom: '30px',
        [theme.breakpoints.up('xs')]: {
            height: '28px',
            width: '231px',
            textAlign: 'left',
        },
        [theme.breakpoints.up('sm')]: {
            height: '28px',
            width: '231px',
            textAlign: 'left',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '28px',
            width: '231px',
            textAlign: 'left',
        },
        [theme.breakpoints.up('xl')]: {
            height: '28px',
            width: '231px',
            textAlign: 'left',
        },
    },
    secFourHead: {
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '-0.66px',
        lineHeight: '28px',
    }
}))
export default useStyles;