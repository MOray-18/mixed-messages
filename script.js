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
  const keys = Object.keys(mixedMessage); // Collect all keys of the object
  keys.forEach((key) => {  // Iterate through the properties of the object
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
