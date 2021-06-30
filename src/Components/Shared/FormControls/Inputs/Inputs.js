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
                height: props => props.fieldSetHeight,
                borderColor: '#EAE9F2',
                borderRadius: '10px',
                // width: 81px;
                color: '#9C9AAA',
                fontFamily: 'circular-std-book',
                fontSize: '18px',
                fontWeight: '300',
                letterSpacing: '-0.56px',
                lineHeight: '23px',
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
export default function Inputs({ children, ...props }) {
    const { mainInputs } = useStyles(props);
    const { autoComplete, name, placeholder, value, type, error = null, handleChange } = props;
    return (
        <TextField
            autoComplete={autoComplete}
            className={`${mainInputs}`}
            variant="outlined"
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            
            {...(error && { error: true, helperText: error })}
        >
            {children}
        </TextField>
    )
}