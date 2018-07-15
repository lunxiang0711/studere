
var Task = function() {
    this.name = name;
    this.completed = false;
}

// var Task = function(data) {
//     this.name = data.name;
//     this.completed = false;
// }

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    repo.save(this);
}

module.exports = Task;

