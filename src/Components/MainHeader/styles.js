import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainHeader: {
        width: 'auto',
        height: '46px',
        marginRight: '24px',
        padding: '13px 0px',
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(147.31deg, rgba(141,141,236,0.17) 0%, rgba(84,84,212,0) 100%)',
        justifyContent: 'space-between',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '99vw',
            height: '135px',
            margin: 'auto',
            padding: '13px 0px',
            display: 'grid',
            justifyContent: 'center',
            background: 'linear-gradient(147.31deg, rgba(141,141,236,0.17) 0%, rgba(84,84,212,0) 100%)',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '99.7vw',
            height: '54px',
            margin: '0px',
            padding: '13px 0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            background: 'linear-gradient(147.31deg, rgba(141,141,236,0.17) 0%, rgba(84,84,212,0) 100%)',
        },
    },
    label: {
        height: '30px',
        width: '79px',
        padding: '10px 20px',
        color: '#19191B',
        fontFamily: "circular-std-bold",
        fontSize: '24px',
        fontWeight: '900',
        letterSpacing: '-0.75px',
        lineHeight: '30px',
        [theme.breakpoints.down('sm')]: {
            height: '30px',
            width: '79px',
            color: '#19191B',
            fontFamily: "circular-std-bold",
            fontSize: '24px',
            fontWeight: '900',
            letterSpacing: '-0.75px',
            lineHeight: '30px',
        },
        [theme.breakpoints.between('xs', 'xs')]: {
            margin: 'auto',
            height: '30px',
            width: '79px',
            color: '#19191B',
            fontFamily: "circular-std-bold",
            fontSize: '24px',
            fontWeight: '900',
            letterSpacing: '-0.75px',
            lineHeight: '30px',
        },
    },
    labelContainer: {
        width: '250px',
        marginLeft: 'auto',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    emptyDiv: {
        padding: '10px'
    }
}))
export default useStyles;