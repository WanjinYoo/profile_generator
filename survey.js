const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (num,array) =>{
  if (num === 0) {
    rl.question('What\'s your name? Nicknames are also acceptable : ', (answer) => {
      array.push(answer);
      num++;
      return question(num,array);
    });
  } else if (num === 1) {
    rl.question('What\'s an activity you like doing? ', (answer) => {
      array.push(answer);
      num++;
      return question(num,array);
    });
  } else if (num === 2) {
    rl.question('What do you listen to while doing that? ', (answer) => {
      array.push(answer);
      num++;
      return question(num,array);
    });
  } else if (num === 3) {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
      array.push(answer);
      num++;
      return question(num,array);
    });
  } else if (num === 4) {
    rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
      array.push(answer);
      num++;
      return question(num,array);
    });
  } else if (num === 5) {
    rl.question('Which sport is your absolute favourite? ', (answer) => {
      array.push(answer);
      num++;
      return question(num,array);
    });
  } else if (num === 6) {
    rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
      array.push(answer);
      num++;
      rl.close();
      return question(num,array);
    });
  } else {
    console.log(`My name is ${array[0]}. I like doing  ${array[1]}. I listen to ${array[2]} while doing it
    . ${array[3]} is my favorite. ${array[4]} is my favorite thing to eat. ${array[5]} is my favorite sports.
    ${array[6]} is my superpower`);
  }
};
question(0,[]);