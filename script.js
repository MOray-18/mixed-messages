/*
1. Create a random three part message each time the program is run
2. Output will be funny fortune cookie messages
3. Part 1 - 
    Will be about an action in the present
4. Part 2 - 
    Will be about a tragic event in the future
5. Part 3 - 
    Will tell a way of avoiding the future event
6. Create a repository on GitHub
7. Messages will be stored in an object
8. The object will have 3 array properties coressponding to the three parts of the message
9. Select each part of the message at random using the random method of Math object
10. Length of each array will be the same
11. Entire message will be saved as a String literal
*/

// Object to store all the possible messages
const mixedMessage = {
  presentAction: [
    "A good way to keep healthy is to eat more Chinese food.",
    "Hard work pays off in the future. Laziness pays off now.",
    "If you eat something and no one sees you eat it, it has no calories.",
    "Never do anything halfway. If y......",
    "Enjoy yourself while you can.",
  ],
  futureEvent: [
    "You will marry a professional athlete - if competetive eating can be considered a sport.",
    "A new romance is in the future",
    "I see money in your future... It is not yours though.",
    "You laugh now, wait till you get home.",
    "Pigeon poop burns the retina for 13 hours. You will learn this the hard way.",
  ],
  futureAction: [
    "I cannot help you, for I am just a cookie.",
    "Ask not what your fortune cookie can do for you, but what you can do for your fortune cookie.",
    "If you think we are going to sum up your entire life in this little message you're crazy.",
    "Three can keep a secret, if you get rid of two",
    "Run",
  ],
};

// Function to generate a random index for one array
const randomIndexGenerator = () => Math.floor(Math.random() * 5);

// Function to return a part of the message on random
const randomMessagePart = (property) =>
  mixedMessage[property][randomIndexGenerator()];

// Function to join the three parts together
const completeMessage = () => {
  const part1 = randomMessagePart("presentAction");
  const part2 = randomMessagePart("futureEvent");
  const part3 = randomMessagePart("futureAction");
};
