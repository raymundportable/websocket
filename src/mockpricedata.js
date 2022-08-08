
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function getLatestBitcoinPrice() {
    await sleep(Math.floor(Math.random() * 1000));
    return 20000 + 10 * Math.floor(Math.random() * 1000) / 1000;
}

module.exports = {getLatestBitcoinPrice}