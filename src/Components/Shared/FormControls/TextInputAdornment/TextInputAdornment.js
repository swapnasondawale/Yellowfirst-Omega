import React from 'react'
import { makeStyles, Input, } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    mainInputs: {
        width: '100%',
        height: '60px',
        // border: '1px solid blue',
        padding: '10px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        color: 'black',
        fontFamily: 'circular-std-book',
        fontSize: '18px',
        fontWeight: '300',
        letterSpacing: '-0.56px',
        lineHeight: '23px',
        '& input.Mui-focused': {
            color: 'green',
            fontFamily: 'circular-std-book',
            fontSize: '18px',
            fontWeight: '300',
            letterSpacing: '-0.56px',
            lineHeight: '23px',
        },
        '& .MuiInput-marginDense': {
            borderBottomColor: '#9C9AAA',
        }
    }
}))
export default function TextInputAdornment({ children, ...props }) {
    const classes = useStyles();
    const { autoComplete,variant, name, value, type, isAdornment, placeholder, error = null, handleChange } = props;
    return (
        <Input
            autoComplete={autoComplete}
            className={classes.mainInputs}
            variant={variant}
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            endAdornment={isAdornment}
            {...(error && { error: true, helperText: error })}
        >

        </Input>
    )
}