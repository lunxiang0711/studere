var project = function () {
    
    var db = {};

    var get = function(id) {
        console.log('Getting project ' + id);
        return {
            name: 'new project from db'
        }
    }

    return {
        get: get
        // get: function(id){
        //     console.log('Getting task ' + id);
        //     return {
        //         name: 'new task from db'
        //     }
        // },
    }
}

// module.exports = project();
module.exports = project;
