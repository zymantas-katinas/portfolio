const colorNumberReducer = (state = 1, action) => {
    switch (action.type) {
        case "COLOR_SET":
            // const hueVal = 345
            // const hue = action.val + 80
            // const saturation = '60%'
            // const lightness = '50%'
            // const opacity = '0.3'

            const about = '#00daa738'
            const projects = '#3be6a638'
            const contact = '#3ba05a38'

            const currentColor = action.val === 1 ? about : action.val === 2 ? projects : action.val === 3 && contact

            return {
                // triangle: `hsl(${hue}, ${saturation}, ${lightness}, ${opacity})`,
                // bg: `hsl(${hue - 150}, 10%, 20%, 1)`,
                triangle: currentColor
            }
        default:
            return state
    }
}

export default colorNumberReducer
