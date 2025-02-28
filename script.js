var age = 25;
function greet(name) {
    return "Hello ".concat(name, "!");
}
var numbers = [1, 2, 3, 4, 5];
function fetchData(callback) {
    setTimeout(function () { return callback("Data received"); }, 1000);
}
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value.toFixed(2);
    }
    return value;
}
