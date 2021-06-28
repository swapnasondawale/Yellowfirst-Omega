import { Grid } from '@material-ui/core';
import { Paper, Typography} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { CustomButton } from '../../Shared/CustomButton';
import useStyles from './styles'
function CardSection(props) {
    const classes = useStyles();
    const [isFocus, setFocus] = useState(false)
    useEffect(() => {
        const custElement = document.getElementById(props.cstCardId)
        if (custElement) {
            custElement.addEventListener('mouseenter',
                () => {
                    setFocus(true)
                    // console.log('mouseEnter')
                }
            )
            custElement.addEventListener('mouseleave',
                () => {
                    setFocus(false)
                    // console.log('mouseLeave')
                }
            )
        }
    }, [props.cstCardId])
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item xs={12} >
                <Paper elevation={4} className={classes.paperContainer} id={props.cstCardId}>
                    <div className={classes.planTitle}>
                        <Typography className={isFocus ? classes.firstLabelHover : classes.firstLabel}>
                            {props.firstLabel}
                        </Typography>
                    </div>
                    <div className={classes.planPrice}>
                        <Typography className={isFocus ? classes.priceHeadHover : classes.priceHead}>
                            {props.priceHead}
                        </Typography>
                    </div>
                    <div className={classes.providedServices}>
                        <Typography className={isFocus ? classes.servicesHover : classes.services}>{props.serviceOne}</Typography>
                        <Typography className={isFocus ? classes.servicesHover : classes.services}>{props.serviceTwo}</Typography>
                        <Typography className={isFocus ? classes.servicesHover : classes.services}>{props.serviceThree}</Typography>                        
                    </div>
                    <div className={classes.planStartedBtn}>
                        <CustomButton
                            color={isFocus ? '#FFFFFF' : '#5454D4'}
                            width='100%'
                            height='61px'
                            textAlign='center'
                            boxSizing='border-box'
                            border={isFocus ? '1px solid #C31A12' : "1px solid #EAE9F2"}
                            borderRadius='5px'
                            backgroundColor={isFocus ? '#F04037' : '#FFFFFF'}
                            bgHover='#F04037'
                            colorHover='#FFFFFF'
                        >
                            Get Started
                        </CustomButton>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default CardSection;