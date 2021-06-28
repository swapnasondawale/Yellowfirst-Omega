import React from 'react';
import { makeStyles } from '@material-ui/core';
import SectionFour from '../../Shared/Sections/SectionFour/SectionFour';

const useStyles = makeStyles((theme) => ({
    mainJobs: {
        margin: '0px'
    }
}))
function TeamSection() {
    const classes = useStyles();
    return (
        <div className={classes.mainJobs}>
            <SectionFour
                title='Meet the team'
                content='Create custom landing pages with Omega that converts more visitors than any website. '
            />
        </div>
    );
}

export default TeamSection;