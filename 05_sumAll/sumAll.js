function sumAll(min, max) {
    let maxi = Math.max(min, max);
    let mini = Math.min(min, max);
    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (typeof min === "string" || typeof max === "string") {
        return "ERROR";
    }

    if (Array.isArray(min) || Array.isArray(max)) {
        return "ERROR";
    }

    return ((maxi-mini)+1) * (mini + maxi) / 2;
    
}


// Do not edit below this line
module.exports = sumAll;
