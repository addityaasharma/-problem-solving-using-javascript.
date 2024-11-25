let input,z,y,x;

x=20;
y=8;

input=2;

console.log("Choose option");
console.log('1.Addition');
console.log('2.Substraction');
console.log('3.Multiplication');
console.log('4.Division');

if(input==1){
    z=x+y;
    console.log(z);
}
else if(input==2){
    z=x-y;
    console.log(z);
}
else if(input==3){
    z=x*y;
    console.log(z);
}
else if(input==4){
    z=x/y;
    console.log(z);
}
else if(input==5){
    z=x%y;
    console.log(z);
}
else{
    console.log('Wrong input');
}