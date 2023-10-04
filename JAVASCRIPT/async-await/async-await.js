console.log("Javascript async await...");

//Async await helps to easily write promises and work with promises

console.log("Person 1: Shows the ticket");
console.log("Person 2: Shows the ticket");



const preMovie = async () => {
  // async function
  const promiseFriendBringTics = new Promise((resolve, reject) => {
    setTimeout(() => {
      // function
      resolve("ticket"); // means got the ticket
    }, 300); // execuate after 3 second
  });
  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`)); //Create new Promise @getPopcorn
  const getButterOnPopcorn = new Promise((resolve, reject) =>
    resolve(`Butter On PopCorn`)
  ); //Create new Promise @getButterOnPopcorn

  let ticket =  promiseFriendBringTics; // waits to execuate @promiseFriendBringTics
  console.log(`Friend: Here is the ${ticket}`);
  console.log("we should go in !");
  console.log("friend: No am hungry !");

  let popcorn = await getPopcorn; // waits to execuate @ticket
  console.log(`I Have Get Some ${popcorn}`);
  console.log("Now! we should go in !");
  console.log("friend: No i need buttor on my popcorn !");

  let butter = await getButterOnPopcorn; // waits to execuate @popcorn
  console.log(`I Have Get Some ${butter}`);
  console.log("Now! we should go in !");

  return ticket;
};

// preMovie();
preMovie().then((ticket) => console.log("Gets : " + ticket));
console.log("Person 4: Shows the ticket");
console.log("Other Person's .... go's on");

//For error handling user try-catch inside preMovie() function code
