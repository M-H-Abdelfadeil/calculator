
var 
m=true,
inp=document.getElementById  ("inp" ).value,
but0=document.getElementById ("but0").value,
but1=document.getElementById ("but1").value, 
but2=document.getElementById ("but2").value,  
but3=document.getElementById ("but3").value,
but4=document.getElementById ("but4").value,
but5=document.getElementById ("but5").value,
but6=document.getElementById ("but6").value,
but7=document.getElementById ("but7").value,
but8=document.getElementById ("but8").value,
but9=document.getElementById ("but9").value,

but_plus     =document.getElementById("but_plus").value,
but_subtract =document.getElementById("but_subtract").value,
but_multiply =document.getElementById("but_multiply").value,
but_division =document.getElementById("but_division").value,

but_boint =document.getElementById("but_boint").value,
but_equal =document.getElementById("but_equal").value,
but_clear =document.getElementById("but_clear").value;

function n0(){
    document.getElementById  ("inp" ).value=inp+=but0;
    m=true;
}
function n1(){
    document.getElementById("inp").value=inp+=but1;
    m=true;
}
function n2(){
    document.getElementById("inp").value=inp+=but2;
    m=true;
}
function n3(){
    document.getElementById("inp").value=inp+=but3;
    m=true;
}
function n4(){
    document.getElementById("inp").value=inp+=but4;
    m=true;
}
function n5(){
    document.getElementById("inp").value=inp+=but5;
    m=true;
}
function n6(){
    document.getElementById("inp").value=inp+=but6;
    m=true;
}
function n7(){
    document.getElementById("inp").value=inp+=but7;
    m=true;
}
function n8(){
    document.getElementById("inp").value=inp+=but8;
    m=true;
}
function n9(){
    document.getElementById("inp").value=inp+=but9;
    m=true;
}
function nPlus(){
    
    if(m==true){
    inp=inp+but_plus;
    document.getElementById("inp").value=inp;m=false
   }
}
function nSubtract(){
    if(m==true){
    document.getElementById("inp").value=inp+=but_subtract;m=false
    }
}
function nMultiply(){
    if(m==true){
    document.getElementById("inp").value=inp+=but_multiply;m=false
    }
}
function nDivision(){
    if(m==true){
    document.getElementById("inp").value=inp+=but_division;
    m=false
   }
}
function nBoint(){
    if(m==true){
    document.getElementById("inp").value=inp+=but_boint;
    m=false
   }
}
function nEqual(){
    inp=document.getElementById("inp").value=eval(inp);
}

function nClear(){
    inp=document.getElementById("inp").value="";

}
    
  


