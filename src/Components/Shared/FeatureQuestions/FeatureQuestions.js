import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    gridContainer: {
        width: '100%',
        height: '100%',
        padding: '10px',
    },
    mainContent: {
        width: '100%',
        height: '100%',
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            padding: '10px',
            display: 'block',
            gridTemplateColumns: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            height: '100%',
            padding: '0px',
            display: 'block',
            gridTemplateColumns: 'auto',
        }
    },
    contentWrapper: {
        height: 'auto',
        width: '100%',
        margin: 'auto',
        padding: '5px 0px',
        textAlign: 'center',

    },
    headText: {
        padding: props => props.paddingHead,
        color: props => props.colorHead,
        fontFamily: props => props.fontFamilyHead,
        fontSize: props => props.fontSizeHead,
        fontWeight: props => props.fontWeightHead,
        letterSpacing: props => props.letterSpacingHead,
        lineHeight: props => props.lineHeightHead,
        textAlign: props => props.textAlignHead,
        [theme.breakpoints.down('sm')]: {
            fontSize: props => props.fontSizeHeaddownSm,
        },
    },
    bodyText: {
        padding: props => props.paddingBody,
        color: props => props.colorBody,
        fontFamily: props => props.fontFamilyBody,
        fontSize: props => props.fontSizeBody,
        fontWeight: props => props.fontWeightBody,
        letterSpacing: props => props.letterSpacingBody,
        lineHeight: props => props.lineHeightBody,
        textAlign: props => props.textAlignBody,
        [theme.breakpoints.down('sm')]: {
            fontSize: props => props.fontSizeBodydownSm,
            padding: props => props.paddingBodydownSm, 
        },
    }
}))
function FeatureQuestions(props) {
    const { gridContainer, mainContent,contentWrapper, headText, bodyText } = useStyles(props);
    return (
        <Grid container className={`${gridContainer}`}>
            <div className={`${mainContent}`}>
                <div className={`${contentWrapper}`} >
                    <Typography className={`${headText}`} >{props.headText}</Typography>
                    <Typography className={`${bodyText}`} >{props.bodyText}</Typography>
                </div>
            </div>
        </Grid>
    );
}

export default FeatureQuestions;