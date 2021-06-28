import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Container: {
        width: 'auto',
        background: 'black',
        padding: '60px 100px',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            background: 'black',
            padding: '0px 20px',
        }
    },
    rowContainer: {
        width: 'auto',
        background: 'black',
        padding: '10px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gridGap: '20px',
        [theme.breakpoints.down('md')]: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'auto auto auto',
            gridGap: '20px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'auto auto',
            gridGap: '20px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '10px 0px',
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'auto auto auto auto auto',
            gridGap: '20px',
        },
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    label: {
        color: '#FFFFFF',
        fontFamily: 'circular-std-black',
        fontSize: '24px',
        fontWeight: '900',
        letterSpacing: '-0.75px',
        lineHeight: '30px',
        [theme.breakpoints.down('xs')]: {
            alignContent: 'left',
            textAlign: 'left',
            color: '#FFFFFF',
            fontFamily: "circular-std-black",
            fontSize: '24px',
            fontWeight: '900',
            letterSpacing: '-0.75px',
            lineHeight: '30px',
        }
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'circular-std-bold',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '-0.5px',
        lineHeight: '20px',
    },
    linkList: {
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '38px',
    },
    bottomContainer: {
        margin: 'auto',
        width: 'auto',
        height: '40px',
        background: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
    dateContainer: {
        margin: 'auto',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'circular-std-book',
        fontSize: '13px',
        fontWeight: '300',
        letterSpacing: '-0.41px',
        lineHeight: '38px',

        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
            padding: '0px 0px',
            fontSize: '10px',
          
        }
    },
    socialIcon: {
        width: '86px',
        height: '20px',
        padding: '10px 0px',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {

        }
    }

}))
export default useStyles;