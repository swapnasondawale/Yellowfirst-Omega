import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    mainBottomSec: {
        width: 'auto',
        height: '100%',
        padding: '0px 100px',
    },
    innerContainer: {
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
    gridInner: {
        padding: '60px 0px',
    },
    titleText: {
        padding: '0px 0px 20px 0px',
        margin: 'auto', 
        color : '#FFFFFF',       
        fontFamily: "circular-std-bold",
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: '-2.5px',
        lineHeight: '84px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 10px 0px',
            fontSize: '30px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '32px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '70px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '84px',
        },
    },
    contentText: {
        margin: 'auto',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '39px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            
            fontSize: '15px',
            fontWeight: '300',
            letterSpacing: '-0.66px',
            lineHeight: '20px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '21px',
            fontWeight: '300',
            letterSpacing: '-0.66px',
            lineHeight: '39px',
        },
    },

}))
export default useStyles;