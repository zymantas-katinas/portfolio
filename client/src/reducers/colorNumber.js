const colorNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case "COLOR_SET":
            return action.val
        default:
            return state
    }
}

export default colorNumberReducer
