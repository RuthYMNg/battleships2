const generateRandomCoordinates = (width, height) => {
    const newWidth = Math.floor(Math.random() * width)
    const newHeight = Math.floor(Math.random() * height)
    return [newWidth, newHeight];
}

export default generateRandomCoordinates;