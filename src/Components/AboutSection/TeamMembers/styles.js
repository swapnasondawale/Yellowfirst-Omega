import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainTeamMem: {
        width: '100%',
        height: '100%',
    },
    memberContainer: {
        width: 'auto',
        height: 'auto',
        padding: '0px 0px 60px 0px',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: '100%',
            margin: '0px 0px 20px 0px',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            height: '100%',
            margin: '0px 0px 20px 0px',
        },
    },
    memberRow: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        padding: '10px 0px',
        justifyContent: 'space-between',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: 'auto',
            display: 'grid',
            justifyContent: 'center',
            padding: '0px 0px 0px 10px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            height: 'auto',
            display: 'grid',
            justifyContent: 'center',
            padding: '0px 0px 0px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-evenly',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-evenly',
        },
    },
    memberCol: {
        display: 'grid',
        justifyContent: 'center',
        margin: 'auto'
    },
    memberImg: {
        width: '160px',
        height: '160px',
        margin: 'auto',
    },
    memberOne: {
        width: '160px',
        height: '160px',
        borderRadius: '50%'
    },
    memberName: {
        width: '100%',
        height: '100%'
    },
    name: {
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '-0.75px',
        lineHeight: '28px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#19191B',
            fontFamily: 'circular-std-bold',
            fontSize: '21px',
            fontWeight: 'bold',
            letterSpacing: '-0.75px',
            lineHeight: '28px',
            textAlign: 'center',
        },
    },
    designation: {
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'center',
    }

}))
export default useStyles