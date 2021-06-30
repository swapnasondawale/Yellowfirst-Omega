import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainSec: {
        width: 'auto',
        height: '100%',
        padding: '30px 0px',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: '100%',
            padding: '10px 10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: '100%',
            padding: '10px 0px',
        },
    },
    headLines: {
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
        }
    },
    headOneContainer: {
        textAlign: 'left',
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: 'auto'
        },
    },
    headOne: {
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: '-2.5px',
        lineHeight: '84px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '42px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '40px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '42px',
        },
        [theme.breakpoints.up('xl')]: {
            margin: 'auto',
            color: '#19191B',
            fontFamily: 'circular-std-bold',
            fontSize: '80px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '84px',
        }
    },
    textLabelContainer: {
        textAlign: 'left',
        margin: '25px 0px 0px 0px',
    },
    textLabel: {
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '39px',
        marginLeft: '10px',
        [theme.breakpoints.down('xs')]: {
            PaddingLeft: '20px',
            fontSize: '15px',
            fontWeight: '200',
            letterSpacing: '-0.66px',
            lineHeight: '25px',
        },
    },
}))
export default useStyles;