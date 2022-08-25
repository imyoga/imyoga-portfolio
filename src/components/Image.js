import React from 'react';



const Image = (props) => {
    const imageName = props.imageName;
    const imageLabel = props.imageLabel;

    return (

        <div>
            <img src={imageName} alt={`${imageName}-logo`} />
            <label>{imageLabel}</label>
        </div>



    );
};

export default Image;