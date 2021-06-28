import { Avatar,Grid } from '@material-ui/core';
import React from 'react';
import FeatureSection from '../../Shared/FeatureSection/FeatureSection'
import responsive from '../../../Assets/Images/Pricing/CustomFeatures/responsive.svg'
import layouts from '../../../Assets/Images/Pricing/CustomFeatures/layouts.svg'
import loading from '../../../Assets/Images/Pricing/CustomFeatures/loading.svg'
import support from '../../../Assets/Images/Pricing/CustomFeatures/support.svg'
import documentations from '../../../Assets/Images/Pricing/CustomFeatures/documentations.svg'
import updates from '../../../Assets/Images/Pricing/CustomFeatures/updates.svg'
import useStyles from './styles';

function FeatureSectionWrapper(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainWrapper} >
            <div className={classes.gridOneWrapper}>
                <FeatureSection
                    imgIcon={<Avatar src={responsive} alt='resp' className={classes.imgAvatar} />}
                    headText='Fully Responsive'
                    bodyText='With lots of unique blocks, you can easily build a page without coding.'
                />
                <FeatureSection
                    imgIcon={<Avatar src={layouts} alt='resp' className={classes.imgAvatar} />}
                    headText='Multiple Layouts'
                    bodyText='With lots of unique blocks, you can easily build a page without coding.'
                />
                <FeatureSection
                    imgIcon={<Avatar src={loading} alt='resp' className={classes.imgAvatar} />}
                    headText='Faster Loading'
                    bodyText='With lots of unique blocks, you can easily build a page without coding.'
                />
            </div>
            <div className={classes.gridTwoWrapper}>
                <FeatureSection
                    imgIcon={<Avatar src={support} alt='resp' className={classes.imgAvatar} />}
                    headText='Super Support'
                    bodyText='With lots of unique blocks, you can easily build a page without coding.'
                />
                <FeatureSection
                    imgIcon={<Avatar src={documentations} alt='resp' className={classes.imgAvatar} />}
                    headText='Rich Documentation'
                    bodyText='With lots of unique blocks, you can easily build a page without coding.'
                />
                <FeatureSection
                    imgIcon={<Avatar src={updates} alt='resp' className={classes.imgAvatar} />}
                    headText='Lifetime Updates'
                    bodyText='With lots of unique blocks, you can easily build a page without coding.'
                />
            </div>
        </Grid>
    );
}

export default FeatureSectionWrapper;