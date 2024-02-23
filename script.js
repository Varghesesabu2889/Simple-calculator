var screen=document.getElementById('screen')
function btnclick(value){
    screen.value+=value;
}
function clearscreen(){
    screen.value=" ";

}
function findresult(){
    let result=eval(screen.value);
    screen.value=result;
}
function removelastitem(){
screen.value=screen.value.slice(0,-1)
}