import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {
    const photos = useSelector((state) => state.photos.items);

    return (
        <div className="big_photos">
            {photos.map((photo) => {
                return (
                    <Photo key={photo.id}
                           photo={photo}
                           setActive={props.setActive}/>
                );
            })}
        </div>
    );
}

export default Photos;