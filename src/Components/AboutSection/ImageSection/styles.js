import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainImageSect: {
        width: 'auto',
        height: '100%',
        padding: '0px 0px',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: '100%',
            padding: '10px 0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: '100%',
            padding: '20px 0px',
        },
    },
    mainSecOne: {
        padding: '60px 10px 0px 0px',
        margin: 'auto',
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    rectangle: {
        width: '100%',
        height: '90%',
        borderRadius: '10px',
        marginRight: '10px'
    },
    rectangleCopy: {
        width: '100%',
        height: '90%',
        borderRadius: '10px',
        marginLeft: '10px'
    }
}))
export default useStyles;