import React from 'react'
import { makeStyles, TextField } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    mainInputs: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        color: '#9C9AAA',
        fontFamily: 'circular-std-book',
        fontSize: '18px',
        fontWeight: '300',
        letterSpacing: '-0.56px',
        lineHeight: '23px',
        '& label.Mui-focused': {
            color: 'grey',
            fontFamily: 'circular-std-book',
            fontSize: '18px',
            fontWeight: '300',
            letterSpacing: '-0.56px',
            lineHeight: '23px',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#9C9AAA',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#EAE9F2',
                borderRadius: '10px',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#EAE9F2',
                borderRadius: '10px',
            },
        },

    }
}))
export default function Input({ children, ...props }) {
    const classes = useStyles();
    const { name, label, value, type, error = null, isAdornment, handleChange } = props;
    return (
        <TextField
            className={classes.mainInputs}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            InputProps={isAdornment}
            // InputProps={{
            //     endAdornment:
            //         <IconButton onClick={() => 0}>x</IconButton>,
            // }}
            {...(error && { error: true, helperText: error })}
        >
            {children}
        </TextField>
    )
}