const randomID = id => {
    return (Math.floor(Math.random() * id) + 1);
}

module.exports = randomID;