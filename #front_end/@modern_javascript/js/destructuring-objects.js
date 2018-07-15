"use strict";

var course = {
    name: "Master Javascript & jQuery",
    publisher: "SkillBakery"
};

function courseDetails(c) {
    // let { name, publisher, price } = c;
    let { name, publisher } = c;
    console.log( name + " " + publisher );
}

courseDetails(course);
