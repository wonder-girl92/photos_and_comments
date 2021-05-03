import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import ReactLoading from 'react-loading';
import {addComment, loadModal} from "../redux/actions";


const Modal = ({active, setActive}) => {
    const params = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.modal.items);
    const loading = useSelector((state) => state.modal.loading);
    const comments = useSelector((state) => state.modal.comments)

    useEffect(() => {
        dispatch(loadModal(params.id));
    }, [params]);

    const [text, setText] = useState("");
    const [dataText, setDataText] = useState("");

    const handleClick = () => {
        dispatch(addComment(text));
        setText("");
        setDataText("");
    }

    return (
        <div className={active ? "modal active" : "modal"}
             onClick={() => setActive(false)}>

            <div className={active ? "modal_content active" : "modal_content"}
                 onClick={(e) => e.stopPropagation()}
            >
                {loading ? (
                    <div className="loading">
                        <ReactLoading type="spinningBubbles"
                                      color="blue"
                                      height={50}
                                      width={50}/>
                    </div>
                ) : (
                    <div className="content">
                        <div className="left_content">
                            <div className="big_image">
                                <img src={photos.url} alt="img"/>
                            </div>
                            <div className="form">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Ваше имя"
                                    value={dataText}
                                    onChange={(e) => setDataText(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Ваш комментарий"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />

                                <button className="button" onClick={handleClick}>
                                    Оставить комментарий {""}
                                </button>
                            </div>
                        </div>
                        <div className="right_content">
                            <div>
                                <div className="comm">
                                    {comments.map((item) => {
                                        return (
                                            <div>
                                                <div className="data"> {item.date} </div>
                                                <p> {item.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="button1">
                            <button onClick={() => setActive(false)}> ✖</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};

export default Modal;