const initialState = {
    items: [],
    comments: [],
    loading: false
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'modal/load/start':
            return {
                ...state,
                loading: true
            };

        case 'modal/load/success':
            return {
                ...state,
                items: action.payload,
                comments: action.payload.comments,
                loading: false
            };

        case 'modal/addComment':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {text: action.payload}
                ]
            }

        default:
            return state;
    }
};

export default modal;

