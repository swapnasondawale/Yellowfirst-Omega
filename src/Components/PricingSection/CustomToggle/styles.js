import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainToggle: {
        width: '100%',
        height: '100%',
        // margin: 'auto',
    },
    toggleGroup: {
        width: '50%',
        margin: 'auto',
        backgroundColor: '#F7F7FB',
        padding: '10px',
        borderRadius: '10px 10px 10px 10px',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            margin: 'auto',
            backgroundColor: '#F7F7FB',
            padding: '10px',
            borderRadius: '10px 10px 10px 10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            margin: 'auto',
            backgroundColor: '#F7F7FB',
            padding: '10px',
            borderRadius: '10px 10px 10px 10px',
        },
    },
    toggleButton: {
        width: '100%',
        height: '65px',
        border: '0',
        borderRadius: '10px 10px 10px 10px',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            height: '45px',
            margin: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: '65px',
        },
    },
    toggleSelected: {
        width: '100%',
        borderRadius: '10px',
        border: '1px solid #5454D4',
        color: '#FFFFFF',
        background: 'linear-gradient(0deg, rgba(84,84,212,1) 100%, rgba(84,84,212,1) 0%)',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            borderRadius: '10px',
            border: '1px solid #5454D4',
            color: '#FFFFFF',
            background: 'linear-gradient(0deg, #5454D4 100%, #5454D4 0%)',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            borderRadius: '10px',
            border: '1px solid #5454D4',
            color: '#FFFFFF',
            background: 'linear-gradient(0deg, #5454D4 100%, #5454D4 0%)',
        },
    },
    btnLabel: {
        height: 'auto',
        width: '100%',
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '-0.5px',
        lineHeight: '20px',
        textAlign: "center",
        textTransform: 'capitalize',
    },
}))
export default useStyles;