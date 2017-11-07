function secificType(input) {
    return Object.prototype.toString.call(input).match(/\[object (.*)\]/)[1];
}
