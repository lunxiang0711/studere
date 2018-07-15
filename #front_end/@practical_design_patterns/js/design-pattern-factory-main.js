var Task = require('./design-pattern-factory-task');
var repoFactory = require('./design-pattern-factory-repoFactorywCache');
// var repoFactory = require('./design-pattern-factory-repoFactory');
// var taskRepo = require('./design-pattern-factory-taskRepo');
// var userRepo = require('./design-pattern-factory-userRepo');
// var projectRepo = require('./design-pattern-factory-projectRepo');

var task1 = new Task(repoFactory.getRepo('task').get(1));
// var task1 = new Task(taskRepo.get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user1 = repoFactory.getRepo('user').get(1);
// var user1 = userRepo.get(1);
var project1 = repoFactory.getRepo('project').get(1);
// var project = projectRepo.get(1);

task1.user = user1;
task1.project = project1;

// console.log(task1);
task1.save();
