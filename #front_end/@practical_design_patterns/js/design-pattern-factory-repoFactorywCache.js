var repoFactory = function () {
    
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo
            } else {
                // var taskRepo = require('./design-pattern-factory-taskRepository');
                this.taskRepo = require('./design-pattern-factory-taskRepository')();
                return this.taskRepo;
            }
        }
        if (repoType === 'user') {
            // var userRepo = require('./design-pattern-factory-userRepository');
            var userRepo = require('./design-pattern-factory-userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            // var projectRepo = require('./design-pattern-factory-projectRepository');
            var projectRepo = require('./design-pattern-factory-projectRepository')();
            return projectRepo;
        }
    }
};


module.exports = new repoFactory;