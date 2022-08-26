import React from 'react';



const Image = (props) => {
    const imageName = props.imageName;

    return (

        <div>
            <img src={imageName} alt={`${imageName}-logo`} />            
        </div>



    );
};

export default Image;