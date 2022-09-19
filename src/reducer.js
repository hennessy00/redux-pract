const initState = { counter: 1 };
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC':
            return { ...state, counter: state.counter + 1 };
        case 'DEC':
            return { ...state, counter: state.counter - 1 };
        case 'RND':
            return { ...state, counter: state.counter * action.payload };

        default:
            return state;
    }
};

export default reducer;
