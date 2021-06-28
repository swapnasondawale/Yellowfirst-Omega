import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { CustomButton } from '../../Shared/CustomButton';
import FormHead from '../../Shared/FormControls/FormHead/FormHead';
import LabelAndLink from '../../Shared/FormControls/LabelAndLink/LabelAndLink';
import TransparentCard from '../../Shared/TransparentCard/TransparentCard';
import TextInputAdornment from '../../Shared/FormControls/TextInputAdornment/TextInputAdornment';
import useStyles from '../../SignUpSection/SignUpCard/styles'
function ForgetCard(props) {
    const classes = useStyles()
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isError, setIsError] = useState('false');
    const handleInputChange = (event) => {
        setEmail(event.target.value);
        setIsError(false)
    }
    const handleValidate = () => {
        if (email === '') {
            setEmailError('Required')
            setIsError(true)
            return false
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setEmailError('Invalid Email Address')
            setIsError(true)
            return false
        } else {
            setEmailError('')
            setIsError(false)
            return true
        }
    }
    const handleSubmit = () => {
        const isValid = handleValidate();
        if (isValid) {
            setEmail('')
            props.history.push('/landing')
        }
    }
    return (
        <TransparentCard>
            <FormHead
                fontSize='54px'
                headLabel='Forgot Password?'
                headContent='Enter your details to recieve a reset link'
            />

            <div
                className={classes.mainCardContainer}
            >
                <TextInputAdornment
                    type="text"
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    handleChange={handleInputChange}
                // error={passError}
                />
                {isError
                    ? <div
                        className={classes.errorContainer}
                    >{emailError}</div>
                    : null
                }
            </div>
            <div
                className={classes.btnWrapper}>
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
                    > Send Reset Link</Typography>
                </CustomButton>

            </div>
            <div>
                <LabelAndLink
                    labelLink='Remember Password?'
                    handleClick={() => { props.history.push('/signin') }}
                    routeLink='Sign in'
                />
            </div>
        </TransparentCard>
    );
}

export default withRouter(ForgetCard);