import { Grid } from '@material-ui/core';
import React from 'react';
import CardSection from '../../CardSection/CardSection';
import useStyles from '../styles'
function YearCard() {
    const classes = useStyles();
    return (
        <Grid container className={classes.priceContainer}>
            <Grid container item className={classes.cardCont}>
                <CardSection
                    firstLabel='Starter'
                    priceHead='$12/yearly'
                    serviceOne='1 Website'
                    serviceTwo=' 5 GB Hosting'
                    serviceThree='LimitedSupport'
                    cstCardId='cstCardOne'
                />
            </Grid>
            <Grid container item className={classes.cardCont} >
                <CardSection
                    firstLabel='Premium'
                    priceHead='$29/yearly'
                    serviceOne='10 Website'
                    serviceTwo='15 GB Hosting'
                    serviceThree='Premium Support'
                    cstCardId='cstCardTwo'
                />
            </Grid>
            <Grid container item className={classes.cardCont}>
                <CardSection
                    firstLabel='Enterprise'
                    priceHead='$49/yearly'
                    serviceOne='Unlimited Website'
                    serviceTwo='50 GB Hosting'
                    serviceThree='Premium Support'
                    cstCardId='cstCardThree'
                />
            </Grid>
        </Grid >
    );
}

export default YearCard;


