const takeNumbers = (tieredArr) => {
    const flatArr = makeFlat(tieredArr);
    return flatArr.filter((item) => typeof item === 'number');
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