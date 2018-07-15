var user = function () {
    
    var db = {};

    var get = function(id) {
        console.log('Getting user ' + id);
        return {
            name: 'new user from db'
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

// module.exports = user();
module.exports = user;
