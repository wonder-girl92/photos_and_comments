import React from 'react';
import {Link} from "react-router-dom";

function Photo(props) {
    return (
        <div className="photo">
            <Link to={`/${props.photo.id}`}>
                <div onClick={() => props.setActive(true)}>
                    <img src={props.photo.url}/>
                </div>
            </Link>
        </div>
    );
}

export default Photo;