var argumentsLength = function(...args) {
    let size = args.length;
    return size;
};
let array = (1,2,3,4);
console.log(argumentsLength(array));