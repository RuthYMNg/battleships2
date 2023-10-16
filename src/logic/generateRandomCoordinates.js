const generateRandomCoordinates = (width, height) => {
    return [
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height)
    ];
}

export default generateRandomCoordinates;