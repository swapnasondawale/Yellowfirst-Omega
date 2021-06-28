import { makeStyles } from '@material-ui/core';
import React from 'react';
import FeatureQuestions from '../../Shared/FeatureQuestions/FeatureQuestions';
import SecuritySection from '../SecuritySection/SecuritySection'
import EmbeddedContent from '../EmbeddedContent/EmbeddedContent'
import FirstSection from '../FirstSection/FirstSection';
const useStyles = makeStyles((theme) => ({
    mainTermsWrapper: {
        padding: '60px 100px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10px',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '60px 0px',
        },
    },
    pageTitle: {
        padding: '0px 100px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px',
            margin: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0px 100px',
        },
    },
    bodyText: {
        padding: '0px 100px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px',
            margin: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '0px 100px',
        },
    },

}))
function TermsWrapper() {
    const classes = useStyles();
    return (
        <div className={classes.mainTermsWrapper}>
            <div className={classes.pageTitle}>
                <FirstSection
                    paddingBody='30px 0px'
                    colorBody='#696871'
                    fontFamilyBody='circular-std-book'
                    fontSizeBody='16px'
                    fontWeightBody='300'
                    letterSpacingBody='-0.5px'
                    lineHeightBody='28px'
                    textAlignBody='left'
                    fontSizeBodydownSm='14px'
                    paddingBodydownSm='20px 0px'
                    title='Terms & Conditions'
                    content='By accessing and placing an order with UXTheme, you confirm that you are in agreement with and bound by 
                    the terms and conditions contained in the Terms Of Use outlined below. These terms apply to the entire 
                    website and any email or other type of communication between you and UXTheme. Under no circumstances 
                    shall UXTheme team be liable for any direct, indirect, special, incidental or consequential damages, 
                    including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials 
                    on this site, even if UXTheme team or an authorized representative has been advised of the possibility of such 
                    damages. If your use of materials from this site results in the need for servicing, repair or correction of 
                    equipment or data, you assume any costs thereof. UXTheme will not be responsible for any outcome that 
                    may occur during the course of usage of our resources.We reserve the rights to change prices and revise the 
                    resources usage policy in any moment.'/>
            </div>
            <div className={classes.bodyText}>
                <FeatureQuestions
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
                    className={classes.featureQues}
                    headText='License'
                    bodyText='By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for 
                    specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by 
                    the following licensing terms.'
                />
                <SecuritySection
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
                    className={classes.featureQues}
                    headText='Security'
                    bodyText='You have rights for royalty free use of our resources for any or all of your personal and commercial projects.'
                    bodyTextTwo='You are not required to attribute or link to UXTheme in any of projects.'
                    bodyTextThree='We reserve the rights to change prices and revise the resources usage policy in any moment.'
                />
                <EmbeddedContent
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
                    className={classes.featureQues}
                    headText='Embedded content from other websites'
                    bodyText='Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
                    Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.'
                    bodyTextTwo='These websites may collect data about you, use cookies, embed additional third-party tracking, 
                    and monitor your interaction with that embedded content, including tracking your interaction with the embedded 
                    content if you have an account and are logged in to that website.'
                />
                <FeatureQuestions
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
                    className={classes.featureQues}
                    headText='Changes about terms'
                    bodyText='If we change our terms of use we will post those changes on this page. Registered users will be sent an email 
                    that outlines changes made to the terms of use.'
                />
            </div>

        </div>
    );
}

export default TermsWrapper;