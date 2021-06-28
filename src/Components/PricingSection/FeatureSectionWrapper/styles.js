import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: '100%',
        height: 'auto',
        display: 'grid',
        justifyContent: 'center',
        padding: '0px 100px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            display: 'grid',
            justifyContent: 'center',
            padding: '0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0px 100px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            padding: '0px 100px',
        },
    },
    gridOneWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0px',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            justifyContent: 'center',
            margin: '0px 0px 10px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0px 0px 10px 0px',
        },
    },
    gridTwoWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '10px 0px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            justifyContent: 'center',
            padding: '10px 0px',
            margin: '10px 0px 0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'flex',
            justifyContent: 'center',
            padding: '10px 0px',
            margin: '10px 0px 0px 0px',
        },
    },
    imgAvatar: {
        width: '69px',
        height: '69px'
    }
}))
export default useStyles;