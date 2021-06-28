import { MainHeader } from '../../Components/MainHeader/index'
import React from 'react';
import Footer from '../../Components/Footer/Footer';
const LayoutWrapper = (props) => {
    return (
        <div>
            <MainHeader />
            {props.children}
            <Footer />
        </div>
    );
};

export default LayoutWrapper;