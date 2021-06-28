import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        gridTemplateColumns: 'auto',
        padding: '0px 100px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0px 100px',

        },
    },
    gridOneWrapper: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
    },
    gridTwoWrapper: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
    },
    gridThreeWrapper: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
    },
    contactSect: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0px 0px',

        },
    },
    contactLabel: {
        padding: '0px',
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'center',
    },
    contactHere: {
        padding: '0px 0px 0px 5px',
        color: '#F04037',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'center',
        cursor: 'pointer'
    }
}))
export default useStyles;