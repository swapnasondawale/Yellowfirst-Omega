import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    gridContainer: {
        width:'100%',
        height:'100%',
        padding: '10px'
    },
    mainContent:{
        width:'100%',
        height: '100%',
        padding:'10px',
        display:'grid',
        gridTemplateColumns:'auto',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            height: '100%',
            padding:'10px',
            display:'block',
            gridTemplateColumns:'auto',
        },
        [theme.breakpoints.up('lg')]: {
            width:'100%',
            height:'100%',
            padding: '0px',
            display:'block',
            gridTemplateColumns:'auto',
        }
    },
    imgWrapper: {
        height: '69px',
        width: '100%',
        padding: '5px 0px',
        margin:'auto'
    },
    iconBtn:{
        width:'69px',
        height:'69px',
        margin:'auto'
    },
    contentWrapper:{
        height: 'auto',
        width: '100%',
        margin:'auto',
        padding: '5px 0px',
        textAlign: 'center',

    },
    headText: {
        padding:'5px 0px',
        color: '#19191B',
        fontFamily: 'circular-std-bold',
        fontSize: '24px',
        fontWeight: '500',
        letterSpacing: '-0.75px',
        lineHeight: '30px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',
        },
    },
    bodyText:{
        padding:'10px 0px',
        color: '#696871',
        fontFamily: 'circular-std-book',
        fontSize: '16px',
        fontWeight: '300',
        letterSpacing: '-0.5px',
        lineHeight: '28px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    }
}))
function FeatureSection(props) {
    const {gridContainer, mainContent, iconBtn, imgWrapper, contentWrapper, headText, bodyText} = useStyles();
    return (
        <Grid container className={`${gridContainer}`}>
            <div className={`${mainContent}`}>
                <div className={`${imgWrapper}`} >
                    <IconButton
                        disabled
                        className={`${iconBtn}`}
                    >
                        {props.imgIcon}
                    </IconButton>
                </div>
                <div className={`${contentWrapper}`} >
                    <Typography className={`${headText}`} >{props.headText}</Typography>
                    <Typography className={`${bodyText}`} >{props.bodyText}</Typography>
                </div>
            </div>
        </Grid>
    );
}

export default FeatureSection;