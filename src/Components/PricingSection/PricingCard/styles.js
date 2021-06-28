import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    priceContainer: {
        width: '100%',
        height: 'auto',
        padding: '40px 0px',
        display: 'flex',
        flexWrap: 'inherit',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px',
            display: 'contents',
            gridTemplateColumns: 'auto',
        },
    },
    cardCont: {
        width: '100%',
        height: 'auto',
    }
}))
export default useStyles;