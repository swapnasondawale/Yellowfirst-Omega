import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainDiv: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    SectionOne: {
        padding: '60px 0px',
        background: 'linear-gradient(147.31deg, rgba(141,141,236,0.17) 0%, rgba(84,84,212,0) 100%)',
        
    },
    contactSectionTwo:{
        width: 'auto',
        height: '100%',
        padding: '60px 100px',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: '100%',
            display: 'grid',
            padding: '10px 10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 'auto',
            height: '100%',
            display: 'flex',
            padding: '10px 100px',
        },
    }
}))
export default useStyles;