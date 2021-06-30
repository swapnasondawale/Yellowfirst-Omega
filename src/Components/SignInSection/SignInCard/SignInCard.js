import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import TransparentCard from '../../Shared/TransparentCard/TransparentCard';
import FormHead from '../../Shared/FormControls/FormHead/FormHead';
import useStyles from '../../SignUpSection/SignUpCard/styles';
import TextInputAdornment from '../../Shared/FormControls/TextInputAdornment/TextInputAdornment';
import StyledCheckbox from '../../Shared/FormControls/StyledCheckbox/StyledCheckbox';
import LabelAndLink from '../../Shared/FormControls/LabelAndLink/LabelAndLink';
import { CustomButton } from '../../Shared/CustomButton';
import { withRouter } from 'react-router';
function SignInCard(props) {
    const classes = useStyles();
    const [user, setUser] = useState({
        email: '', password: '', isChecked: false,
    });
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [isPassError, setIsError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);


    const validationEmail = () => {
        if (user.email === '') {
            setEmailError('Email is Required.')
            setIsEmailError(true)
            return false
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
            setEmailError('Invalid Email Address')
            setIsEmailError(true)
            return false
        } else {
            setEmailError('')
            setIsEmailError(false)
            return true
        }
    }
    const validationPass = () => {
        if (user.password === '') {
            setPassError('Password is Required.')
            setIsError(true)
            return false
        } else if (user.password.length < 8) {
            setPassError('Password must be more than 8 character')
            setIsError(true)
            return false
        }
        else {
            setPassError('')
            setIsError(false)
            return true
        }
    }
    const handleInputChange = (e) => {
        console.log('user', user);
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    const handleSubmit = () => {
        const emailValid = validationEmail();
        const passValid = validationPass();
        if (emailValid && passValid) {
            setUser({})
            props.history.push('/pricing')
        }
    }
    return (
        <TransparentCard >
            <FormHead
                fontSize='60px'
                headLabel='Sign In'
                headContent='Enter your account details below'
            />

            <div
                className={classes.mainCardContainer}
            >
                <TextInputAdornment
                    autoComplete='off'
                    type="text"
                    placeholder='Email Address'
                    name='email'
                    value={user.email}
                    handleChange={handleInputChange}
                // error={passError}
                />
                {isEmailError
                    ? <div
                        className={classes.errorContainer}
                    >{emailError}</div>
                    : null
                }
            </div>
            <div
                className={classes.mainCardContainer}
            >
                <TextInputAdornment
                    autoComplete='off'
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={user.password}
                    handleChange={handleInputChange}
                // error={passError}
                />
                {isPassError
                    ? <div
                        className={classes.errorContainer}
                    >{passError}</div>
                    : null
                }
            </div>
            <div
                className={classes.signInCheckbox}
            >
                <StyledCheckbox
                    name="isChecked"
                    label='keep me sign in'
                    value={user.isChecked}
                    onChange={handleInputChange}
                />
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
                    > Get Started</Typography>
                </CustomButton>

            </div>
            <div>
                <LabelAndLink
                    labelLink='Don’t have an account?'
                    handleClick={() => { props.history.push('/signin') }}
                    routeLink='Create for free'
                />
            </div>
        </TransparentCard>
    );
}

export default withRouter(SignInCard);