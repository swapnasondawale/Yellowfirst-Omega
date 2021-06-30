import { Typography } from '@material-ui/core';
import { Grid, makeStyles, } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import { CustomButton } from '../../Shared/CustomButton';
import Inputs from '../../Shared/FormControls/Inputs/Inputs';
const useStyles = makeStyles((theme) => ({
    mainContactForm: {
        width: '100%',
        height: '100%',
        padding: '30px 100px',
        display: 'grid',
        gridGap: '25px',
        // border: '1px solid blue',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            display: 'grid',
            padding: '0px 10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: '100%',
            padding: '10px 100px',
        },
    },
    feedbackForm: {
        height: 'auto',
        // border: '1px solid blue',
        display: 'grid',
        gridGap: '25px'
    },
    inputContainer: {
        width: '100%',
        // border: '1px solid yellow',
        // height: '73px'
    },
    inputMessage: {
        height: '150px'
    },

    btnContainer: {
        height: '60px'
    },
    btnLabel: {
        margin: 'auto',
        padding: '10px 0px',
        color: '#FFFFFF',
        fontFamily: 'circular-std-medium',
        fontSize: '21px',
        fontWeight: '500',
        letterSpacing: '-0.66px',
        lineHeight: '27px',
        textTransform: 'capitalize'
    },
    contactField: {
        display: 'flex',
        flexDirection: 'column',
    }
}))
function ContactForm(props) {
    const classes = useStyles();

    const [user, setUser] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const handleInputChange = (e) => {
        console.log('user', user);
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        if (user) {
            const { name, value } = e.target;
            setUser({
                ...user,
                [name]: value
            })
            alert('Message Sent')           
            // props.history.push('/about')
        }
    }
    return (
        <Grid container className={classes.mainContactForm}>
            <Grid item className={classes.inputContainer}>
                <Inputs
                    autoComplete='off'
                    fieldSetHeight='71px'
                    type="text"
                    placeholder='Your name'
                    name='name'
                    value={user.name}
                    handleChange={handleInputChange}
                />
            </Grid>
            <Grid item className={classes.inputContainer}>
                <Inputs
                    autoComplete='off'
                    fieldSetHeight='71px'
                    type="text"
                    placeholder='Email address'
                    name='email'
                    value={user.email}
                    handleChange={handleInputChange}
                />
            </Grid>
            <Grid item className={classes.inputContainer}>
                <Inputs
                    autoComplete='off'
                    fieldSetHeight='71px'
                    type="text"
                    placeholder='Subject'
                    name='subject'
                    value={user.subject}
                    handleChange={handleInputChange}
                />
            </Grid>
            <Grid item className={classes.inputMessage}>
                <Inputs
                    autoComplete='off'
                    fieldSetHeight='150px'
                    type="text"
                    placeholder='Write your message'
                    name='message'
                    value={user.message}
                    handleChange={handleInputChange}
                />
            </Grid>
            <Grid item className={classes.btnContainer}>
                <CustomButton
                    // disabled={!checked}
                    height='100%'
                    width='100%'
                    color='#FFFFFF'
                    textAlign='center'
                    boxSizing='border-box'
                    border='1px solid #C31A12'
                    borderRadius='10px'
                    backgroundColor='#F04037'
                    bgHover='#F04037'
                    type="submit"
                    click={handleSubmit}
                >
                    <Typography
                        className={classes.btnLabel}
                    > Send Message</Typography>
                </CustomButton>
            </Grid>
        </Grid>
    );
}

export default withRouter(ContactForm);