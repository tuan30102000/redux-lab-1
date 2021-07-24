

const initionState = {
    list: [{ hobby: 'canh rau' }],
    activeId: null
}

const hobbyReducer = (state = initionState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            return state
        }
        case 'SET_ACTIVE_HOBBY': {
            return state
        }
        default: {
            return state
        }
    }
}

export default hobbyReducer