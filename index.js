//  prompt user upon opening the website to enter a list of comma-separated froyo flavors.
//  they will type out their flavors.
//  their input string is split into an array.
//  create an object to keep count of how many there are of each flavor.
//  make sure the console output changes depending on the users input. 




//  Get user input, split to string array and create order object 
const userInput = prompt("Please enter your order in a comma separated list.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
const strArray = userInput.split(',');
const order = {
};

//  Get order function 

function getorder(order, strArray){
    for (let i = 0; i < strArray.length; i++){
        let str = strArray[i]
        if(order[str] > 0){
            order[str] +=1;
        }else{
            order[str] = 1;
        }
    };

    return order;
};

//  Calls function 
getorder(order, strArray);

//  Demonstrates functionality in console 

groupedArr = [];
for(const key in order){
    groupedArr.push(key,': ', order[key]);
};

console.log(...groupedArr);