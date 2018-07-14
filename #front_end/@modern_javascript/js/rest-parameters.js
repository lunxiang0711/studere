
function restParametersES6(firstName, lastName, ...details) {
    console.log(firstName + " " + lastName);
    console.log(details);
    for ( item in details ) {
        console.log( details[item] );
    }
}

restParametersES6("SkillBakery", "Studio", "http://skillbakery.com", "http://udemy.com/u/skillbakery");

