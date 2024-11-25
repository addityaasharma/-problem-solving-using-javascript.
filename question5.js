let x,y,z;

x=1056;
y=196;
z=600;

if(x<y && z<y){
    console.log(`${y} is the largest number`);
}
else if(y<x && z<x){
    console.log(`${x} is largest numbers`);
}
else if(y<z && x<z){
    console.log(`${z} is largest number`);
}
else{
    console.log('You have wrote all the numbers same');
}