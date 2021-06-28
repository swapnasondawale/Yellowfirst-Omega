import React from 'react';
import { LayoutWrapper } from '../../Layout/LayoutWrapper/index';
import SectionOne from '../../Components/Shared/Sections/SectionOne/SectionOne'
import TeamSection from '../../Components/AboutSection/TeamSection/TeamSection';
import TeamMembers from '../../Components/AboutSection/TeamMembers/TeamMembers';
import JobRequirement from '../../Components/AboutSection/JobRequirement/JobRequirement';
import Mission from '../../Components/AboutSection/Mission/Mission';
import useStyles from '../styles'
function About() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <div className={classes.SectionOne}>
                    <SectionOne
                        title='About us'
                        content='Create custom landing pages with Omega that converts more visitors than any website. '
                    />
                </div>
                <div>
                    <Mission/>
                </div>
                <div>
                    <TeamSection />
                </div>
                <div>
                    <TeamMembers />
                </div>
                <div >
                    <JobRequirement />
                </div>
            </div>
        </LayoutWrapper>
    );
}

export default About;