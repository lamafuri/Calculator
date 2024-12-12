let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let result = "";
//Create an array of all the 20 buttons only
let arr = Array.from(buttons);
arr.forEach(but =>{
    but.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){ 
            try {
                result = eval(result);
            } catch (error) {
                result = "Error:Syntax";
            }
        }
        else if(e.target.innerHTML == "AC"){
            result ="";

        }
        else if(e.target.innerHTML == "DEL"){
            result= result.substring(0,result.length-1);
        }
        else {
            result += e.target.innerHTML;
        }
        input.value = result;
    })
})
