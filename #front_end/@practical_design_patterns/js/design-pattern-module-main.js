var Task = require('./design-pattern-module-task.js')
var Repo = require('./design-pattern-module-repo.js')

var task1 = new Task(Repo.get(1));
task1.complete();

var task2 = new Task({name: 'create a demo for modules'});
var task3 = new Task({name: 'create a demo for singletones'});
var task4 = new Task({name: 'create a demo for prototypes'});

task2.save();
task3.complete();
task4.save();