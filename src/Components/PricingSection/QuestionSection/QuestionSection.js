import { makeStyles} from '@material-ui/core';
import React from 'react';
import FrequentQuesWrapper from '../FrequentQuesWrapper/FrequentQuesWrapper';
import SectionFour from '../../Shared/Sections/SectionFour/SectionFour';
const useStyles = makeStyles(() => ({
    mainFeaturePricing: {
        width: '100%',
        height: '100%',
        padding: '60px 0px',
        backgroundColor: '#F7F7FB',
    },
    
}))
function QuestionSection(props) {
    const classes = useStyles();
    return (

        <div className={classes.mainFeaturePricing}>
            <div>
                <SectionFour
                    title='Frequently Asked Question'
                    content='Create custom landing pages with Omega that converts.'
                />
            </div>
            <div>
                <FrequentQuesWrapper />
            </div>
           
        </div >
    );
}

export default QuestionSection;