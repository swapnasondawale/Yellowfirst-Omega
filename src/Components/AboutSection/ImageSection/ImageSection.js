import { Grid } from '@material-ui/core';
import React from 'react';
import rectangle from '../../../Assets/Images/About/Rectangle.png'
import rectangleCopy from '../../../Assets/Images/About/RectangleCopy.png'
import useStyles from './styles'
function ImageSection(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainImageSect}>
            <Grid container className={classes.mainSecOne}>
                <Grid item xs={4} className={classes.imgContainer1}>
                    <img src={rectangle} alt='BG' className={classes.rectangle} />
                </Grid>
                <Grid item xs={8} className={classes.imgContainer2}>
                    <img src={rectangleCopy} alt='BG' className={classes.rectangleCopy} />
                </Grid>
            </Grid>
        </div>
    );
}

export default ImageSection;