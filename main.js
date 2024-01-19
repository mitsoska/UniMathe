function calculate_least() {
    
    let input1 = document.getElementById("1").value;
    let input2 = document.getElementById("2").value;

    let answer1 = document.getElementById("result1");
    let answer2 = document.getElementById("result2");
    let answer3 = document.getElementById("result3");

    let var1 = Math.cos(input1);

    let result1 = (30 * ( Math.cos(input1) - Math.cos(input2) ) * (Math.sin(input1) - Math.sin(input2))) / ( -12 * Math.pow( (input1 - input2), 2) + 25 * Math.pow( (Math.sin(input1) - Math.sin(input2)), 2));

    let result2 = (-60 * ( Math.cos(input1) - Math.cos(input2) ) * (Math.sin(input1) - Math.sin(input2)) * (input1 - input2)) / ( (-12 * Math.pow( (input1 - input2), 2) + 25 * Math.pow( (Math.sin(input1) - Math.sin(input2)), 2)) * 5 * (Math.sin(input1) - Math.sin(input2)));

    let result3 = Math.pow(result1, 2) * (input1 - input2) + 3 * Math.pow(result2,  2) * (input1 - input2) + ( Math.pow(input1 - input2, 2) ) / 2 + 5 * result1 * result2 * (Math.sin(input1) - Math.sin(input2)) - 6 * result2 * (Math.cos(input1) - Math.cos(input2));

    answer1.innerHTML = "x = " + result1;
    answer2.innerHTML = "y = " + result2;
    answer3.innerHTML = "z = " + result3;
}
