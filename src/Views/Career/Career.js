import React from 'react';
import { withRouter } from 'react-router';
import SectionOne from '../../Components/Shared/Sections/SectionOne/SectionOne'
import OpenRoleSec from '../../Components/CareerSection/OpenRoleSec/OpenRoleSec';
import { LayoutWrapper } from '../../Layout/LayoutWrapper/index'
import Features from '../../Components/CareerSection/Features/Features';
import useStyles from '../styles'
function Career() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <div className={classes.SectionOne}>
                    <SectionOne
                        title='Career'
                        content='Create custom landing pages with Omega that converts more visitors than any website. '
                    />
                </div>
                <div><Features /></div>
                <div><OpenRoleSec /></div>
            </div>
        </LayoutWrapper>
    );
}

export default withRouter(Career);