import React from 'react';
import notfound from "../images/notfound.png"
import BackToHome from './BackToHome';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt='not found icon' width={745} height={320}/>
            <h2>Page Not Found</h2>
            <BackToHome />
        </div>
    );
};

export default NotFound;