import React, { useState } from 'react'
 
function ImageInput ({imageUrl, setImageUrl}) {

    const [fileInputState, setfileInputState] = useState('');
    const hanldleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    function previewFile (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        }
    }

    return (
        <>
        <input 
        type='file' 
        name='image' 
        onChange={hanldleFileInputChange}
        value={fileInputState}></input>
        {imageUrl && (
            <img src={imageUrl} alt='chosen' style={{height: '300px'}}/>
        )}
        </>
    )
}

export default ImageInput;