function* logMessages() {
    yield "Learning ES6";
    yield "SkillBakery";
    yield "Udemy";
}

let msg = logMessages();
// for (let word of msg) console.log(word);

console.log(msg);

console.log(msg.next().value);
console.log(msg.next().value);
console.log(msg.next().value);