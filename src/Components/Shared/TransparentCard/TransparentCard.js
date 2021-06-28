import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    paperContent: {
        width: '30%',
        height: 'auto',
        margin: 'auto',
        borderRadius: '10px',
        backgroundColor: 'rgba(0,0,0,0.44)',
        boxShadow: '0 52px 54px 0 rgba(65,62,101,0.25)',
        padding: '20px 40px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: 'auto',
            margin: 'auto',
            borderRadius: '10px',
            backgroundColor: 'rgba(0,0,0,0.44)',
            boxShadow: '0 52px 54px 0 rgba(65,62,101,0.25)',
            padding: '20px 10px',
        }
        // position: 'absolute',
        // right: '0',
        // margin: '20px',
        // maxWidth: '400px',
        // padding: '16px',
        // backgroundColor: 'white',
    },
}))

const TransparentCard = ({ children, ...props }) => {
    const { paperContent } = useStyles(props);
    return (
        <Paper className={`${paperContent}`}>
            {children}
        </Paper>
    );
};

export default TransparentCard;