import React from 'react'
import FeatureSectionWrapper from '../FeatureSectionWrapper/FeatureSectionWrapper';
import SectionFour from '../../Shared/Sections/SectionFour/SectionFour'
import useStyles from './styles'
function FeaturePricing(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainFeaturePricing}>
            <div>
                <SectionFour
                    title='Check all of our features '
                />
            </div>
            <div>
                <FeatureSectionWrapper/>
            </div>
        </div >
    );
}

export default FeaturePricing;