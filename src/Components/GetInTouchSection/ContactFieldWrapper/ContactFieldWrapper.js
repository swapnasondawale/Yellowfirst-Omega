import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ContactField from '../ContactField/ContactField'
const useStyles = makeStyles((theme) => ({
    ContactFieldWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0px',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px',
            justifyContent: 'center',
        }
    }
}))
function ContactFieldWrapper(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.ContactFieldWrapper}>
            <Grid item>
                <ContactField
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
                    lineHeightBody='12px'
                    textAlignBody='left'
                    fontSizeBodydownSm='14px'


                    headText='Call us'
                    bodyTextOne='+1-492-4918-395'
                    bodyTextTwo='+14-394-409-591'
                />
            </Grid>
            <Grid item>
                <ContactField
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
                    lineHeightBody='12px'
                    textAlignBody='left'
                    fontSizeBodydownSm='14px'


                    headText='Email us'
                    bodyTextOne='info@mail.com'
                    bodyTextTwo='support@mail.com'
                />
            </Grid>
            <Grid item>
                <ContactField
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
                    lineHeightBody='12px'
                    textAlignBody='left'
                    fontSizeBodydownSm='14px'


                    headText='Visit us'
                    bodyTextOne='34 Madison Street,'
                    bodyTextTwo='NY, USA 10005'
                />
            </Grid>
        </Grid>
    );
}

export default ContactFieldWrapper;