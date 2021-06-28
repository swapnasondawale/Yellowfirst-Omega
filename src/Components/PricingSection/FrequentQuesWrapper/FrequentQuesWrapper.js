import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import FeatureQuestion from '../../Shared/FeatureQuestions/FeatureQuestions'
import { Link } from '@material-ui/core';
function FrequentQuesWrapper() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.mainWrapper} >
                <Grid item xs={12} className={classes.gridOneWrapper}>
                    <FeatureQuestion
                        paddingHead='5px 0px'
                        colorHead='#19191B'
                        fontFamilyHead='circular-std-bold'
                        fontSizeHead='24px'
                        fontWeightHead='500'
                        letterSpacingHead='-0.75px'
                        lineHeightHead='30px'
                        textAlignHead='left'
                        fontSizeHeaddownSm='17px'

                        paddingBody='10px 0px'
                        colorBody='#696871'
                        fontFamilyBody='circular-std-book'
                        fontSizeBody='16px'
                        fontWeightBody='300'
                        letterSpacingBody='-0.5px'
                        lineHeightBody='28px'
                        textAlignBody='left'
                        fontSizeBodydownSm='14px'

                        headText='What’s gonna be your question?'
                        bodyText='Create custom landing pages with Omega that converts more visitors than any website.
                     With lots of unique blocks, you can easily build a page without any design or custom coding.
                     with Omega that converts more visitors than any website.'
                    />
                    <FeatureQuestion
                        paddingHead='5px 0px'
                        colorHead='#19191B'
                        fontFamilyHead='circular-std-bold'
                        fontSizeHead='24px'
                        fontWeightHead='500'
                        letterSpacingHead='-0.75px'
                        lineHeightHead='30px'
                        textAlignHead='left'
                        fontSizeHeaddownSm='17px'

                        paddingBody='10px 0px'
                        colorBody='#696871'
                        fontFamilyBody='circular-std-book'
                        fontSizeBody='16px'
                        fontWeightBody='300'
                        letterSpacingBody='-0.5px'
                        lineHeightBody='28px'
                        textAlignBody='left'
                        fontSizeBodydownSm='14px'
                        headText='What’s gonna be your question?'
                        bodyText='Create custom landing pages with Omega that converts more visitors than any website.
                     With lots of unique blocks, you can easily build a page without any design or custom coding.
                     with Omega that converts more visitors than any website.
                     '
                    />
                </Grid>
                <Grid item xs={12} className={classes.gridTwoWrapper}>
                    <FeatureQuestion
                        paddingHead='5px 0px'
                        colorHead='#19191B'
                        fontFamilyHead='circular-std-bold'
                        fontSizeHead='24px'
                        fontWeightHead='500'
                        letterSpacingHead='-0.75px'
                        lineHeightHead='30px'
                        textAlignHead='left'
                        fontSizeHeaddownSm='17px'

                        paddingBody='10px 0px'
                        colorBody='#696871'
                        fontFamilyBody='circular-std-book'
                        fontSizeBody='16px'
                        fontWeightBody='300'
                        letterSpacingBody='-0.5px'
                        lineHeightBody='28px'
                        textAlignBody='left'
                        fontSizeBodydownSm='14px'


                        headText='What’s gonna be your question?'
                        bodyText='Create custom landing pages with Omega that converts more visitors than any website.
                     With lots of unique blocks, you can easily build a page without any design or custom coding.
                     with Omega that converts more visitors than any website.'
                    />
                    <FeatureQuestion
                        paddingHead='5px 0px'
                        colorHead='#19191B'
                        fontFamilyHead='circular-std-bold'
                        fontSizeHead='24px'
                        fontWeightHead='500'
                        letterSpacingHead='-0.75px'
                        lineHeightHead='30px'
                        textAlignHead='left'
                        fontSizeHeaddownSm='17px'

                        paddingBody='10px 0px'
                        colorBody='#696871'
                        fontFamilyBody='circular-std-book'
                        fontSizeBody='16px'
                        fontWeightBody='300'
                        letterSpacingBody='-0.5px'
                        lineHeightBody='28px'
                        textAlignBody='left'
                        fontSizeBodydownSm='14px'
                        headText='What’s gonna be your question?'
                        bodyText='Create custom landing pages with Omega that converts more visitors than any website.
                     With lots of unique blocks, you can easily build a page without any design or custom coding.
                     with Omega that converts more visitors than any website.'
                    />
                </Grid>
                <Grid item xs={12} className={classes.gridThreeWrapper}>
                    <FeatureQuestion
                        paddingHead='5px 0px'
                        colorHead='#19191B'
                        fontFamilyHead='circular-std-bold'
                        fontSizeHead='24px'
                        fontWeightHead='500'
                        letterSpacingHead='-0.75px'
                        lineHeightHead='30px'
                        textAlignHead='left'
                        fontSizeHeaddownSm='17px'

                        paddingBody='10px 0px'
                        colorBody='#696871'
                        fontFamilyBody='circular-std-book'
                        fontSizeBody='16px'
                        fontWeightBody='300'
                        letterSpacingBody='-0.5px'
                        lineHeightBody='28px'
                        textAlignBody='left'
                        fontSizeBodydownSm='14px'
                        headText='What’s gonna be your question?'
                        bodyText='Create custom landing pages with Omega that converts more visitors than any website.
                     With lots of unique blocks, you can easily build a page without any design or custom coding.
                     with Omega that converts more visitors than any website.'
                    />
                    <FeatureQuestion
                        paddingHead='5px 0px'
                        colorHead='#19191B'
                        fontFamilyHead='circular-std-bold'
                        fontSizeHead='24px'
                        fontWeightHead='500'
                        letterSpacingHead='-0.75px'
                        lineHeightHead='30px'
                        textAlignHead='left'
                        fontSizeHeaddownSm='17px'

                        paddingBody='10px 0px'
                        colorBody='#696871'
                        fontFamilyBody='circular-std-book'
                        fontSizeBody='16px'
                        fontWeightBody='300'
                        letterSpacingBody='-0.5px'
                        lineHeightBody='28px'
                        textAlignBody='left'
                        fontSizeBodydownSm='14px'
                        headText='What’s gonna be your question?'
                        bodyText='Create custom landing pages with Omega that converts more visitors than any website.
                     With lots of unique blocks, you can easily build a page without any design or custom coding.
                     with Omega that converts more visitors than any website.'
                    />
                </Grid>
            </Grid>
            <div className={classes.contactSect}>
                <Typography className={classes.contactLabel}>Didn’t find your answer? </Typography>
                <Link className={classes.contactHere}>Contact us here</Link>
            </div>
        </div>
    );
}

export default FrequentQuesWrapper;