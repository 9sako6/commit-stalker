var sum  = function(arr) {
    return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
};
