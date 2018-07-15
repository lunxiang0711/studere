function logMessage(msg, { name: courseName, publisher: publisherName }) {
    console.log(msg + " " + courseName + " " + publisherName);
}

logMessage("I am learning ", { name: "Master ES6", publisher: "SkillBakery"});