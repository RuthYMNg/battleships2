const generateRandomDirection = () => {
    let num = Math.random();
    return num < 0.25 ? "up" : num < 0.5 ? "right" : num < 0.75 ? "down" : "left"
}

export default generateRandomDirection;