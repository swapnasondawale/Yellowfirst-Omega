import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    mainCardContainer: {
        // border: '1px solid red', 
        height: '90px'
    },
    btnWrapper: {
        height: '60px'
    },
    mainstyleCheckbox: {
        textAlign: 'left',
        height: '80px',
        color: '#FEDC5A',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        // textAlign: 'center',
        cursor: 'pointer',
    },
    btnLabel: {
        margin: 'auto',
        padding: '10px 0px',
        color: '#FFFFFF',
        fontFamily: 'circular-std-medium',
        fontSize: '21px',
        fontWeight: '500',
        letterSpacing: '-0.66px',
        lineHeight: '27px',
        textTransform: 'capitalize'
    },
    errorContainer: {
        padding: '0px 0px 0px 10px',
        textAlign: 'left',
        color: '#F04037',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        letterSpacing: '-0.66px',
        lineHeight: '27px',
        textTransform: 'capitalize',
    },
    signInCheckbox: {
        textAlign: 'left',
        height: '50px',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        cursor: 'pointer',
        // border: '1px solid green'
    }
}))
export default useStyles