var kwh=0;
var i=0;

var id1=document.getElementById("id4");
var id2=document.getElementById("id5");

function CalculateValue(){
 var value1 =document.getElementById('id3').value;
  value1=Number(value1);
  document.getElementById('id4').innerHTML=value1;
 var index1 =document.getElementById('id1').value;
 var index2 =document.getElementById('id2').value;
 //daily==kilowatts
 if(index1=="daily" && index2=="KiloWatt"){
    kwh =value1*1; 
    var ammount=0;
    document.getElementById('id4').innerHTML=kwh;
    if (kwh<=100){
        ammount=kwh*4;
        document.getElementById('id5').innerHTML=ammount;
      

    }
    else if (kwh <=300){
        ammount=kwh*5;
        document.getElementById('id5').innerHTML=ammount;

    }
    else if (kwh <=500){
        ammount=kwh*7;
        document.getElementById('id5').innerHTML=ammount;

    }
    else if (kwh <600){
        ammount=kwh*10;
        document.getElementById('id5').innerHTML=ammount;

    }
}
//daily==watts
if(index1=="daily" && index2=="Watt"){
    kwh =value1*1/1000; 
    var ammount=0;
    document.getElementById('id4').innerHTML=kwh;
    if (kwh<=100){
        ammount=kwh*4;
        document.getElementById('id5').innerHTML=ammount;
      

    }
    else if (kwh <=300){
        ammount=kwh*5;
        document.getElementById('id5').innerHTML=ammount;

    }
    else if (kwh <=500){
        ammount=kwh*7;
        document.getElementById('id5').innerHTML=ammount;

    }
    else if (kwh <600){
        ammount=kwh*10;
        document.getElementById('id5').innerHTML=ammount;

    }
}
//monthaly == killowatt
if(index1=="monthly" && index2=="KiloWatt"){
    kwh =value1*30; 
    var ammount=0;
    document.getElementById('id4').innerHTML=kwh;
    if (kwh<=100){
        ammount=kwh*4;
        document.getElementById('id5').innerHTML=ammount;
      

    }
    else if (kwh >=300){
        ammount=kwh*5;
        document.getElementById('id5').innerHTML=ammount;

    }
    else if (kwh >=500){
        ammount=kwh*7;
        document.getElementById('id5').innerHTML=ammount;

    }
    
    else if (kwh >600){
        ammount=kwh*10;
        document.getElementById('id5').innerHTML=ammount;

    } 
}
// KWH less than and == 300
if(index1=="monthly" && index2=="Watt"){
    kwh =value1*30/1000; 
    var ammount=0;
    document.getElementById('id4').innerHTML=kwh;
    if (kwh<=100){
        ammount=kwh*4;
        document.getElementById('id5').innerHTML=ammount;
      

    }
    else if (kwh <=300){
        ammount=kwh*5;
        document.getElementById('id5').innerHTML=ammount;

    }
    else if (kwh <=500){
        ammount=kwh*7;
        document.getElementById('id5').innerHTML=ammount;

    }
    
    else if (kwh <600){
        ammount=kwh*10;
        document.getElementById('id5').innerHTML=ammount;
    }
    
}
}
