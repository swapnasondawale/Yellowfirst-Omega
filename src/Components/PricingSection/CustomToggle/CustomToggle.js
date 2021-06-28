import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Typography } from '@material-ui/core';
import useStyles from './styles'
function CustomToggle(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainToggle} >
            <ToggleButtonGroup
                className={classes.toggleGroup}
                exclusive
                value={props.selectedItem}
                onChange={props.handleChange}
            >
                <ToggleButton
                    value={props.btnOne}
                    className={props.selectedItem === props.btnOne ? classes.toggleSelected : classes.toggleButton}
                >
                    <Typography className={classes.btnLabel}  >{props.btnOne}</Typography>
                </ToggleButton>

                <ToggleButton
                    value={props.btnTwo}
                    className={props.selectedItem === props.btnTwo ? classes.toggleSelected : classes.toggleButton}
                >
                    <Typography className={classes.btnLabel}>{props.btnTwo}</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default CustomToggle;