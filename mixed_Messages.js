//This program generates random support messages based on a randomly generated feeling.

//feelings array
const feelings = ['worry', 'fear', 'feel down'];

//support object containing arrays of different support messages for each of the possible feelings
const support = {
    worry: ["You'll be fine", "You'll be OK", "It'll be OK"],
    fear: ["It won't hurt", "They won't hurt you", "I'll protect you", "I'll look after you"],
    feel_down: ["You're the best", "You're my hero", "You'll do better next time", "You tried your best"]
};

//comfort words array
const comfort = ["I love you", "I'm with you", "I'm thinking of you"];

//generating random feeling index and assigning to variable
const randFeelInd = Math.floor(Math.random()*3);

//function to generate conditional support message
const message = () => {
    if (randFeelInd == 0) {
        return support.worry[Math.floor(Math.random()*3)];
    } else if (randFeelInd == 1) {
        return support.fear[Math.floor(Math.random()*4)];        
    } else {
        return support.feel_down[Math.floor(Math.random()*4)]; 
    }
}

//printing support message
console.log(`Don't ${feelings[randFeelInd]}! ${message()}! ${comfort[Math.floor(Math.random()*3)]}!`);