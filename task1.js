const decryptStr = (str) => {
    const oddIndexItems = str.split('').filter((item, index) => isOdd(index));
    const evenIndexItems = str.split('').filter((item, index) => !isOdd(index));
    
    return [...oddIndexItems, ...evenIndexItems].join('');
};

const encryptStr = (str) => {
    const midOfStr = Math.ceil(str.length / 2);
    const strHalfLeft = str.slice(0, midOfStr);
    const strHalfRight = str.slice(midOfStr, str.length);

    return itemsAlternateArraysMerge(strHalfLeft.split(''), strHalfRight.split('')).join('');
};

const itemsAlternateArraysMerge = (forOdd, forEven) => {
    const result = [];
    for (let index = 0; (forOdd.length + forEven.length) > 0; index += 1) {
        result.push(isOdd(index) ? forOdd.shift() : forEven.shift());
    };

    return result;
};

const isOdd = (num) => num % 2 === 0 ? true : false;

export { decryptStr, encryptStr };