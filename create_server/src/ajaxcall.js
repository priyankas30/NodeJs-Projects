

 function clickHere  () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET" , "http://localhost:5600/");

    xhr.onload=()=> {


        const refjson = JSON.parse(xhr.responseText);
        console.log(refjson);

       

        domlogic(refjson);  
    }
    xhr.send();

    
};
let domlogic= function(refjson){

   // const btn =  document.getElementById ("clickid");
   
    

    for( let i=0 ; i < refjson.lenght() ; i++){
       // let item= refjson[i];
       // btn.innerHTML=item;
       document.write( refjson[i]);
      //console.log (refjson[i]);     
    }
 
  

    


}