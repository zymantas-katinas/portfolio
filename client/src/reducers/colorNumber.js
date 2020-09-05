const colorNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case "COLOR_SET":
            // return action.val
            const colorPerPx = 345 / window.innerHeight
            const hue = action.val * colorPerPx
            const saturation = '60%'
            const lightness = '60%'
            const opacity = '0.3'

            // return `rgb(${colorVal}, ${255 - colorVal}, 0, 0.3)`
            return `hsl(${hue}, ${saturation}, ${lightness}, ${opacity})`
        default:
            return state
    }
}

export default colorNumberReducer
