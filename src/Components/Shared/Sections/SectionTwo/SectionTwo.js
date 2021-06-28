import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'
function SectionTwo(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainSec}>
            <Grid container className={classes.headLines}>
                <Grid item xs={6} className={classes.headOneContainer} >
                    <Typography className={classes.headOne}>{props.title}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.textLabelContainer}>
                    <Typography className={classes.textLabel}>
                        {props.content}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default SectionTwo;