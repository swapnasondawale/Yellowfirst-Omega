import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        width: 'auto',
        height: '100%',
        padding: '30px 100px',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: '100%',
            padding: '10px 10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: '100%',
            padding: '10px 100px',
        },
    },
    containerOne: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'auto',
            display: 'grid',
        },
    },
    sectCon: {
        maxWidth: '100%',
        height: '100%',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: '100%',
            textAlign: 'center',

        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: '100%',

        },
    },
    headText: {
        width: '100%',
        height: 'auto',
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: '-1.5px',
        lineHeight: '84px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 'auto',
            fontSize: '40px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '42px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            height: 'auto',
            fontSize: '38px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '42px',
            textAlign: 'center'
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: 'auto',
            margin: 'auto',
            color: '#19191B',
            fontFamily: 'circular-std-bold',
            fontSize: '80px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '84px',
        }
    },
    toggleSection: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        padding: '0px 10px 0px 0px',
        [theme.breakpoints.down('xs')]: {
            maxWidth: 'fit-content',
            height: '100%',
            margin: 'auto',
            padding: '10px 0px 0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: '100%',
            margin: 'auto',
            padding: '0px 20px 0px 10px',
        },
    },
    cardContainer: {
        width: '100%',
        padding: '10px 0px',
        display: 'grid',
        

        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '0px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            margin: '0px'
        },
    },
    cardWrapper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'contents'
            
        },
    }
}))
export default useStyles;