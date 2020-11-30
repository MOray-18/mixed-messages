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
  adjective: [
    "embarrassed to the bone",
    "sinister",
    "pea-brained",
    "fear-inspiring",
    "unholy",
  ],
  noun: [
    "rough-skinned newt",
    "bat-shit crazy Amish folk",
    "brokenhearted druggie",
    "chauvinistic pup",
    "considerate louse",
  ],
  verb: [
    "wheedle",
    "blindside the old lady behind",
    "medicate",
    "trip",
    "swat",
  ],
};

// Function to generate a random index for one array
const randomIndexGenerator = () => Math.floor(Math.random() * 5);

// Function to return a part of the message on random
const randomMessagePart = (property) =>
  mixedMessage[property][randomIndexGenerator()];

// Function to join the three parts together
const completeMessage = () => {
  const finalMessage = [];
  const keys = Object.keys(mixedMessage);
  keys.forEach((key) => {
    switch (key) {
      case "adjective":
        finalMessage.push(`Beware a ${randomMessagePart(key)}`);
        break;
      case "noun":
        finalMessage.push(`${randomMessagePart(key)} on your evening stroll.`);
        break;
      case "verb":
        finalMessage.push(
          `You will have to ${randomMessagePart(
            key
          )} them to avoid a very pleasant tragedy!!!`
        );
        break;
      default:
        console.log("error");
    }
  });
  return finalMessage.join(" ");
};

console.log(completeMessage());
