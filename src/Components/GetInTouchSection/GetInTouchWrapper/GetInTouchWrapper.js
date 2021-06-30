import { Grid, makeStyles,useTheme} from '@material-ui/core';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactFieldWrapper from '../ContactFieldWrapper/ContactFieldWrapper';
import ContactForm from '../ContactForm/ContactForm';
const useStyles = makeStyles((theme) => ({
    mainGetInWrapper: {
        display:'flex',
        flexDirection: 'row',
    },
}))
function GetInTouchWrapper(props) {
    const classes = useStyles();
    const theme = useTheme()
    const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container className={classes.mainGetInWrapper}>
            <Grid item xs={isMobileDevice ? 12 : 6} className={classes.ContactForm} ><ContactForm/></Grid>
            <Grid item xs={isMobileDevice ? 12 : 3} className={classes.mainGetInWrapper} ><ContactFieldWrapper/></Grid>
        </Grid>
    );
}

export default GetInTouchWrapper;