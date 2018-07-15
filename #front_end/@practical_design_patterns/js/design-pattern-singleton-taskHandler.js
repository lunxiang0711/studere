
var repo = require('./design-pattern-singleton-repo');

// var myRepo = repo();
var myRepo = repo;

var taskHandler = function () {
    return {
        save: function () {
            myRepo.save('Hi from taskHandler');
        }
    }
}

module.exports = taskHandler();

