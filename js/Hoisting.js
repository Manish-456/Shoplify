const { log: print } = console;

print("Hoisting");

print(x);
var x; // in this case decleration are hoisted to the top but not get initialized;
x = 45;


const initApp = () => {
    console.log(stepOne);
    stepOne();

}

document.addEventListener("DOMContentLoaded", initApp);



const stepOne = () => {
    console.log("Step one")
}


