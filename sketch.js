let upper_input;
let lower_input;

let calculate_lowest;

let steps_required = 0;

let upper_bound_of_integral;
let lower_bound_of_integral;

let image;

function preload()
{
    img = loadImage('assets/new.png');
}

function setup() {

    
    image(img,0, 0);
    

    console.log("Het");
    
    calculate_lowest = createButton("Υπολόγισε ελάχιστο:"); 
    calculate_lowest.mouseClicked(calculate_minimum);
    calculate_lowest.position(windowWidth / 2, windowHeight / 2);

    calculate_lowest.style("padding", '10px');
    calculate_lowest.style("border", "none");
    calculate_lowest.style("border-radius", "5px");
    calculate_lowest.style("background-color", "rgb(100, 200, 150)");

    upper_input = createInput(''); 
    upper_input.input(handle_upper_input); 

    upper_input.position(windowWidth / 2, windowHeight / 4);

    upper_input.style("border", '3px solid black');

    lower_input = createInput(''); 
    lower_input.input(handle_lower_input); 

    lower_input.position(windowWidth / 2,  windowHeight / 2.5);

    lower_input.style("border", '3px solid black');
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
    fill(200, 200, 200);

    textSize(20);
    strokeWeight(0.01);
    
    text("Ποιο είναι το πάνω όριο του ολοκληρώματος;", 200, 100);  

    text("Και ποιο το κάτω;", 200, 2.5 * 300);  
}
