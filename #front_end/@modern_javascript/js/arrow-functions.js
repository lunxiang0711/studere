var helloWorld = function(name, greeting) {
    return name + " " + greeting;
}

console.log(helloWorld("SkillBakery", "Start Learning Today!"));

var newGreeting = (name, greeting) => {
    return name + " " + greeting;
}

console.log(newGreeting("SkillBakery", "Start Learning Today!"));

var shortGreeting = (name, greeting) => name + " " + greeting;

console.log(shortGreeting("SkillBakery", "Start Learning Today!"));


var defaultGreeting = greeting => "SkillBakery" + " " + greeting;

console.log(defaultGreeting("Start Learning Today!"));

var noParamGreeting = () => "SkillBakery Start Learning Today!"

console.log(noParamGreeting());


var courses = ["Master JavaScript and jQuery", "Master KnockoutJS"]

console.log( 
    courses.map(course => {
        return course.toUpperCase();
    })
)

console.log(
    courses.map(course => course.toUpperCase())
)


var numberArr = [2, 4, 6, 12, 10, 78];
var sortedArr = numberArr.sort( (a,b) => a < b? 1: -1)

console.log(sortedArr);

function Course() {

    this.name = "Master ES6";
    this.description = "The Next Level";
    this.author = "SkillBakery";
    this.getSummary = function () {
        return this.name + ", " + this.description;
    }

    this.getDetails = function () {
        window.setTimeout( () => {
            console.log( this.getSummary() + " " + this.author)
        }, 5000);
    }
}

var course = new Course();
course.getDetails();