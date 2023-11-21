let euler = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274;
let graph;
let graph_x;
let graph_offset_x;
let graph_offset_y;
let y;

let upper_bound_of_integral;
let lower_bound_of_integral;

let upper_input;
let lower_input;

let partision_slider;
let integral = 0;

let real_integral = 0;

let trapezoids;

let calculate_integral;

let steps_required = 0;

function exponential(x)
{
  // The initial part of the variable returned is the y coordinate of the X axis. Of course, 7 is used to make the function more visible to the user.
  return ( (4 * windowHeight / 10) - pow(euler, x) * 4.0 );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  graph = createGraphics(4 * windowWidth / 10, windowHeight / 2);

  trapezoids = createGraphics(4 * windowWidth / 10, windowHeight / 2);
  
  graph.fill(20, 20, 20);
  graph.stroke(40, 40, 40);

  graph_offset_x = windowWidth / 20;
  graph_offset_y = windowHeight / 10;
  
  graph.rect(graph_offset_x - 20 , graph_offset_y - 20, graph.width + 40, graph.height + 40);


  graph.stroke(70, 70, 70);
  graph.strokeWeight(1);

  // X axis of the coordinate system
  graph.line(graph_offset_x + 10, 4 * windowHeight / 10, graph.width - 40, 4 * windowHeight / 10);

  // Y axis
  graph.line(2 * graph_offset_x, graph_offset_y + 10, 2 * graph_offset_x, graph.height - 40);

  graph.stroke(0, 80, 255);

  for (let x = -0.5; x < 4; x += 0.01)
  {
    y = exponential(x);
    
    let graph_x = x + 2 * graph_offset_x;

    graph.line(graph_x + 100 * x , y, graph_x + 100 * (x + 0.01), exponential(x + 0.01) );

  }

  calculate_integral = createButton("Υπολόγισε Ολοκλήρωμα"); 
  calculate_integral.mouseClicked(start_calculations);
  calculate_integral.position(graph.width + 200, 5.5 * graph_offset_y);

  calculate_integral.style("padding", '10px');
  calculate_integral.style("border", "none");
  calculate_integral.style("background-color", "rgb(200, 200, 150)");

  calculate_integral_steps = createButton("Υπολογισμός βημάτων"); 
  calculate_integral_steps.mouseClicked(start_step_calculations);
  calculate_integral_steps.position(graph.width + 400, 5.5 * graph_offset_y);

  calculate_integral_steps.style("padding", '10px');
  calculate_integral_steps.style("border", "none");
  calculate_integral_steps.style("background-color", "rgb(200, 200, 150)");

  upper_input = createInput(''); 
  upper_input.input(handle_upper_input); 

  upper_input.position(graph.width + 200, graph_offset_y + 20);

  lower_input = createInput(''); 
  lower_input.input(handle_lower_input); 

  lower_input.position(graph.width + 200, 2.5 * graph_offset_y + 20);

  partision_slider = createSlider(1, 500, 2, 1);
  partision_slider.position(graph.width + 200, 4 * graph_offset_y + 20);
  partision_slider.style('width', windowWidth / 5 + "px");
}


function handle_upper_input()
{
  upper_bound_of_integral = upper_input.value();
}

function handle_lower_input()
{
  lower_bound_of_integral = lower_input.value();
}

function start_calculations()
{
    console.log("You pressed Enter!", upper_bound_of_integral, lower_bound_of_integral, partision_slider.value());
    let step = (upper_bound_of_integral - lower_bound_of_integral) / partision_slider.value();
    console.log(step);

    integrate_with_approximation(upper_bound_of_integral, lower_bound_of_integral, partision_slider.value() );
}

function start_step_calculations()
{
  let current_integral = 0;
  let current_partision = 1;
  let step = (upper_bound_of_integral - lower_bound_of_integral) * 1.0 / current_partision;

  real_integral = pow(euler, upper_bound_of_integral) - pow(euler, lower_bound_of_integral);

  while ( abs(real_integral - current_integral) > 0.001 )
  {
    current_integral = 0;
    current_partision++;
    step = (upper_bound_of_integral - lower_bound_of_integral) * 1.0 / current_partision

    for (let i = lower_bound_of_integral * 1.0; Math.round(i * 100) / 100 < upper_bound_of_integral * 1.0; i += step)
    {
      current_integral += step * (pow(euler, i) + pow(euler, (i + step) ) ) / 2;
    }

  }

  steps_required = current_partision;
  
}

function integrate_with_approximation(upper_bound, lower_bound, partisions)
{
  console.log(upper_bound, lower_bound, partisions);

  integral = 0;
  let step = (upper_bound - lower_bound) * 1.0 / partisions;

  trapezoids.clear();  

  trapezoids.fill(120, 143, 52);
  trapezoids.stroke(80, 255, 52);

  for (let i = lower_bound * 1.0; Math.round(i * 100) / 100 < upper_bound * 1.0; i += step)
  {
    console.log(i);
    let graph_x = i + 2 * graph_offset_x;
    
    trapezoids.line(graph_x + 100 * i, 4 * windowHeight / 10, graph_x + 100 * i, exponential(i) );
    trapezoids.line(graph_x + 100 * i, exponential(i), graph_x + 100 * (i + step), exponential(i + step) );
    trapezoids.line(graph_x + 100 * (i + step), 4 * windowHeight / 10, graph_x + 100 * (i + step), exponential(i + step) );

    integral += step * (pow(euler, i) + pow(euler, (i + step) ) ) / 2;
  }


  real_integral = pow(euler, upper_bound) - pow(euler, lower_bound);
}

function draw() {
  background(0, 0, 0);
  image(graph, 0, 0);
  image(trapezoids, 0, 0);

  fill(200, 200, 200);

  textSize(20);
  strokeWeight(0.01);
  
  text("Ποιο είναι το πάνω όριο του ολοκληρώματος;", graph.width + 200, graph_offset_y);  

  text("Και ποιο το κάτω;", graph.width + 200, 2.5 * graph_offset_y);  

  text("Αριθμός διαστημάτων: " + partision_slider.value(), graph.width + 200, 4 * graph_offset_y );

  text("Βήματα που χρειάστηκαν για να υπάρξει διαφορά \nμικρότερη του ενός χιλιοστού: " + steps_required, graph.width + 200, 6.5 * graph_offset_y );

  text("Προσεγγιστικό ολοκλήρωμα: " + integral, graph_offset_x, graph.height + 100);
  text("Πραγματικό ολοκλήρωμα: " + real_integral, graph_offset_x, graph.height + 200);
  text("Διαφορά: " + abs(real_integral - integral), graph_offset_x, graph.height + 300);

  let x_variable = mouseX;

  if (mouseX > (4 + 2 * graph_offset_x) + 100 * 4)
    x_variable = (4 + 2 * graph_offset_x) + 100 * 4;

  if (mouseX < (-0.5 + 2 * graph_offset_x) + 100 * -0.5)
    x_variable = (-0.5 + 2 * graph_offset_x) + 100 * -0.5;


  text("x = " + ((x_variable - 2 * graph_offset_x) / 100).toPrecision(4) + "\nf(x) = " + (pow(euler, (x_variable - 2 * graph_offset_x) / 100)).toPrecision(4) , graph.width - 150, graph.height - 50);  


  fill(0, 0, 0);
  stroke(255, 255, 255);

  
  circle( x_variable, (4 * graph_offset_y) - pow(euler, (x_variable - 2 * graph_offset_x) / 100) * 4.0, 10);
  
}
