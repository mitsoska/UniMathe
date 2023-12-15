let upper_input;
let lower_input;

let calculate_lowest;

let steps_required = 0;

let upper_bound_of_integral;
let lower_bound_of_integral;

let img;

function preload()
{
    img = loadImage("./\assets/new.png");

}
function setup() {

    createCanvas(windowWidth, windowHeight);
    
    calculate_lowest = createButton("Υπολόγισε ελάχιστο:"); 
    calculate_lowest.mouseClicked(calculate_minimum);
    calculate_lowest.position(windowWidth / 7.5, windowHeight / 2.5);

    calculate_lowest.style("padding", '10px');
    calculate_lowest.style("border", "none");
    calculate_lowest.style("border-radius", "5px");
    calculate_lowest.style("background-color", "rgb(100, 200, 150)");

    upper_input = createInput(''); 
    upper_input.input(handle_upper_input); 

    upper_input.position(windowWidth / 2.4, windowHeight / 6);

    upper_input.style("border", '3px solid black');
    upper_input.style("padding", '10px');

    lower_input = createInput(''); 
    lower_input.input(handle_lower_input); 

    lower_input.position(windowWidth / 4,  windowHeight / 3.5);

    lower_input.style("border", '3px solid black');
    lower_input.style("padding", '10px');

}

function calculate_minimum()
{
    console.log("Hello!");
}
function handle_upper_input()
{
    upper_bound_of_integral = upper_input.value();
}

function handle_lower_input()
{
    lower_bound_of_integral = lower_input.value();
}

function draw() {

    background(10, 10, 40);

    textSize(20);

    fill(200, 200, 200);    
    
    stroke('white');

    text("Ποιο είναι το πάνω όριο του ολοκληρώματος;", 2 * windowWidth / 15, windowHeight / 6 + 28);  

    text("Και ποιο το κάτω;", 2 * windowWidth / 15, windowHeight / 3.5 + 28);  
}
