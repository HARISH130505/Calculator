var dis=document.getElementById("dis");
function appendToDisplay(input){
    dis.value +=input;
}
function cleardis(){
    dis.value ="";
}
function calculate(){
    try{
    dis.value = eval(dis.value);
    }
    catch(error){
        dis.value ="error";
    }
}
function del(){
    var CurrentDis=dis.value;
    var NewDis=CurrentDis.substring(0,CurrentDis.length-1);
    dis.value=NewDis;
}
function percent(){
    var per=(dis.value)*0.01;
    dis.value=per;
}