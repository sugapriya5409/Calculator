let result=document.getElementById("resultholder");
let txt="";
function disp(val){
    
    txt+= val;
    result.value=txt;
   
}
function calculate(){
    try{
        result.value=eval(result.value)
    }
    catch(e){
        result.value="Error";
    }

}

function clears(){
    result.value=null;
    txt="";
   
}
function del(){

        result.value=result.value.slice(0,-1);
        txt="";
   
   
    
}
function changeTheme(){
    document.body.classList.toggle('colorChange');
    let btn=document.querySelector('#btn');
   
   
   if(document.body.classList.contains('colorChange')){
    btn.innerHTML='🌙';
   }
   else{
    btn.innerHTML='☀︎';
   }
}