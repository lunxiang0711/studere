var Repo = require('./design-pattern-module-repo.js')

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
}

module.exports = Task;

