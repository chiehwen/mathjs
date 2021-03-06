/**
 * Get the imaginary part of a complex number.
 * @param {Number | Complex | Array | Matrix | Range} x
 * @return {Number | Array | Matrix} im
 */
math.im = function im(x) {
    if (arguments.length != 1) {
        throw newArgumentsError('im', arguments.length, 1);
    }

    if (isNumber(x)) {
        return 0;
    }

    if (x instanceof Complex) {
        return x.im;
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range) {
        return util.map(x, math.im);
    }

    if (x.valueOf() !== x) {
        // fallback on the objects primitive value
        return math.im(x.valueOf());
    }

    // TODO: return 0 for all non-complex values?
    throw newUnsupportedTypeError('im', x);
};
