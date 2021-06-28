import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomToggle from '../CustomToggle/CustomToggle';
import useStyles from './styles'
import MonthCard from '../PricingCard/MonthCard/MonthCard';
import YearCard from '../PricingCard/YearCard/YearCard';
import { useState } from 'react';

function ContentSwitch(props) {
    const classes = useStyles();
    const [selectedDuration, setSelectedDuration] = useState('Yearly')
    const handleChange = (e, value) => {
        if (value) {
            setSelectedDuration(value);
        }
    }
    return (
        <div className={classes.mainContent}>
            <Grid container className={classes.containerOne}>
                <Grid item xs={6} className={classes.sectCon}>
                    <Typography className={classes.headText}>Get the right plan for future product.</Typography>
                </Grid>
                <Grid align='right' item xs={6} className={classes.toggleSection}>
                    <CustomToggle
                        handleChange={handleChange}
                        selectedItem={selectedDuration}
                        btnOne='Yearly'
                        btnTwo='Monthly'
                    />
                </Grid>
            </Grid>
            <div className={classes.cardContainer}>
                {selectedDuration === 'Monthly' ? <MonthCard /> : <YearCard />}
            </div>
        </div>
    );
}

export default ContentSwitch;