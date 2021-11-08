const takeNumbers = (tieredArr) => {
    const flatArr = makeFlat(tieredArr);
    return flatArr.filter(Number.isInteger);
}

const makeFlat = (arr) => {
    let accum = [];
    arr.forEach((item) => {
        if (item instanceof Array) {
            accum = [...accum, ...makeFlat(item)];
        } else {
            accum.push(item);
        }
    });

    return accum;
};

export default takeNumbers;