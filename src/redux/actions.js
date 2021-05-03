export const loadPhotos = () => {
    return (dispatch) => {
        dispatch({
            type: 'photos/load/start'
        });

        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'photos/load/success',
                    payload: json
                })
            })
    }
}

export const loadModal = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'modal/load/start'
        });

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'modal/load/success',
                    payload: json

                })
            })
    }
}

export const addComment = (text) => {
    return {
        type: 'modal/addComment',
        payload: text
    }
}