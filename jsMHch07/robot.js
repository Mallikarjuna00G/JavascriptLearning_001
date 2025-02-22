console.group("Project: Robot");
console.log("MEADOWFIELD");
console.log("The village of Meadowfield isn't very big.")
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];
console.log(`It consists of 11 places with 14 roads between them.`);
console.table(roads);
console.log("The network of roads in the village forms a graph.")
console.log("--> A graph is a collection of points (places in the village) with lines between them (roads).");
console.log("This graph will be the world that our robot moves through.");
console.log();
console.log("The array of strings is not very easy to work with.");
console.log("What we are interested in is the destinations that we can reach from a given place.");
console.log("In other words, to know that a point (source) is connected with how many other points (destinations).");
console.log();
console.log("Right now, the data that we have is a list of roads. Let us convert that to a data structure that tells us,");
console.log("--> from each place,");
console.log("--> what other places can be reached.");

/**
 * here edge represents road (like a line connecting two vertices in a graph)
 */
function buildGraph(edges) {
  console.group("function::buildGraph");
  // Variable to store the data structure {from: [to, to, to]}
  const graph = Object.create(null);

  function addEdge(from, to) {
    if (from in graph) {
      // if source is already available in the data structure
      // add a destination to it.
      graph[from].push(to);
    } else {
      // add both source and destination.
      graph[from] = [to];
    }
  }
  // recurse through roads data to see all the places to extract 
  // data as source and destinations.
  for (let [from, to] of edges.map(road => road.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  console.groupEnd();
  return graph;
}

const roadGraph = buildGraph(roads);
console.log();
console.log("Finally, we have the data structure 'roadGraph'.");
console.table(roadGraph);
console.log("To display it in other (normal object) format:");
console.log(roadGraph);
console.log("Given an array of edges, buildGraph creates a 'map' object that,");
console.log("--> for each node,");
console.log("--> stores an array of connected nodes.");
console.log("It uses the 'split' method to go");
console.log("--> from the road strings -- which have the form 'Start-End'");
console.log("--> to two-element arrays containing the start and end as separate strings");

console.log();
console.log("THE TASK");
console.log("Our robot will be moving around the village.");
console.log("There are parcels in various places, each addressed to some other place.");
console.log("The robot picks up parcels when it comes across them and delivers them when it arrives at their destinations.");
console.log();
console.log("The automation must decide, at each point, where to go next.\nIt has finished its task when all parcels have been delivered.\n");
console.log("To be able to simulate this process, we must define a virtual world that can describe it.\n--> This model tells us where the robot is and where the parcels are.\n--> When the robot has decided to move somehere, we need to update the model to reflect the new situation.\n");
console.log("If you are thinking in terms of object-oriented programming, your first impulse might be to start defining objects for the various elements in the world: \n--> a class for the robot, \n--> one for the parcel, \n--> may be one for the places. \nThese could then hold properties that describe their current state, such as \n--> the pile of parcels at a location, which we could change when updating the world.\n");
console.log("This is wrong. At least, it usually is. \nThe fact that something sounds like an object does not automatically mean that it should be an object in your program. \nReflexively writing classes for every concept in your application tends to leave you with a collecion of interconnected objects that each have their own internal, changing state. \nSuch programs are often hard to understand and thus easy to break.\n");
console.log("Instead, let's condense the village's state down to the minimal set of values that define it.\n--> There's the robot's current location\n--> and the collection of undelivered parcels, each of which has a current location and a destination address.\nThat's it.\n");
console.log("While we are at it, let's make it so that we don't change this state when the robot moves but rather compute a new state for the situation after the move.\n");

class VillageState {
  constructor(place, parcels) {
    this.place = place; // place of the robot
    this.parcels = parcels;  // collection of undelivered parcels (each item will hold the current location and destination address of the parcel.)
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      /**
       * if no road available to the destination
       * from the current place of the robot, 
       * then return the current village state.
       */
      return this;
    } else {
      /**
       * It was a bit tough for me to understand this.
       * We go through each parcel.
       * if the pick up place of the parcel is not same as the robot's current place, we will keep the parcel details untouched.
       * Otherwise, change the pickup place of the parcel to the destination place of the robot. This change we will actually use it later.
       * After obtaining the complete list of parcels, we will remove (filter) the parcels whose pickup and drop addresses are same. After this, what happens is that necessary parcels are dropped/delivered at the destination location of the robot. And also for the remaining parcels, the pickup address were changed to destincation address of the robot; which will help in the next call of the 'move' method.
       */
      let parcels = this.parcels.map(p => {
        // console.log(p);
        if (p.place != this.place) {
          return p;
        }
        return { place: destination, address: p.address };
      }).filter(p => p.place != p.address);
      // console.log(parcels);
      return new VillageState(destination, parcels);
    }
  }
}

console.log("The 'move' method is where the action happens.\nIt first checks whether there is a road going from the current place to the destination, and if not, it returns the old state, since this is not a valid move.\n");
console.log("Next, the method creates a new state with the destination as the robot's new place. It also needs to create a new set of parcels -- parcels that the robot is carrying (that are at the robot's current place) need to be moved along to the new place.\nAnd parcels that are addressed to the new place need to be delivered--that is, they need to be removed from the set of undelivered parcels.\nThe call to 'map' takes care of the moving, and the call to 'filter' does the delivering.\n");
console.log("Parcel objects aren't changed when they are moved but re-created.\nThe 'move' method gives a new village state but leaves the old one entirely intact.\n");

let first = new VillageState(
  "Post Office",
  [
    {place: "Post Office", address: "Alice's House"},
    {place: "Post Office", address: "John's House"},
    {place: "Gret's House", address: "Alice's House"},
  ]
);

let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);

console.log("The move causes the parcel to be delivered, which is reflected in the next state.\nBut the initial state still describes the situation where the robot is at the post office and the parcel is undelivered.");


console.groupEnd();