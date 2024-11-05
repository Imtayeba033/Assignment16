var height = 32*32;
var weight= 50;
var BMI = height/weight;
console.log(BMI);
var BMI = 20.48;
 
if(BMI< 18.5){
    console.log(" You are Underweight");
}
else if(BMI>= 18.5 ||BMI <=24.9){ 
    console.log(" You are Normal");
}
else if( BMI >=25||BMI <= 29.9){
    console.log("You are Overweight");
    
}
else{
    console.log("Otherwise, you are obese");
    
}