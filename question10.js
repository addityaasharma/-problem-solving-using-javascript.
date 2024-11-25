let age,marks,gender;
age=21;
marks=5550;
gender='F';

if(20<=age && 60<=marks && gender=='M'){
    console.log('You are accepted');
}
else if((age<20 && marks>=60 && gender=='M')){
    console.log('you got age restriction');
}
else if(age<20 && marks<60 && gender=='M'){
    console.log('you got age and marks restriction');
}
else if(age>=20 && marks<60 && gender!='M'){
    console.log('you got marks and gender restriction');
}
else if(age<20 && marks>=60 && gender!='M'){
    console.log('you got age and gender restriction');
}
else if(age>=20 && marks<60 && gender=='M'){
    console.log('you got marks restriction');
}
else if(age>=20 && marks>=60 && gender!='M'){
    console.log('you got gender restriction');
}
else{
    console.log('you got age,marks and gender restiction');
}