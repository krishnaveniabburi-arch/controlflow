// part 1 growing plants

const PI = 3.1415;
const radius = 5;
const minspaceperplants = 0.8;
const startingplants = 20;

//  calculate the total garden area amd maxcapacity
const area = PI * radius * radius;
const maxcapacity = (area / minspaceperplants);

// week 1
let week1 = 1;
let count1 = startingplants * Math.pow(2, week1);
console.log("week 1 plant count:" + count1);
if (count1 > maxcapacity * 0.8)
    {
    console.log("Action: pruned");
}else if (count1 >= maxcapacity * 0.5)
    {
    console.log("Action: monitored");
}
    else {
        console.log("Action: planted");
    }

// week 2
let week2 = 2;
let count2 = startingplants * Math.pow(2, week2);
console.log("week 2 plant count: " + count2);
if (count2 > maxcapacity * 0.8){
    console.log("Action: pruned");
    } else if (count2 >= maxcapacity * 0.5)
    {
        console.log("Action: monitored ");
    } else {
        console.log("Action: planted");
    }

// week 3
let week3 = 3;
let count3 = startingplants * Math.pow(2, week3);
console.log("week 3 plant count: " + count3);
if (count3 > maxcapacity * 0.8){
    console.log("Action: pruned")
    }else if (count3 >= maxcapacity * 0.5){
        console.log("Action: monitored");
    }else {
        console.log("Action: planted");
    }

// thinking bigger finding radius of expanded garden

const biggerstartingplants = 100;
const weeks = 10;

// calculating new total plant  count after 10 weeks
const finalplantcount = biggerstartingplants * Math.pow(2, weeks);

// calculate total space required
const totalspaceneeded = finalplantcount * minspaceperplants;

// calculate additional space needed
const extraspaceneeded = totalspaceneeded - radius;

// calculate the new radius (area = PI * radius * radius)
const newradius = Math.sqrt(totalspaceneeded/PI);
console.log("after 10 weeks, we will have" + biggerstartingplants + "plants");
console.log("we will need" + totalspaceneeded + "squaremeters of total space");
console.log("that is" + extraspaceneeded + "more square meters than you have now");
console.log("The new garden needs a radius of" + newradius + "meters");

// errors in judgement


 try { 
    // calculate available space in the original garden
    const availablespace = Math.PI * math . pow(radius, 2);
    console.log('original garden available space: ${availablespace.tofixed(2)} square meters');
    // calculate space required for the inital 100 plants
    const startingplants = 100;
    const initialspacerequired = startingplants * minspaceperplants;
    console.log('space required for ${startingplants} plants: ${initialspacerequired} squaremeters');
    // condition check for the space overflow
    if (initialspacerequired > availablespace) {
        throw new Error(
           'critical space overfloe! the requested ${initialspacerequired} squaremetersfor' + 
           '${startingplants} plants exceed the available garden space of ${availablespace.tofixed(2)} squaremeters' 
        );

    }
 console.log("sucess: plants fit inside the garden footprint for now");
}
catch (error) {
    // log the appropriate error message to the console
    console.log('{error in judgement}: $ {error message}');
}
    



