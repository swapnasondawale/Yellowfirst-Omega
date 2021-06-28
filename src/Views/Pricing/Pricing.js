import React from 'react';
import { withRouter } from 'react-router';
import ContentSwitch from '../../Components/PricingSection/ContentSwitch/ContentSwitch';
import FeaturePricing from '../../Components/PricingSection/FeaturePricing/FeaturePricing';
import QuestionSection from '../../Components/PricingSection/QuestionSection/QuestionSection';
import SectionOne from '../../Components/Shared/Sections/SectionOne/SectionOne';
import { LayoutWrapper } from '../../Layout/LayoutWrapper';
import useStyles from '../styles'
function Pricing() {
    const classes = useStyles();
    return (
        <LayoutWrapper>
            <div className={classes.mainDiv}>
                <div className={classes.SectionOne}>
                    <SectionOne
                        title='Pricing'
                        content='Create custom landing pages with Omega that converts more visitors than any website. '
                    />
                </div>
                <div>
                    <ContentSwitch/>
                </div>
                <div>
                    <FeaturePricing/>
                </div>
                <div>
                    <QuestionSection/>
                </div>

            </div>
        </LayoutWrapper>
    );
}

export default withRouter(Pricing);