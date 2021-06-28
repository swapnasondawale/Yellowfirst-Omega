import React from 'react';
import { Grid, makeStyles, useTheme } from '@material-ui/core';
import Thumb from '../../Assets/Images/ThankYou/Thumb.svg'
import SectionFour from '../Shared/Sections/SectionFour/SectionFour';
import { CustomButton } from '../Shared/CustomButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles((theme) => ({
    mainErrorSection: {
        padding: '60px 100px',
        [theme.breakpoints.down('sm')]: {
            padding: '60px 0px',
        },
    },
    errorSection: {
        width: '100%',
        height: '100%',
        padding: '20px 0px',
        margin: 'auto'
    },
    errorHead: {
        padding: '20px 0px',
        margin: 'auto'
    },
    btnContainer: {
        padding: '20px 0px',
        margin: 'auto'
    }
}))
function ErrorSection() {
    const classes = useStyles();
    const theme = useTheme()
    const isMobileDevice = useMediaQuery(theme.breakpoints.between('xs', 'md'))
    return (
        <Grid container className={classes.mainErrorSection}>
            <Grid item xs={isMobileDevice ? 8 : 12} className={classes.errorSection}>
                <img src={Thumb} alt='404Error' />
            </Grid>
            <Grid item xs={12} className={classes.errorHead}>
                <SectionFour
                    className={classes.sectionFour}
                    title='Thank you!'
                    content='Create custom landing pages with Omega that converts more visitors than any website. '
                />
            </Grid>
            <Grid item xs={12} className={classes.btnContainer}>
                <CustomButton
                    width={isMobileDevice ? '200px' : '350px'}
                    height='61px'
                    color='#F04037'
                    fontFamily='circular-std-medium'
                    fontSize='21px'
                    fontWeight='500'
                    lineHeight='27px'
                    letterSpacing='-0.66px'
                    textTransform='capitalize'
                    textAlign='center'
                    boxSizing='border-box'
                    border='1px solid #C31A12'
                    borderRadius='10px'
                    bgHover='#F04037'
                    colorHover='#FFFFFF'
                >Go back to home</CustomButton>
            </Grid>
        </Grid>
    );
}

export default ErrorSection;