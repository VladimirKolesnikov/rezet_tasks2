const takeNumbers = (tieredArr) => {
    const flatArr = makeFlat(tieredArr);
    return flatArr.filter((item) => typeof item === 'number');
}

const makeFlat = (arr) => {
    const result = arr.reduce((accum, item) => {
        if (item instanceof Array) {
            const innerArray = makeFlat(item);
            accum = [...accum, ...innerArray];
        } else {
            accum.push(item);
        }

        return accum;
    }, []);

    return result;
};

export default takeNumbers;