import React, {useState} from 'react';
import Photos from "./Photos";
import {Route} from "react-router-dom"
import Modal from "./Modal";

function Main(props) {
    const [modalActive, setModalActive] = useState(false);

    return (
        <main>
            <Photos setActive={setModalActive}/>
            <Route exact path="/:id?">
                <Modal active={modalActive} setActive={setModalActive}/>
            </Route>
        </main>
    )
};

export default Main;