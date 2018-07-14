function assignCourseES5(courseName, publishedBy) {
    courseName = courseName || "Master Javascript & jQuery";
    publishedBy = publishedBy || "SkillBakery";

    console.log(courseName);
    console.log(publishedBy);
}

assignCourseES5();


function assignCourseES6(courseName = "Master Javascript & jQuery", publishedBy = "SkillBakery"){
    console.log(courseName);
    console.log(publishedBy);
}

assignCourseES6();
