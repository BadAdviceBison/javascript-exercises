const sumAll = function(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) { //Could have used (typeof a !== 'number' || typeof b !== 'number') but would then have to check for NaN. This way confirms that the result is not NaN and that it's of the number type.
        return "ERROR"
    } 
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    let sumTotal = 0;
    for (let i = a; i <= b; i++) {
        sumTotal += i
    }
return sumTotal

};

// Do not edit below this line
module.exports = sumAll;
