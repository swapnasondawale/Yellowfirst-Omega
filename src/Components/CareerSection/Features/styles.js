import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        width: 'auto',
        height: '100%',
        padding: '60px 100px',
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
    headLines: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    headOneContainer: {
        width: '100%',
        height: 'auto',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
        }
    },
    headOne: {
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: '-2.5px',
        lineHeight: '84px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '42px',
        },
        [theme.breakpoints.up('xl')]: {
            margin: 'auto',
            marginLeft: '200px',
            color: '#19191B',
            fontFamily: 'circular-std-bold',
            fontSize: '80px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '84px',
        }
    },
    textLabelContainer: {
        width: '526px',
        height: '84px',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: 'auto',
            textAlign: 'left',
        }
    },
    textLabel: {
        color: '#696871',
        fontFamily: "circular-std-book",
        fontSize: '21px',
        fontWeight: '300',
        letterSpacing: '-0.66px',
        lineHeight: '39px',
        textAlign: 'left',
        paddingLeft: '200px',
        [theme.breakpoints.down('xs')]: {
            PaddingLeft: '20px',
            fontSize: '15px',
            fontWeight: '200',
            letterSpacing: '-0.66px',
            lineHeight: '25px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
            paddingLeft: '10px',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '40px',
            paddingLeft: '10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '110px',
            paddingLeft: '10px',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '30px',
            marginLeft: '200px',
        }
    },
    imgWrapper: {
        width: '100%',
        height: 'auto',
        padding: '30px 0px',
    },
    img: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
    },
    featureContainer: {
        width: '100%',
        height: 'auto',
    },
    featureRow: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: 'auto',
            display: 'grid',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: 'auto',
            display: 'contents',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    featureCol: {
        width: 'auto',
        height: '200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    featureCol1: {
        width: '60px',
        // border: '1px solid #ccc',
        [theme.breakpoints.up('sm')]: {
            width: '40px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '50px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '80px',
        },
    },
    ovalPlain: {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        margin: 'auto',
        marginLeft: '5px',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            margin: 'auto',

        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',

        },
        [theme.breakpoints.up('xl')]: {
            width: '40px',
            height: '40px',
            margin: 'auto',
            marginLeft: '20px',
            borderRadius: '50%',

        },
    },
    ovalColor: {
        width: '14px',
        height: '14px',
        transform: 'scaleX(-1)',
        borderRadius: '50%',
        margin: 'auto',
        marginTop: '17px',
        [theme.breakpoints.up('sm')]: {
            width: '14px',
            height: '14px',
            transform: 'scaleX(-1)',
            borderRadius: '50%',
            margin: 'auto',
            marginTop: '13px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '14px',
            height: '14px',
            transform: 'scaleX(-1)',
            borderRadius: '50%',
            margin: 'auto',
            marginTop: '18px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '14px',
            height: '14px',
            transform: 'scaleX(-1)',
            borderRadius: '50%',
            margin: 'auto',
            marginTop: '13px',
        },
    },
    featureCol2: {
        textAlign: 'left',
        height: 'auto',
        width: '240px',
        marginLeft: '10px',
        display: 'grid',
        justifyContent: 'center',
        [theme.breakpoints.up('xs')]: {
            textAlign: 'left',
            height: 'auto',
            display: 'grid',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
            height: 'auto',
            width: '225px',
            display: 'grid',
            justifyContent: 'center'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            textAlign: 'left',
            height: 'auto',
            width: '240px',
            display: 'grid',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('xl')]: {
            textAlign: 'left',
            height: 'auto',
            width: '349px',
            display: 'grid',
            justifyContent: 'center'
        },
    },
    headCol: {
        color: '#19191B',
        fontFamily: "circular-std-bold",
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '-0.75px',
        lineHeight: '30px',
        [theme.breakpoints.between('sm')]: {
            color: '#19191B',
            fontFamily: "circular-std-bold",
            fontSize: '24px',
            fontWeight: 'bold',
            letterSpacing: '-0.75px',
            lineHeight: '30px',
        }

    },
    headCol2: {
        // height: '84px',
        width: '200px',
        color: '#696871',
        fontFamily: "circular-std-book",
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
    }

}))
export default useStyles;