import React from 'react';
import SectionOne from '../../Components/Shared/Sections/SectionOne/SectionOne';
import SectionTwo from '../../Components/Shared/Sections/SectionTwo/SectionTwo';
import { LayoutWrapper } from '../../Layout/LayoutWrapper';
import useStyles from '../styles'
import GetInTouchWrapper from '../../Components/GetInTouchSection/GetInTouchWrapper/GetInTouchWrapper';
function GetInTouchView() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <div className={classes.SectionOne}>
                    <SectionOne
                        title='Get in touch'
                        content='Create custom landing pages with Omega that converts more visitors than any website. '
                    />
                </div>
                <div className={classes.contactSectionTwo}>
                    <SectionTwo
                        title='We are always open 24/7 for you.'
                        content=''
                    />
                </div>
                <div>
                    <GetInTouchWrapper />
                </div>

            </div>
        </LayoutWrapper>
    );
}

export default GetInTouchView;