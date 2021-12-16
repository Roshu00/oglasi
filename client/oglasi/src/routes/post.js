import React from 'react';
import { useParams } from 'react-router';

//components
import ViewPost from '../components/ViewPost/ViewPost';

function Post () {

    const { id } = useParams()

    return (
        <>
        <ViewPost id={ id }/>
        </>
    )
}

export default Post