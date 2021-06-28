import { makeStyles } from '@material-ui/core';
import JobReqBG from '../../../Assets/Images/About/JobRequirement/JobReqBG.png'

const useStyles = makeStyles((theme) => ({
    mainJobReq: {
        width: '100%',
        height: '100%',
        padding: '60px 0px',
        backgroundImage: `url(${JobReqBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    imgWrapper: {
        margin: '0px'
    },
    imgBg: {
        width: '100vw',
    },
    jobReqContainer: {
        width: '100%',
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
    },
    headContent: {
        color: '#ffffff',
    },
    btnContent: {

    },
    btnLabel: {
        height: '27px',
        width: '201px',
        color: '#FFFFFF',
        fontFamily: 'circular-std-medium',
        fontSize: '21px',
        fontWeight: '500',
        letterSpacing: '-0.66px',
        lineHeight: '27px',
        textTransform: 'capitalize'
    }
}))
export default useStyles;