
var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: true,
    // writable: false,
    enumerable: true,
    // enumerable: false,
    configurable: true
})

console.log(task.toString());

task.toString = function () {
    return "function changed";
}

console.log(task.toString());

console.log(Object.keys(task));