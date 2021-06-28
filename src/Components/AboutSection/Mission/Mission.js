import { Grid } from '@material-ui/core';
import React from 'react';
import SectionTwo from '../../Shared/Sections/SectionTwo/SectionTwo'
import ImageSection from '../ImageSection/ImageSection';
import useStyles from './styles'
function Mission() {
    const classes = useStyles();
    return (
        <div className={classes.mainSec}>
            <Grid container className={classes.headLines}>
                <SectionTwo
                    title='Our mission is to make your life easier'
                    content='Create custom landing pages with Omega that converts 
        more visitors than any website. With lots of unique blocks, 
        you can easily build a page without coding. Create custom 
        landing pages with Omega that converts more visitors 
        than any website. With lots of unique blocks, you can 
        easily build a page without coding.'/>
            </Grid>
            <Grid container className={classes.imgContainer}>
                <Grid item xs={12} className={classes.imgWrapper} >
                    <ImageSection />
                </Grid>
            </Grid>
        </div>
    );
}

export default Mission;