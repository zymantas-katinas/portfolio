const colorNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case "COLOR_SET":
            // return action.val
            const hueVal = 345
            const colorPerPx = hueVal / window.innerHeight
            const hue = action.val * colorPerPx + 700
            const saturation = '90%'
            const lightness = '60%'
            const opacity = '0.1'

            // return `rgb(${colorVal}, ${255 - colorVal}, 0, 0.3)`
            return {
                triangle: `hsl(${hue}, ${saturation}, ${lightness}, ${opacity})`,
                bg: `hsl(${hue - 150}, 10%, 20%, 1)`
            }
        default:
            return state
    }
}

export default colorNumberReducer
