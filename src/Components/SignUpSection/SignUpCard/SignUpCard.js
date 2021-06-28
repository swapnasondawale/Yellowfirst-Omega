import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import FormHead from '../../Shared/FormControls/FormHead/FormHead'
import TransparentCard from '../../Shared/TransparentCard/TransparentCard'
import TextInputAdornment from '../../Shared/FormControls/TextInputAdornment/TextInputAdornment'
import StyledCheckbox from '../../Shared/FormControls/StyledCheckbox/StyledCheckbox'
import LabelAndLink from '../../Shared/FormControls/LabelAndLink/LabelAndLink'
import { CustomButton } from '../../Shared/CustomButton/index'
import useStyles from './styles'
import { withRouter } from 'react-router';
function SignUpCard(props) {
    const classes = useStyles();
    const [user, setUser] = useState({
        email: '', company: '', password: '', isChecked: false,
    });
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [checkedError, setCheckedError] = useState('');
    const [isCheckedError, setIsCheckedError] = useState('');
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
    const validationPassword = () => {
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
    const validationChecked = () => {
        if (!user.isChecked) {
            setCheckedError('Please accept terms and conditions.')
            setIsCheckedError(true)
            return false
        }
        else {
            setIsCheckedError('')
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
        const passValid = validationPassword();
        const checkedboxValid = validationChecked();
        if (emailValid && passValid && checkedboxValid) {
            setUser({})
            props.history.push('/landingpage')
        }
    }
    return (
        <TransparentCard >
            <FormHead
                fontSize='60px'
                headLabel='Sign Up'
                headContent='No credit card required'
            />

            <div
                // style={{ border: '1px solid red', height: '80px' }}
                className={classes.mainCardContainer}
            >
                <TextInputAdornment
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
            // style={{ border: '1px solid red', height: '80px' }}
            >
                <TextInputAdornment
                    type="text"
                    placeholder='Company Name'
                    name='company'
                    value={user.company}
                    handleChange={handleInputChange}
                // error={passError}
                />
            </div>
            <div
                className={classes.mainCardContainer}
            // style={{ border: '1px solid red', height: '80px' }}
            >
                <TextInputAdornment
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
                className={classes.mainstyleCheckbox}
            >
                <StyledCheckbox
                    name="isChecked"
                    label={<LabelAndLink
                        labelLink='I agree to the'
                        handleClick={() => { props.history.push('/termsandcondition') }}
                        routeLink='Terms & Conditions'
                    />}
                    value={user.isChecked}
                    onChange={handleInputChange}
                />
                {isCheckedError
                    ? <div
                        className={classes.errorContainer}
                    >{checkedError}</div>
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
                    > Get Started</Typography>
                </CustomButton>

            </div>
            <div>
                <LabelAndLink
                    labelLink='Already have an account?'
                    handleClick={() => { props.history.push('/signin') }}
                    routeLink='Sign in'
                />
            </div>
        </TransparentCard>
    );
}

export default withRouter(SignUpCard);