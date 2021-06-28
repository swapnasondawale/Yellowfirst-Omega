import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SectionOne from '../Shared/Sections/SectionOne/SectionOne';
const useStyles = makeStyles(() => ({

}))
function GetInTouchSection(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainGetInTouch}>
            <div>
                <SectionOne
                    title='Get in touch'
                    content='Create custom landing pages with Omega that converts more visitors than any website. '
                />
            </div>
        </Grid>
    );
}

export default GetInTouchSection;