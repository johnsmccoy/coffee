//object.create is a powerful way to make an object. It gives us freedom to decide how the object is used and whether or not it's properties can be reassigned. All additonal properties (enumerable, writeable, configurable) are all default FALSE. This can be a problem if we are trying to iterate over the object with a for in loop if we forget to change the value of enumerable to TRUE. 
//the 'this' key word in the addCustomer() method is looking within the object for a customer key

let coffeeCompany = Object.create(null, {
    name: {
        value: "Kao Jai Coffee",
        enumerable: true
    },
    location: {
        value: "Nashville",
        enumerable: true
    },
    customers: {
        value: [],
        writeable: true,
        enumerable: true
    },
    addCustomer: {
        value: function(customer){
            this.customers.push(customer);
        }
    }
});

//an array of strings
let customers = ["Meg", "Mark", "Klaus", "Nick"];

//forEach is a method specifically for arrays. If you ever get an error that says forEach is not a function, it may mean that the thing in front of the forEach() is not an array
customers.forEach(customer => {
    //this loop will run as many times as there are customers (4 times) and each time it will add a customer to coffeeCompany.customers via the coffeeCompany.addCustomer() method
    coffeeCompany.addCustomer(customer);
})

//I am console logging the object to make sure the customers were added
console.log(coffeeCompany);





/////////////WRITING TO THE DOM VIA DOCUMENT.CREATEELEMENT

//target a place on the DOM to insert the built up fragment
let output = document.getElementById("output");

//create a fragment. This is going to act as a container for the elements I am about to create. Instead of inserting an element each time I make one, I am going to append them each to the fragment and then only touch the DOM once by appending the fragment at the end
let fragment = document.createDocumentFragment();

//create a <h1></h1> tag, assign it's text to be 'Kao Jai Coffee', and start to build up the fragment
let title = document.createElement("H1");
title.textContent = coffeeCompany.name;
fragment.appendChild(title);


//create a <p></p> tag, assign it's text to be 'Nashville', and continue to build up the fragment
let coffeeLocation = document.createElement("p");
coffeeLocation.textContent = coffeeCompany.location;
fragment.appendChild(coffeeLocation);

//finally, now that I have a fragment built with two elements in it, I am going to append it to the DOM
output.appendChild(fragment);


//////////////LOOPING OVER AN OBJECT

//looping over objects can be tricky. Something very important to remember is that key represents each key in the object. In our object, the keys are name, location, customers and addCustomer. We have to use bracket notation here becuase our object does not have a key named 'key'. If we did coffeeCompany.key our browser would throw an error. Instead, we do coffeeCompany[key] so it can evaluate key to name, location etc. Since addCustomer does not have enumerable set to TRUE, it will NOT show up in the loop. 

for(let key in coffeeCompany){
    if(key === "customers"){
        coffeeCompany[key].forEach(customer =>{
            console.log(customer);
        });
    }
    console.log(coffeeCompany[key]);
}


//using bracket notation is another way (in addition to dot notation) to access the value if a property in an object
let meg = {
    lastname: "ducharme"
}
console.log(meg["lastname"]);
//when using bracket notation without a variable we need quotes. If we did meg[lastname] it would look for a last name variable. In the for in loop 'key' is a variable that holds the name of each of the keys in the object, that's why we do not need quotes there. 