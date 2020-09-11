

const colorPerPx = 345 / window.innerHeight

const getTriangleColor = (colorNumber) => {
    const hue = colorNumber * colorPerPx
    const saturation = '60%'
    const lightness = '60%'
    const opacity = '0.3'

    // return `rgb(${colorVal}, ${255 - colorVal}, 0, 0.3)`
    return `hsl(${hue}, ${saturation}, ${lightness}, ${opacity})`
}

export { getTriangleColor }