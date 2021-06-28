import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainSectionWrapper: {
        width: '100%',
        height: '100%',
        padding: '0px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            padding: '0px 10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: '100%',
            padding: '0px 15px',
        },

    },
    titleHead: {
        padding: '40px 0px 0px 0px',
        margin: 'auto',
        color: '#19191B',
        fontFamily: "circular-std-bold",
        fontSize: '80px',
        fontWeight: 'bold',
        letterSpacing: '-2.5px',
        lineHeight: '84px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '30px 0px 0px 0px',
            fontSize: '30px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '32px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '40px 0px 0px 0px',
            fontSize: '60px',
            fontWeight: 'bold',
            letterSpacing: '-2.5px',
            lineHeight: '84px',
        },
    },
    contentText: {
        width: '100%',
        height: '100%',
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
    },

}))
function FirstSection(props) {
    const { mainSectionWrapper, titleHead, contentText } = useStyles(props);
    return (
        <Grid container className={`${mainSectionWrapper}`}>
            <Typography className={`${titleHead}`}>{props.title}</Typography>
            <Typography className={`${contentText}`}>{props.content}</Typography>
        </Grid>
    );
}

export default FirstSection;